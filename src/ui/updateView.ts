// MODELS
import type { Exercise } from "../models/Exercise.js";
import type { TrainingPlan } from "../models/TrainingPlan.js";
import type { ViewMode } from "../models/ViewMode.js";

let currentView:ViewMode = "exercises";

// Init eventListener 
export let initUpdateView = function(allExercises:Exercise[], allTrainingPlans:TrainingPlan[]){
    changeView(currentView, allExercises, allTrainingPlans);
    const radioForm = document.getElementById("radio-form") as HTMLFormElement;
    radioForm.addEventListener("change", (event) => {

        let radioBtn = event.target as HTMLInputElement

        if (radioBtn.value === "exercises") 
            {changeView("exercises", allExercises, allTrainingPlans);} 
        else {changeView("plans", allExercises, allTrainingPlans);}
    })
};

// Change View Mode
export let changeView = function(view : ViewMode, allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    currentView = view;
    
    const exerciseSection = document.getElementById("exercise-section") as HTMLElement;
    const trainingPlansOverview = document.getElementById("training-plans-overview") as HTMLElement;
    const trainingPlanDetails = document.getElementById("training-plan-details") as HTMLElement;

    if (currentView === "exercises") {
        exerciseSection.style.display = "block";
        trainingPlansOverview.style.display = "none";
        trainingPlanDetails.style.display = "none";
    } else if (currentView === "plans") {
        exerciseSection.style.display = "none";
        trainingPlansOverview.style.display = "block";
        trainingPlanDetails.style.display = "none";
    } else if (currentView === "planDetails") {
        exerciseSection.style.display = "none";
        trainingPlansOverview.style.display = "none";
        trainingPlanDetails.style.display = "block";
    }
}

