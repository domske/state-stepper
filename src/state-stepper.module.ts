import { NgModule } from '@angular/core';
import { StateStepperComponent } from './components/state-stepper/state-stepper.component';
import { IonicModule } from 'ionic-angular';

@NgModule({
  imports: [IonicModule],
  declarations: [StateStepperComponent],
  exports: [StateStepperComponent]
})
export class StateStepperModule {}
