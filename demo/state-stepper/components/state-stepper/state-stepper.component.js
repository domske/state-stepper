import { Component, ViewChild, ElementRef, Input } from '@angular/core';
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
                    template: "\n    <div #stepper class=\"stepper\">\n      <div class=\"step\" *ngFor=\"let step of steps\" [class.active]=\"step.active\" [ngClass]=\"step.state\">\n        <div class=\"ani-wrapper\">\n          <div class=\"icon-wrapper\">\n            <ion-icon [name]=\"step.icon\"></ion-icon>\n          </div>\n        </div>\n        <div class=\"text\" [class.active]=\"step.active\">{{ step.text }}</div>\n      </div>\n    </div>\n  ",
                    styles: [
                        "\n      .stepper {\n        text-align: center;\n        padding: 10px 0px;\n        overflow: auto;\n        white-space: nowrap;\n        user-select: none;\n      }\n      .stepper .step {\n        display: inline-block;\n        position: relative;\n        width: 100px;\n      }\n      .stepper .step:last-of-type {\n        margin-right: 0;\n      }\n      .stepper .step:last-of-type::before {\n        display: none;\n      }\n      .stepper .step .ani-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      .stepper .step .icon-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        margin: 0;\n        overflow: hidden;\n        width: 60px;\n        height: 60px;\n        background-color: #989aa2;\n        color: #ffffff;\n        border-radius: 50%;\n        transform: scale(0.67);\n        transition: all 300ms ease-out;\n        will-change: transform;\n        font-size: 2em;\n      }\n      .stepper .step .text {\n        opacity: 0.5;\n        transition: all 300ms ease-out;\n        will-change: opacity;\n        margin-top: 1px;\n      }\n      .stepper .step .text.active {\n        opacity: 1;\n      }\n      .stepper .step::before {\n        display: block;\n        position: absolute;\n        content: '';\n        background-color: #989aa2;\n        left: 50%;\n        width: 100%;\n        height: 6px;\n        margin-top: 27px;\n        transition: all 300ms ease-out;\n        will-change: background-color;\n      }\n      .stepper .step.active .ani-wrapper {\n        animation: active 1s 300ms infinite ease-in-out;\n      }\n      .stepper .step.active .icon-wrapper {\n        transform: scale(1);\n      }\n      .stepper .step.current .icon-wrapper {\n        background-color: #3880ff;\n        color: #ffffff;\n      }\n      .stepper .step.danger .ani-wrapper {\n        animation: danger 600ms 300ms ease-in-out;\n      }\n      .stepper .step.danger .icon-wrapper {\n        background-color: #f04141;\n        color: #ffffff;\n      }\n      .stepper .step.warning .ani-wrapper {\n        animation: warn 1s 300ms ease-in-out;\n      }\n      .stepper .step.warning .icon-wrapper {\n        background-color: #ffce00;\n        color: #ffffff;\n      }\n      .stepper .step.warning::before {\n        background-color: #ffce00;\n      }\n      .stepper .step.success .ani-wrapper {\n        animation: success 1s 300ms;\n      }\n      .stepper .step.success .icon-wrapper {\n        background-color: #10dc60;\n        color: #ffffff;\n      }\n      .stepper .step.success::before {\n        background-color: #10dc60;\n      }\n\n      @keyframes active {\n        from {\n          transform: scale3d(1, 1, 1);\n        }\n        50% {\n          transform: scale3d(0.9, 0.9, 0.9);\n        }\n        to {\n          transform: scale3d(1, 1, 1);\n        }\n      }\n\n      @keyframes danger {\n        0% {\n          transform: translateX(0);\n        }\n        10% {\n          transform: translateX(-6px) rotateY(-9deg);\n        }\n        20% {\n          transform: translateX(5px) rotateY(7deg);\n        }\n        30% {\n          transform: translateX(-4px) rotateY(-6deg);\n        }\n        40% {\n          transform: translateX(3px) rotateY(5deg);\n        }\n        50% {\n          transform: translateX(-2px) rotateY(-4deg);\n        }\n        60% {\n          transform: translateX(1px) rotateY(3deg);\n        }\n        70% {\n          transform: translateX(0);\n        }\n      }\n\n      @keyframes success {\n        from,\n        to {\n          transform: scale3d(1, 1, 1);\n        }\n        30% {\n          transform: scale3d(1.2, 0.8, 1);\n        }\n        40% {\n          transform: scale3d(0.8, 1.2, 1);\n        }\n        50% {\n          transform: scale3d(1.1, 0.9, 1);\n        }\n        65% {\n          transform: scale3d(0.98, 1.02, 1);\n        }\n        75% {\n          transform: scale3d(1.02, 0.98, 1);\n        }\n      }\n\n      @keyframes warn {\n        from,\n        10%,\n        to {\n          transform: translate3d(0, 0, 0);\n        }\n        20% {\n          transform: skewX(-12deg) skewY(-12deg);\n        }\n        30% {\n          transform: skewX(6deg) skewY(6deg);\n        }\n        40% {\n          transform: skewX(-3deg) skewY(-3deg);\n        }\n        50% {\n          transform: skewX(1.5deg) skewY(1.5deg);\n        }\n        60% {\n          transform: skewX(-0.8deg) skewY(-0.8deg);\n        }\n        70% {\n          transform: skewX(0.4deg) skewY(0.4deg);\n        }\n        80% {\n          transform: skewX(-0.2deg) skewY(-0.2deg);\n        }\n      }\n    "
                    ]
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