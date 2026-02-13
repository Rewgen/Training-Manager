// Main
import { updateExercises } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise";
import { Musclegroup } from "../../models/Musclegroup.js";
// Logic
import { applyFilter } from "./filterExercises.js";
import { saveExercises } from "./saveExercises.js";


// DOM Variables
export const addExerciseDom = {
    container : document.getElementById("add-exercise-container") as HTMLFormElement,
    name : document.getElementById("add-exercise-name") as HTMLInputElement,
    musclegroup : document.getElementById("add-exercise-musclegroup") as HTMLInputElement,
    sets : document.getElementById("add-exercise-sets") as HTMLInputElement,
    reps : document.getElementById("add-exercise-reps") as HTMLInputElement,
};


export let initAddExercise = (allExercises : Array<Exercise>) => {
    addExerciseDom.container.addEventListener("submit", (event) => {
        event.preventDefault();
        allExercises = addExercise(allExercises);
        
        updateExercises(allExercises);
        emptyInput();

    })
    return allExercises
};



let addExercise = (allExercises : Array<Exercise>) => {
    
    let newExercise : Exercise = {
        id : Date.now(),
        name : addExerciseDom.name.value,
        musclegroup : addExerciseDom.musclegroup.value as Musclegroup,
        sets : addExerciseDom.sets.valueAsNumber,
        reps : addExerciseDom.reps.valueAsNumber
    };
    allExercises.push(newExercise);
    return allExercises
};

let emptyInput = () => {
    addExerciseDom.name.value = "";
    addExerciseDom.musclegroup.value = "";
    addExerciseDom.sets.value = "";
    addExerciseDom.reps.value = "";
};