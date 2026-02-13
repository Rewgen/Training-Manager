// Main
import { updateExercises } from "../../main.js";
import { updateTrainingPlans } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise";
import type { TrainingPlan } from "../../models/TrainingPlan";



export let initDeleteLogic = function(allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    document.addEventListener("click", (event) => {
        
        if (!(event.target instanceof HTMLElement)) return;

        const deleteButton = event.target.closest(".delete-button");
        if (!(deleteButton instanceof HTMLElement)) return;

        const id = deleteButton.dataset.id;
        if (!id) return; 

        const numericId = Number(id);

        const updatedExercises = allExercises.filter(
            (ex) => ex.id !== numericId
        );

        allExercises.length = 0;
        allExercises.push(...updatedExercises);

        updateExercises(allExercises);
        updateTrainingPlans(allExercises, allTrainingPlans);
    })
};