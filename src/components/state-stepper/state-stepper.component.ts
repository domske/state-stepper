import { Component, ViewChild, ElementRef, Input } from '@angular/core';

import template from './state-stepper.component.html';
import style from './state-stepper.component.css';

export interface Step {
  icon: string;
  text?: string;
  state?: string;
  active?: boolean;
}

@Component({
  selector: 'state-stepper',
  template: template + '',
  styles: [style + '']
})
export class StateStepperComponent {
  @ViewChild('stepper') stepperElement: ElementRef;

  @Input() steps: Step[] = [
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

  stepIndex = 0;

  public nextStep(currentStepState?: string) {
    // Current step.
    const currentStep = this.steps[this.stepIndex];

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
    const nextStep = this.steps[this.stepIndex];
    this.steps.forEach(step => (step.active = false));
    nextStep.active = true;
    nextStep.state = 'current';

    this.scrollToActiveStep();
  }

  public reset() {
    this.stepIndex = 0;
    this.steps.forEach(step => {
      step.active = false;
      step.state = '';
    });
    this.steps[0].active = true;
    this.steps[0].state = 'current';
    this.scrollToActiveStep();
  }

  private scrollToActiveStep() {
    setTimeout(() => {
      const element = this.stepperElement.nativeElement as HTMLElement;
      for (let i = 0; i < element.children.length; i++) {
        const step = element.children.item(i);
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
  }
}
