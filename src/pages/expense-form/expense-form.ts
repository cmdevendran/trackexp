import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ExpenseFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-expense-form',
  templateUrl: 'expense-form.html',
})
export class ExpenseFormPage {
cats: FirebaseListObservable<any[]>;
expenses: FirebaseListObservable<any[]>;


pass: boolean;
expenseForm: FormGroup;


  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
this.cats = db.list('/category');
this.expenses = db.list('/expense');
this.pass = navParams.get('passpage');
console.log(this.pass);

if(this.pass==true){
console.log("pass : true");
this.expenseForm = this.formBuilder.group({


expDate: ['01/01/2017'],
amount: ['59'],
scat: ['GROCERY'],
remark: [''],

});
}


else{
this.expenseForm = this.formBuilder.group({
expDate: ['', Validators.required],
amount: ['', Validators.required],
scat: ['' , Validators.required],
remark: ['']





      });}

  }
logForm(){
console.log(this.expenseForm.value);
this.expenses.push({
  ExpenseDate: this.expenseForm.value.expDate,
  ExpenseAmount: this.expenseForm.value.amount,
  category: this.expenseForm.value.scat,
  remark: this.expenseForm.value.remark,
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseFormPage');
  }

}
