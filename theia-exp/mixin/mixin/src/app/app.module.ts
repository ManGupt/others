import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ReactRendererComponent } from './angular/component';
import { ReactBidirectionalRendererComponent } from './angular-bi/component-bi';
import { NgRankComponent } from './angular-bi/ng';
import { EmitComponent } from './angular-emit/component-emit';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ReactRendererComponent,
    ReactBidirectionalRendererComponent,
    NgRankComponent,
    EmitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const el1 = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('web-app-root-emit', el1);
    const el2 = createCustomElement(EmitComponent, { injector: this.injector });
    customElements.define('web-emit-button', el2);
  }

  ngDoBootstrap() {}
}
