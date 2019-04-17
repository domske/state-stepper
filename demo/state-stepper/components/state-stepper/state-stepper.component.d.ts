import { ElementRef } from '@angular/core';
export interface Step {
    icon: string;
    text?: string;
    state?: string;
    active?: boolean;
}
export declare class StateStepperComponent {
    stepperElement: ElementRef;
    steps: Step[];
    stepIndex: number;
    stepOk(): void;
    stepWarn(): void;
    stepError(): void;
    nextStep(currentStepState?: string): void;
    reset(): void;
    private scrollToActiveStep();
}
