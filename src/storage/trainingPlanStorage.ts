// Models
import type { TrainingPlan } from "../models/TrainingPlan.js";


// Save Training Plans
export let saveTrainingPlans = function(trainingPlans : TrainingPlan[]){
    localStorage.setItem("trainingPlanList", JSON.stringify(trainingPlans));
};


// Load Training Plans
export let loadTrainingPlans = function():TrainingPlan[] {
    let trainPlan = localStorage.getItem("trainingPlanList");
    let trainPlanConvert:TrainingPlan[] = [];
    if (trainPlan) trainPlanConvert = JSON.parse(trainPlan);
    return trainPlanConvert 
}