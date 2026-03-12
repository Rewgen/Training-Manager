// Models
import type { TrainingPlan } from "../models/TrainingPlan.js";

// Main
import { allTrainingPlans } from "../main.js";
import { updateStorageTrainingPlan, updateViewTrainingPlan } from "../main.js";


// Init Training Plan logic
// let allTrainingPlans : TrainingPlan[] = [];

    // allTrainingPlans = loadedTrainingPlans;


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