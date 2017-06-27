import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives//dialogs';

@Component({
  selector: 'my-modal',
  templateUrl: 'modal.component.html'
})

export class ModalComponent implements OnInit {
  public frameworks: string[];

  constructor(private params: ModalDialogParams) {
    this.frameworks = [
      "NativeScript",
      "Xamarin",
      "Onsen UI",
      "Ionic Framework",
      "React Native"
    ]
  }

  public ngOnInit() { }

  public close(res: string) {
    this.params.closeCallback(res);
  }
}
