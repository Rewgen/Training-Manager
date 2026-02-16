// MODELS
import type { Exercise } from "../models/Exercise.js";
import type { TrainingPlan } from "../models/TrainingPlan.js";
import type { ViewMode } from "../models/ViewMode.js";

// UI
import { showExercises } from "./renderExercises.js";
import { showTrainingPlans } from "./renderTrainingPlans.js"


let currentView:ViewMode = "exercises";

// Init eventListener 
export let initUpdateView = function(allExercises:Exercise[], allTrainingPlans:TrainingPlan[]){
    changeView(currentView, allExercises, allTrainingPlans);
    const radioForm = document.getElementById("radio-form") as HTMLFormElement;
    radioForm.addEventListener("change", (event) => {

        let radioBtn = event.target as HTMLInputElement

        if (radioBtn.value === "exercises") {
            
            changeView("exercises", allExercises, allTrainingPlans);
        } else {
            
            changeView("plans", allExercises, allTrainingPlans);
        }
    })
};

// Change View Mode
export let changeView = function(view : ViewMode, allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    currentView = view;
    
    const exerciseSection = document.getElementById("exercise-section") as HTMLElement;
    const trainingPlanContainer = document.getElementById("training-plans-container") as HTMLElement;
    const planOverview = document.getElementById("training-plan-overview") as HTMLElement;

    if (currentView === "exercises") {
        exerciseSection.style.display = "block";
        trainingPlanContainer.style.display = "none";
        planOverview.style.display = "none";
    } else if (currentView === "plans") {
        exerciseSection.style.display = "none";
        trainingPlanContainer.style.display = "block";
        planOverview.style.display = "none";
    } else if (currentView === "planOverview") {
        exerciseSection.style.display = "none";
        trainingPlanContainer.style.display = "none";
        planOverview.style.display = "block";
    }
}

