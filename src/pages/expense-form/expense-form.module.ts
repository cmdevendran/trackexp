import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseFormPage } from './expense-form';


@NgModule({
  declarations: [
    ExpenseFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseFormPage),
  ],
  exports: [
    ExpenseFormPage
  ]
})
export class ExpenseFormPageModule {}
