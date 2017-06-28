import { Component } from '@angular/core';
import { IonicPage, Nav, NavController, NavParams, ModalController, ViewController, App } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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



  constructor(public db: AngularFireDatabase, public appCtrl: App, public viewCtrl: ViewController, public modalCtrl: ModalController,
    public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.cats = db.list('/category');
    this.expenses = db.list('/expense');


    console.log("pass : before entering : " + this.navParams.get("page"));

    console.log(this.navParams.get("ExpenseDate"));





    this.expenseForm = this.formBuilder.group({


      expDate: ['', Validators.required],
      amount: ['', Validators.compose([Validators.required, Validators.pattern('[0-9 ]*')])],
      scat: ['', Validators.required],
      remark: ['']

    });



  }



  logForm() {

    if (this.expenseForm.valid) {
      this.expenses.push({
        ExpenseDate: this.expenseForm.value.expDate,
        ExpenseAmount: this.expenseForm.value.amount,
        category: this.expenseForm.value.scat,
        remark: this.expenseForm.value.remark,
      });
      this.navCtrl.push(ExpenseFormPage);
      //this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));
        //this.navCtrl.pop().catch(() => console.log('pop was not dismissed'));
      this.navCtrl.setRoot(ExpenseFormPage);


    }

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseFormPage');
  }

  gotoPreviousPage() {


    this.viewCtrl.dismiss();


  }

}
