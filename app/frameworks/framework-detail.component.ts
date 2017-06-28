import { Component, OnInit } from '@angular/core';
import { PageRoute } from 'nativescript-angular/router';
import { ModalDialogParams } from 'nativescript-angular/directives//dialogs';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'framework-detail',
  templateUrl: 'framework-detail.component.html'
})

export class FrameworkDetailComponent implements OnInit {
  public framework: string;

  constructor(
    private pageRoute: PageRoute,
    private params: ModalDialogParams) { }

  ngOnInit() {
    this.pageRoute.activatedRoute
      .switchMap(activatedRoute => activatedRoute.params)
      .forEach((params) => {
        this.framework = params["framework"];
      });
  }

  public close() {
    this.params.closeCallback(this.framework);
  }
}
