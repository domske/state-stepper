import { NgModule } from '@angular/core';
import { StateStepperComponent } from './components/state-stepper/state-stepper.component';
import { IonicModule } from 'ionic-angular';
var StateStepperModule = (function () {
    function StateStepperModule() {
    }
    StateStepperModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IonicModule],
                    declarations: [StateStepperComponent],
                    exports: [StateStepperComponent]
                },] },
    ];
    return StateStepperModule;
}());
export { StateStepperModule };
//# sourceMappingURL=state-stepper.module.js.map