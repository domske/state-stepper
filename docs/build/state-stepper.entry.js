import { r as registerInstance, h, c as getElement } from './core-5e328182.js';

const StateStepperComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = '';
    }
    async stepNext(currentState, stop = false) {
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
        return (index >= steps.length - 1 &&
            steps[steps.length - 1].state &&
            steps[steps.length - 1].state !== 'active');
    }
    async resetSteps(stepIndex = 0) {
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
    async stepBack() {
        const index = this.getActiveElementIndex();
        if (index < 0) {
            return;
        }
        const steps = this.getStepElements();
        steps[index].state = '';
        if (index - 1 >= 0) {
            steps[index - 1].state = 'active';
        }
        else {
            steps[0].state = '';
        }
    }
    getActiveElementIndex() {
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
            }
            else {
                activeStepIndex = steps.length - 1;
            }
        }
        return activeStepIndex;
    }
    getStepElements() {
        const slot = this.el.shadowRoot.querySelector('slot');
        const childs = slot
            .assignedElements()
            .filter(node => node.nodeName === 'STATE-STEPPER-STEP');
        return childs;
    }
    render() {
        return (h("div", { class: `wrapper ${this.size}` }, h("slot", null)));
    }
    get el() { return getElement(this); }
    static get style() { return ":host .wrapper {\n  text-align: center;\n  padding: 10px 0px;\n  overflow: auto;\n  white-space: nowrap;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  font-family: Arial, Helvetica, sans-serif;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n:host .large ::slotted(state-stepper-step) {\n  --size: 120px;\n}\n:host .small ::slotted(state-stepper-step) {\n  --size: 40px;\n}"; }
};

export { StateStepperComponent as state_stepper };
