import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from "./directives/basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from "./directives/better-highlight/better-highlight.directive";
import { BetterHighlight2Directive } from "./directives/better-highlight/better-highlight2.directive";
import { UnlessDirective } from "./directives/unless/unless.directive";

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    BetterHighlight2Directive,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
