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

expenseForm: FormGroup;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
this.cats = db.list('/category');
  this.expenseForm = this.formBuilder.group({

        expDate: ['', Validators.required],
  amount: ['', Validators.required],
    scat: [ , Validators.required],
      remark: [''],



      });

  }
logForm(){
console.log(this.expenseForm.value);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseFormPage');
  }

}
