import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import{NativeScriptFormsModule } from 'nativescript-angular/forms';
import{NativeScriptRouterModule} from 'nativescript-angular/router';
import {Data} from '../app/shared/providers/data/data'; 
import { AppComponent } from "./app.component";
import { routes, navigatableComponents} from './app.routing'; 
//import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
//import { NativeScriptUISideDrawerModule } from "nativescript-sidedrawer" ; 
//import { RadioButtonModule } from 'nativescript-radiobutton/angular';


@NgModule({
  
  imports: [NativeScriptModule,
    //NativeScriptUISideDrawerModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes),
    
   ],
    
  declarations: [AppComponent,...navigatableComponents],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [Data] 
})
export class AppModule {}
