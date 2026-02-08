// Models
import type { TrainingPlan } from "../../models/TrainingPlan.js";

// Load Training Plans
export let loadTrainingPlan = function():TrainingPlan[] {

    let trainPlan = localStorage.getItem("trainingPlanList");
    let trainPlanConvert:TrainingPlan[] = []
    
    if (trainPlan) {
        trainPlanConvert = JSON.parse(trainPlan)
    }

    return trainPlanConvert 
}