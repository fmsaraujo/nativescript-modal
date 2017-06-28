import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';

@Component({
  moduleId: module.id,
  selector: 'frameworks',
  templateUrl: './frameworks.component.html'
})

export class FrameworksComponent implements OnInit {
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
