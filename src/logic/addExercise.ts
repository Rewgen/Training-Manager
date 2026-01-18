import type { Exercise } from "../models/Exercise";
import { Musclegroup } from "../models/Musclegroup.js";

// DOM Variables
export const addExerciseDom = {
    container : document.getElementById("add-exercise-container") as HTMLFormElement,
    name : document.getElementById("add-exercise-name") as HTMLInputElement,
    musclegroup : document.getElementById("add-exercise-musclegroup") as HTMLInputElement,
    sets : document.getElementById("add-exercise-sets") as HTMLInputElement,
    reps : document.getElementById("add-exercise-reps") as HTMLInputElement,
};


export let initAddExercise = function(allExercises : Array<Exercise>){
    addExerciseDom.container.addEventListener("submit", (event) => {
        event.preventDefault();
        addExercise(allExercises);
    })
};


export let addExercise = (allExercises : Array<Exercise>) => {

    let newExercise : Exercise = {
        id : allExercises.length + 1,
        name : addExerciseDom.name.value,
        musclegroup : addExerciseDom.musclegroup.value as Musclegroup,
        sets : addExerciseDom.sets.valueAsNumber,
        reps : addExerciseDom.reps.valueAsNumber
    };

    allExercises.push(newExercise);
    // JSON.stringify(allExercises) 
    
    console.log(allExercises);
    console.log(newExercise);
    return allExercises
};
