import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        RouterModule
    ],
    exports: [
        BrowserAnimationsModule
    ],
    providers: [
        Title
    ],
    declarations: [
        //NotFoundComponent
    ]
})
export class CoreModule {

    constructor(
        @Optional() @SkipSelf() parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
        }
    }

}
