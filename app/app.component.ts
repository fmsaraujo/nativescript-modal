import { Component, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from 'nativescript-angular/modal-dialog';
import { ModalComponent } from './modal.component';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent {
  constructor(
    private modal: ModalDialogService,
    private vcRef: ViewContainerRef) { }
  
  public showModal() {

    const options: ModalDialogOptions = {
      context: {},
      fullscreen: true,
      viewContainerRef: this.vcRef
    };
    
    this.modal
      .showModal(ModalComponent, options)
      .then(res => console.log(res));
  }
}
