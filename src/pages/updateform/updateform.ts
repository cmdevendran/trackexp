import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {ReportPage} from '../report/report';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the UpdateformPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-updateform',
  templateUrl: 'updateform.html',
})
export class UpdateformPage {

cats: FirebaseListObservable<any[]>;
expenses: FirebaseListObservable<any[]>;



expenseForm: FormGroup;

constructor(public auth: AuthProvider, public db: AngularFireDatabase,public viewCtrl: ViewController,  public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
this.cats = db.list('/'+this.auth.currentUser+'/category');

this.expenses = db.list('/'+this.auth.currentUser+'/expense');

this.expenseForm = this.formBuilder.group({


expDate: [this.navParams.get("ExpenseDate"), Validators.required],
amount: [this.navParams.get("ExpenseAmount"), Validators.required],
scat: [this.navParams.get("category") , Validators.required],
remark: [this.navParams.get("remark")]

});


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateformPage');
  }


  logForm(){
  console.log("key"+this.navParams.get("$key"));
  this.expenses.update(this.navParams.get("$key"),{
    ExpenseDate: this.expenseForm.value.expDate,
    ExpenseAmount: this.expenseForm.value.amount,
    category: this.expenseForm.value.scat,
    remark: this.expenseForm.value.remark,
  });
  this.gotoPreviousPage();
  }

  gotoPreviousPage(){

  this.viewCtrl.dismiss();
  //this.navCtrl.push(ReportPage);

  }
  gotoBackPage(){
this.navCtrl.push(ReportPage);
  }
}
