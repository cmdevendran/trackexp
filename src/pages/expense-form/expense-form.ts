import { Component } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {HomePage} from '../home/home';

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
rootPage: any = HomePage;
cats: FirebaseListObservable<any[]>;
expenses: FirebaseListObservable<any[]>;


pass: boolean = false;
expenseForm: FormGroup;



constructor(public db: AngularFireDatabase,public viewCtrl: ViewController, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
this.cats = db.list('/category');
this.expenses = db.list('/expense');


console.log("pass : before entering : " + this.navParams.get("page"));

console.log(this.navParams.get("ExpenseDate"));





this.expenseForm = this.formBuilder.group({


expDate: ['', Validators.required],
amount: ['', Validators.required],
scat: ['' , Validators.required],
remark: ['']

});



}



logForm(){
this.expenses.push({
  ExpenseDate: this.expenseForm.value.expDate,
  ExpenseAmount: this.expenseForm.value.amount,
  category: this.expenseForm.value.scat,
  remark: this.expenseForm.value.remark,
});

     this.viewCtrl.dismiss();
}



  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseFormPage');
  }

  gotoPreviousPage(){


  this.viewCtrl.dismiss();


  }

}
