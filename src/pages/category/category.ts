import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  cats: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController, public auth: AuthProvider) {


    this.cats = db.list('/' + this.auth.currentUser + '/category');
    console.log('/' + this.auth.currentUser + '/category');
    this.auth.checkAuth();
    if(this.auth.myauthdata==null){
    console.log("credentials from category" );
    //this.auth.loginWithEmail(credentials);
    }
  }

  getCategories(): FirebaseListObservable<any> {
    return this.cats;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  addCategory() {
    let prompt = this.alertCtrl.create({
      title: 'Category Name',
      message: "Enter a name for this new song you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.cats.push({
              title: data.title
            });
          }
        }
      ]
    });
    prompt.present();
  }


  removeCat(catId: string) {
    let confirm = this.alertCtrl.create({
      title: 'Category Delete?',
      message: 'Do you want to Delete?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.cats.remove(catId);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }




}
