import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {ExpenseFormPage} from '../expense-form/expense-form';
import {UpdateformPage} from '../updateform/updateform';

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
passpage: boolean=false;

expenses: FirebaseListObservable<any[]>;
public people: FirebaseListObservable<any>;


constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public mdlCtrl: ModalController) {
this.expenses = db.list('/expense');



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
  }

showExpense(category, amount, date, remark, key, object){



    console.log("amount : " + amount);
        console.log("category : " + category);
            console.log("date : " + date);
                console.log("remark : " + remark);
                console.log("key : " + key);
                console.log(object);

          //  this.comp.extend(object, {this.passpage});
              this.passpage=true;



this.navCtrl.push(UpdateformPage, object
);



   }

   getAllChilds(key: string){
   console.log("within getAllchilds");
this.people = this.db.list('expense',{
query:{
orderByChild : 'category',
equalTo: key
}

});
console.log(this.people);

   }







  }
