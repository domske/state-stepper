import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StateStepperComponent } from '../../../state-stepper';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('stepper') stepper: StateStepperComponent;

  steps = [
    {
      icon: 'list',
      text: 'Input'
    },
    {
      icon: 'cog',
      text: 'Parameter'
    },
    {
      icon: 'cube',
      text: 'Save'
    },
    {
      icon: 'cloud-upload',
      text: 'Upload'
    },
    {
      icon: 'checkmark',
      text: 'Done'
    }
  ];

  ionViewDidEnter() {
    this.stepper.reset();
  }
}
