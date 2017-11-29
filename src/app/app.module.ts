import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActionSheetPage } from '../pages/ActionSheet/ActionSheet';
import { AlertPage } from '../pages/Alert/Alert';
import { BadgePage } from '../pages/Badge/Badge';
import { ButtonPage } from '../pages/Button/Button';
import { CardPage } from '../pages/Card/Card';
import { CheckboxPage } from '../pages/Checkbox/Checkbox';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
