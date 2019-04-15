import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import template from './state-stepper.component.html';
import style from './state-stepper.component.css';
var StateStepperComponent = /** @class */ (function () {
    function StateStepperComponent() {
        this.steps = [
            {
                icon: 'help',
                text: 'Input'
            },
            {
                icon: 'cog',
                text: 'Process'
            },
            {
                icon: 'checkmark',
                text: 'Done'
            }
        ];
        this.stepIndex = 0;
    }
    StateStepperComponent.prototype.stepOk = function () {
        this.nextStep('success');
    };
    StateStepperComponent.prototype.stepWarn = function () {
        this.nextStep('warning');
    };
    StateStepperComponent.prototype.stepError = function () {
        this.nextStep('danger');
    };
    StateStepperComponent.prototype.nextStep = function (currentStepState) {
        // Current step.
        var currentStep = this.steps[this.stepIndex];
        currentStep.state = currentStepState;
        currentStep.active = false;
        if (currentStepState === 'danger') {
            return;
        }
        // Next step.
        this.stepIndex++;
        if (this.stepIndex >= this.steps.length) {
            this.stepIndex = this.steps.length - 1;
            return;
        }
        var nextStep = this.steps[this.stepIndex];
        this.steps.forEach(function (step) { return (step.active = false); });
        nextStep.active = true;
        nextStep.state = 'current';
        this.scrollToActiveStep();
    };
    StateStepperComponent.prototype.reset = function () {
        this.stepIndex = 0;
        this.steps.forEach(function (step) {
            step.active = false;
            step.state = '';
        });
        this.steps[0].active = true;
        this.steps[0].state = 'current';
        this.scrollToActiveStep();
    };
    StateStepperComponent.prototype.scrollToActiveStep = function () {
        var _this = this;
        setTimeout(function () {
            var element = _this.stepperElement.nativeElement;
            for (var i = 0; i < element.children.length; i++) {
                var step = element.children.item(i);
                if (step.classList.contains('active')) {
                    step.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                        inline: 'center'
                    });
                    break;
                }
            }
        });
    };
    StateStepperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'state-stepper',
                    template: template,
                    styles: [style]
                },] },
    ];
    /** @nocollapse */
    StateStepperComponent.propDecorators = {
        "stepperElement": [{ type: ViewChild, args: ['stepper',] },],
        "steps": [{ type: Input },],
    };
    return StateStepperComponent;
}());
export { StateStepperComponent };
//# sourceMappingURL=state-stepper.component.js.map