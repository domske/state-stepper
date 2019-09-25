import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-5e328182.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["state-stepper",[[1,"state-stepper",{"size":[1],"stepNext":[64],"resetSteps":[64],"stepBack":[64]}]]],["state-stepper-step",[[1,"state-stepper-step",{"state":[1]}]]]], options);
});
