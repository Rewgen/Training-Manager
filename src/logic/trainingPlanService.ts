// Models
import type { TrainingPlan } from "../models/TrainingPlan.js";

// Main
import { allTrainingPlans } from "../main.js";
import { updateStorageTrainingPlan, updateViewTrainingPlan } from "../main.js";


// add new Training Plan
export let createTrainingPlan = function(planName:string){
    let newTrainingPlan : TrainingPlan = {
        name : planName,
        id : Date.now(),
        exercises: []
    };
    allTrainingPlans.push(newTrainingPlan)

    updateStorageTrainingPlan(allTrainingPlans);
    updateViewTrainingPlan(allTrainingPlans);
};



// Delete Exercise by submitted id
export let deleteTrainingPlan = (trainingPlanId : string) => {

    const numericId = Number(trainingPlanId);
    const updatedExercises = allTrainingPlans.filter((plan) => plan.id !== numericId);
    allTrainingPlans.length = 0;
    allTrainingPlans.push(...updatedExercises);

    updateStorageTrainingPlan(allTrainingPlans);
    updateViewTrainingPlan(allTrainingPlans);
}








// Init Training Plan logic
// let allTrainingPlans : TrainingPlan[] = [];

    // allTrainingPlans = loadedTrainingPlans;
