// MODELS
import type { ViewMode } from "../models/ViewMode.js";

// Init eventListener for change view with radio buttons
export let initChangeView = function(){
    const radioForm = document.getElementById("radio-form") as HTMLFormElement;
    radioForm.addEventListener("change", (event) => {

        let radioBtn = event.target as HTMLInputElement
        if (radioBtn.value === "exercises") changeView("exercises");
        else changeView("plans");
    })
};

// Change View Mode
export let changeView = function(view : ViewMode){
    
    const exerciseSection = document.getElementById("exercise-section") as HTMLElement;
    const trainingPlansOverview = document.getElementById("training-plans-overview") as HTMLElement;
    const trainingPlanDetails = document.getElementById("training-plan-details") as HTMLElement;

    if (view === "exercises") {
        exerciseSection.style.display = "block";
        trainingPlansOverview.style.display = "none";
        trainingPlanDetails.style.display = "none";
    } else if (view === "plans") {
        exerciseSection.style.display = "none";
        trainingPlansOverview.style.display = "block";
        trainingPlanDetails.style.display = "none";
    } else if (view === "planDetails") {
        exerciseSection.style.display = "none";
        trainingPlansOverview.style.display = "none";
        trainingPlanDetails.style.display = "block";
    }
}