import { ApplicationRef, DoBootstrap, Injector, NgModule, inject } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { createCustomElement } from "@angular/elements";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule]

})
export class AppModule implements DoBootstrap {
    private readonly _injector = inject(Injector);

    ngDoBootstrap(appRef: ApplicationRef): void {
        const ce = createCustomElement(AppComponent, {injector: this._injector});
        customElements.define('mfe2-root', ce);

    }
}