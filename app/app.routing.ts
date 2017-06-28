import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { FrameworksComponent } from './frameworks/frameworks.component';
import { FrameworkDetailComponent } from './frameworks/framework-detail.component';

const routes: Routes = [
  // { path: "", redirectTo: "/items", pathMatch: "full" },
  { path: "items", component: ItemsComponent },
  { path: "item/:id", component: ItemDetailComponent },
  { path: "frameworks", component: FrameworksComponent },
  { path: "framework/:framework", component: FrameworkDetailComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
