// MODELS
import type { Exercise } from "../models/Exercise";
import type { TrainingPlan } from "../models/TrainingPlan.js";
// UI
import { showExercises } from "./renderExercises.js";
import { showTrainingPlans } from "./renderTrainingPlans.js"

type ViewMode = "exercises" | "plans";
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
let changeView = function(view : ViewMode, allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    currentView = view;
    
    const exerciseSection = document.getElementById("exercise-section") as HTMLElement;
    const planSection = document.getElementById("training-plan-section") as HTMLElement;

    if (currentView === "exercises") {
        exerciseSection.style.display = "block";
        planSection.style.display = "none";
    } else {
        exerciseSection.style.display = "none";
        planSection.style.display = "block";
    }
}

