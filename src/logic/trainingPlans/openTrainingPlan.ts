// MODELS
import type { Exercise } from "../../models/Exercise.js";
import type { TrainingPlan } from "../../models/TrainingPlan.js";
import type { ViewMode } from "../../models/ViewMode.js";

// Ui
import { showPlanDetails } from "../../ui/renderPlanDetails.js";
import { changeView } from "../../ui/updateView.js";
    

// initialize event delegation for "open plan"
export let initOpenPlanLogic = function(allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){

    // logic for open-plan-button
    document.addEventListener("click", (event) => {

        // Change viewMode -> UI folder
        const view : ViewMode = "planDetails";
        changeView(view, allExercises, allTrainingPlans);

        // get the right button
        if (!(event.target instanceof HTMLElement)) return;

        const openButton = event.target.closest(".open-plan-button");
        if (!(openButton instanceof HTMLElement)) return;

        const id = openButton.dataset.id;
        if (!id) return; 
        const numericId = Number(id);

        // get the right training plan
        const selectedPlan = allTrainingPlans.find(plan  => numericId === plan.id);
        if(!selectedPlan) return

        // render plan details -> UI folder (renderPlanDetails)
        showPlanDetails(selectedPlan, allExercises, allTrainingPlans);
    })
};