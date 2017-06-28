import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

import { ModalComponent } from './modal.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { FrameworkDetailComponent } from './frameworks/framework-detail.component';

@NgModule({
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    ModalComponent,
    FrameworksComponent,
    FrameworkDetailComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    ModalComponent,
    FrameworksComponent,
    FrameworkDetailComponent,
  ],
  providers: [
    ItemService,
    ModalDialogService,
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
