
// LOGIC
import { createTrainingPlan } from "../../logic/trainingPlanService.js";

// DOM Variables
const createTrainingPlanDom = {
    newPlanBtn : document.getElementById("new-training-plan") as HTMLButtonElement,
    newPlanDialog : document.getElementById("new-training-plan-dialog") as HTMLDialogElement,
    trainPlanForm : document.querySelector("#new-training-plan-dialog > form") as HTMLFormElement,
    inputPlanName : document.getElementById("input-train-plan-name") as HTMLInputElement,
};


// initialise Dialog and eventListener für new Training Plan
export let initCreateTrainingPlan = function(){

    createTrainingPlanDom.newPlanBtn.onclick = () => createTrainingPlanDom.newPlanDialog.showModal();
    createTrainingPlanDom.trainPlanForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const planName : string = createTrainingPlanDom.inputPlanName.value;
        createTrainingPlan(planName);
    })
};
