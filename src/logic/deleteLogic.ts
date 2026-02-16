// Main
import { updateExercises } from "../main.js";
import { updateTrainingPlans } from "../main.js";

// Models
import type { Exercise } from "../models/Exercise.js";
import type { TrainingPlan } from "../models/TrainingPlan.js";



export let initDeleteLogic = function(allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    document.addEventListener("click", (event) => {
        
        if (!(event.target instanceof HTMLElement)) return;

        const deleteButton = event.target.closest(".delete-button");
        if (!(deleteButton instanceof HTMLElement)) return;

        const id = deleteButton.dataset.id;
        if (!id) return; 

        const numericId = Number(id);

        // delete Exercise
        const updatedExercises = allExercises.filter((ex) => ex.id !== numericId);
        allExercises.length = 0;
        allExercises.push(...updatedExercises);

        // delete Training Pplan
        const updatedTrainingPlan = allTrainingPlans.filter((plan) => plan.id !== numericId);
        allTrainingPlans.length = 0;
        allTrainingPlans.push(...updatedTrainingPlan);
    
        updateExercises(allExercises);
        updateTrainingPlans(allExercises, allTrainingPlans);
    })
};