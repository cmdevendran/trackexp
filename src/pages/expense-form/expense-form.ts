import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

expenseForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  this.expenseForm = this.formBuilder.group({
        title: ['', Validators.required],
        description: [''],
      });

  }
logForm(){
console.log(this.expenseForm.value);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseFormPage');
  }

}
