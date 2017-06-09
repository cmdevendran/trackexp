import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {ExpenseFormPage} from '../expense-form/expense-form';

/**
 * Generated class for the ReportPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

expenses: FirebaseListObservable<any[]>;


  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
this.expenses = db.list('/expense');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }
  showExpense(exp: string){
   this.navCtrl.push(ExpenseFormPage);

  }

}
