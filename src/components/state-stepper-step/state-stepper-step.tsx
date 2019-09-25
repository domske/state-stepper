import { Component, h, Prop, Watch, Element } from '@stencil/core';

@Component({
  tag: 'state-stepper-step',
  styleUrl: 'state-stepper-step.scss',
  shadow: true
})
export class StateStepperStepComponent {
  @Prop() state = '';

  @Element() el: HTMLElement;

  @Watch('state')
  watchHandler(newValue: string) {
    if (newValue === 'active') {
      this.scrollToMe();
    }
  }

  private scrollToMe(): void {
    setTimeout(() => {
      this.el.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    });
  }

  componentDidLoad() {
    if (this.state === 'active') {
      this.scrollToMe();
    }
  }

  private getStepStateClassName(): string {
    return this.state;
  }

  render() {
    return (
      <div class={'wrapper ' + this.getStepStateClassName()}>
        <div class="icon-wrapper">
          <div class="ani-wrapper">
            <div class="icon">
              <slot name="icon" />
            </div>
          </div>
        </div>
        <div class="text">
          <slot name="text" />
        </div>
      </div>
    );
  }
}
