import { Component, h, Prop, Element, Method } from '@stencil/core';
import { StateStepperStepComponent } from '../state-stepper-step/state-stepper-step';

@Component({
  tag: 'state-stepper',
  styleUrl: 'state-stepper.scss',
  shadow: true
})
export class StateStepperComponent {
  @Prop() size = '';

  @Element() el: HTMLElement;

  @Method()
  public async stepNext(currentState: string, stop = false): Promise<boolean> {
    const index = this.getActiveElementIndex();
    if (index < 0) {
      return;
    }

    const steps = this.getStepElements();

    if (index >= 0) {
      const prevState = steps[index].state;
      // Found a active or latest step.
      steps[index].state = !stop && !prevState ? 'active' : currentState;
      if (!stop && !!prevState && index + 1 < steps.length) {
        // Set next step active.
        steps[index + 1].state = 'active';
      }
    }

    // Return of the last step is reached.
    return (
      index >= steps.length - 1 &&
      steps[steps.length - 1].state &&
      steps[steps.length - 1].state !== 'active'
    );
  }

  @Method()
  public async resetSteps(stepIndex = 0): Promise<void> {
    const steps = this.getStepElements();
    if (steps.length === 0) {
      return;
    }

    for (let i = steps.length - 1; i > stepIndex; i--) {
      steps[i].state = '';
    }

    if (stepIndex >= 0 && stepIndex < steps.length) {
      if (stepIndex > 0 && !steps[stepIndex].state) {
        return;
      }
      steps[stepIndex].state = 'active';
    }
  }

  @Method()
  public async stepBack(): Promise<void> {
    const index = this.getActiveElementIndex();
    if (index < 0) {
      return;
    }

    const steps = this.getStepElements();

    steps[index].state = '';
    if (index - 1 >= 0) {
      steps[index - 1].state = 'active';
    } else {
      steps[0].state = '';
    }
  }

  private getActiveElementIndex(): number {
    const steps = this.getStepElements();
    if (steps.length === 0) {
      return -1;
    }

    // Find step with active state.
    let activeStepIndex = steps.findIndex(s => s.state === 'active');

    if (activeStepIndex < 0) {
      // Nothing found. Find step before a unset state.
      activeStepIndex = steps.findIndex(s => s.state === '');
      activeStepIndex--;
    }

    if (activeStepIndex < 0) {
      // Nothing found. Select first step if unset or the last.
      if (!steps[0].state) {
        activeStepIndex = 0;
      } else {
        activeStepIndex = steps.length - 1;
      }
    }

    return activeStepIndex;
  }

  private getStepElements(): StateStepperStepComponent[] {
    const slot = this.el.shadowRoot.querySelector('slot');
    const childs = slot
      .assignedElements()
      .filter(node => node.nodeName === 'STATE-STEPPER-STEP');
    return (childs as any) as StateStepperStepComponent[];
  }

  render() {
    return (
      <div class={`wrapper ${this.size}`}>
        <slot />
      </div>
    );
  }
}
