import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { Router } from '@angular/router';

@Component({
  selector: 'my-modal',
  templateUrl: 'modal.component.html'
})

export class ModalComponent implements OnInit {
  // public frameworks: string[];

  // constructor(private params: ModalDialogParams) {
  //   this.frameworks = [
  //     "NativeScript",
  //     "Xamarin",
  //     "Onsen UI",
  //     "Ionic Framework",
  //     "React Native"
  //   ]
  // }
  constructor(
    private params: ModalDialogParams,
    private router: Router) {
    console.log("in constructor");
  }

  public ngOnInit() {
    console.log(`Navigating to '${this.params.context.route}'...`);
    this.router
      .navigate([this.params.context.route])
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  public close(res: string) {
    console.log("in close");
    this.params.closeCallback(res);
  }
}
