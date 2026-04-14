// MODELS
import type { TrainingPlan } from "../models/TrainingPlan.js";
import type { ViewMode } from "../models/ViewMode.js";
import type { PlanExercise } from "../models/PlanExercise.js";
import { saveTrainingPlans } from "../storage/trainingPlanStorage.js";

// MAIN



// add new Training Plan
export let createTrainingPlan = function(allTrainingPlans : TrainingPlan[], planName : string){
    
    const updatedTrainingPlans : TrainingPlan[] = allTrainingPlans.map((plan) => ({
        ...plan,
        exercises: [...(plan.exercises ?? [])]
    }))

    console.log(updatedTrainingPlans);

    let newTrainingPlan : TrainingPlan = {
        name : planName,
        id : Date.now(),
        exercises: []
    };
    updatedTrainingPlans.push(newTrainingPlan);
    saveTrainingPlans(updatedTrainingPlans);

    return updatedTrainingPlans
};



// Delete Exercise by submitted id
export let deleteTrainingPlan = (trainingPlanId : string) => {

    const numericId = Number(trainingPlanId);
    const updatedExercises = allTrainingPlans.filter((plan) => plan.id !== numericId);
    allTrainingPlans.length = 0;
    allTrainingPlans.push(...updatedExercises);

    updateStorageTrainingPlan(allTrainingPlans);
}


export let openTrainingPlan = (trainingPlanId : string) => {
    
    const numericId = Number(trainingPlanId);

    // get the right training plan
    const selectedPlan = allTrainingPlans.find(plan  => numericId === plan.id);
    if(!selectedPlan) return

    const view : ViewMode = "planDetails";
    updateView(view, selectedPlan);
}


export let addExerciseToPlan = (selectedPlan : TrainingPlan, selectedExerciseId : number, sets : number, reps : number, pause : number) => {
    const newPlanExercise: PlanExercise = {
        exerciseId: selectedExerciseId,
        sets: sets,
        reps: reps,
        pause: pause
    };

    selectedPlan.exercises!.push(newPlanExercise);
    updateStorageTrainingPlan(allTrainingPlans);
};