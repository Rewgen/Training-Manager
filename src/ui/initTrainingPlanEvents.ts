// LOGIC
import { createTrainingPlan, deleteTrainingPlan, openTrainingPlan } from "../logic/trainingPlanService.js";



// initialise Dialog and eventListener für new Training Plan
export let initCreateTrainingPlan = function(){

    // DOM Variables
    const createTrainingPlanDom = {
        newPlanBtn : document.getElementById("new-training-plan") as HTMLButtonElement,
        newPlanDialog : document.getElementById("new-training-plan-dialog") as HTMLDialogElement,
        trainPlanForm : document.querySelector("#new-training-plan-dialog > form") as HTMLFormElement,
        inputPlanName : document.getElementById("input-train-plan-name") as HTMLInputElement,
    };

    createTrainingPlanDom.newPlanBtn.onclick = () => createTrainingPlanDom.newPlanDialog.showModal();
    createTrainingPlanDom.trainPlanForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const planName : string = createTrainingPlanDom.inputPlanName.value;
        createTrainingPlan(planName);
    })
};



// delete event delegation
export let initDeleteTrainingPlan = () => {
    document.addEventListener("click", (event) => {    

        if (!(event.target instanceof HTMLElement)) return;
        const deleteButton = event.target.closest(".delete-button");
        if (!(deleteButton instanceof HTMLElement)) return;
        const type = deleteButton.dataset.type;
        if (type !== "trainingPlan") return;
        const trainingPlanId = deleteButton.dataset.id;
        if (!trainingPlanId) return; 

        deleteTrainingPlan(trainingPlanId); // -> Logic
    });
};


// initialize event delegation for "open plan"
export let initOpenTrainingPlan = () => {
    document.addEventListener("click", (event) => {

        if (!(event.target instanceof HTMLElement)) return;
        const openButton = event.target.closest(".open-plan-button");
        if (!(openButton instanceof HTMLElement)) return;
        const type = openButton.dataset.type;
        if (type !== "trainingPlan") return;
        const trainingPlanId = openButton.dataset.id;
        if (!trainingPlanId ) return; 

        openTrainingPlan(trainingPlanId); // -> Logic
    });
};