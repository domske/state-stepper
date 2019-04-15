export default `
:host .stepper {
  text-align: center;
  padding: 10px 0px;
  overflow: auto;
  white-space: nowrap;
  user-select: none;
}
:host .stepper .step {
  display: inline-block;
  position: relative;
  width: 100px;
}
:host .stepper .step:last-of-type {
  margin-right: 0;
}
:host .stepper .step:last-of-type::before {
  display: none;
}
:host .stepper .step .icon {
  width: 30px;
  height: 30px;
  background-color: #989aa2;
  color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  transform: scale(0.67);
  transition: all 300ms ease-out;
  will-change: transform;
}
:host .stepper .step .text {
  font-size: 0.8em;
  opacity: 0.5;
  transition: all 300ms ease-out;
  will-change: opacity;
}
:host .stepper .step .text.active {
  opacity: 1;
}
:host .stepper .step::before {
  position: absolute;
  content: "";
  background-color: #989aa2;
  left: 50%;
  width: 100%;
  height: 8px;
  margin-top: 26px;
  transition: all 300ms ease-out;
  will-change: background-color;
}
:host .stepper .step.active .icon-wrapper {
  animation: active 1s 300ms infinite ease-in-out;
}
:host .stepper .step.active .icon {
  transform: scale(1);
}
:host .stepper .step.current .icon {
  background-color: #3880ff;
  color: #ffffff;
}
:host .stepper .step.danger .icon-wrapper {
  animation: danger 600ms 300ms ease-in-out;
}
:host .stepper .step.danger .icon {
  background-color: #f04141;
  color: #ffffff;
}
:host .stepper .step.warning .icon-wrapper {
  animation: warn 1s 300ms ease-in-out;
}
:host .stepper .step.warning .icon {
  background-color: #ffce00;
  color: #ffffff;
}
:host .stepper .step.warning::before {
  background-color: #ffce00;
}
:host .stepper .step.success .icon-wrapper {
  animation: success 1s 300ms;
}
:host .stepper .step.success .icon {
  background-color: #10dc60;
  color: #ffffff;
}
:host .stepper .step.success::before {
  background-color: #10dc60;
}
@keyframes active {
  from {
    transform: scale3d(1, 1, 1);
  }
  50% {
    transform: scale3d(0.9, 0.9, 0.9);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}
@keyframes danger {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-6px) rotateY(-9deg);
  }
  20% {
    transform: translateX(5px) rotateY(7deg);
  }
  30% {
    transform: translateX(-4px) rotateY(-6deg);
  }
  40% {
    transform: translateX(3px) rotateY(5deg);
  }
  50% {
    transform: translateX(-2px) rotateY(-4deg);
  }
  60% {
    transform: translateX(1px) rotateY(3deg);
  }
  70% {
    transform: translateX(0);
  }
}
@keyframes success {
  from, to {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(1.2, 0.8, 1);
  }
  40% {
    transform: scale3d(0.8, 1.2, 1);
  }
  50% {
    transform: scale3d(1.1, 0.9, 1);
  }
  65% {
    transform: scale3d(0.98, 1.02, 1);
  }
  75% {
    transform: scale3d(1.02, 0.98, 1);
  }
}
@keyframes warn {
  from, 10%, to {
    transform: translate3d(0, 0, 0);
  }
  20% {
    transform: skewX(-12deg) skewY(-12deg);
  }
  30% {
    transform: skewX(6deg) skewY(6deg);
  }
  40% {
    transform: skewX(-3deg) skewY(-3deg);
  }
  50% {
    transform: skewX(1.5deg) skewY(1.5deg);
  }
  60% {
    transform: skewX(-0.8deg) skewY(-0.8deg);
  }
  70% {
    transform: skewX(0.4deg) skewY(0.4deg);
  }
  80% {
    transform: skewX(-0.2deg) skewY(-0.2deg);
  }
}
`;
