export default `
<div #stepper class="stepper">
  <div
    class="step"
    *ngFor="let step of steps"
    [class.active]="step.active"
    [ngClass]="step.state"
  >
    <div class="icon-wrapper">
      <ion-icon class="icon" [name]="step.icon"></ion-icon>
    </div>
    <div class="text" [class.active]="step.active">{{ step.text }}</div>
  </div>
</div>
`;