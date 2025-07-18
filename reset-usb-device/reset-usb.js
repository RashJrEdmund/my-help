import { renderSteps } from "../render-steps.js";

const steps = [
  {
    step: "Open Terminal and run",
    code: "lsusb",
    codeDescription: "to see the list of USB devices plugged in to your system.",
  },
  {
    step: "You should see this, where you will select the bus and Device numbers",
    image: "./images/lsusb.png",
  },
  {
    step: "Run",
    code: "usbreset",
    codeDescription: "Without any parameters, it'll show you how to use it",
    image: "./images/usbreset.png",
  }
]


renderSteps(steps);
