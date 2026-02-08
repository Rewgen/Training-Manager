// Models
import type { TrainingPlan } from "../../models/TrainingPlan.js";

// Save Training Plans
export let saveTrainingPlan = function(trainingPlans : TrainingPlan[]){
    localStorage.setItem("trainingPlanList", JSON.stringify(trainingPlans))
};