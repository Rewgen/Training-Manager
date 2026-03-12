import { deleteTrainingPlan } from "../../logic/trainingPlanService.js";


// delete event delegation
export let initDeleteTrainingPlan = () => {
    document.addEventListener("click", (event) => {        
        if (!(event.target instanceof HTMLElement)) return;
        const deleteButton = event.target.closest(".delete-button");
        if (!(deleteButton instanceof HTMLElement)) return;
        const type = deleteButton.dataset.type;
        console.log("test1");
        if (type !== "trainingPlan") return;
        console.log("test2");
        const trainingPlanId = deleteButton.dataset.id;
        if (!trainingPlanId) return; 
        deleteTrainingPlan(trainingPlanId); // -> Logic
    })
};
