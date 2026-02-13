// Main
import { updateExercises } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise";
import { Musclegroup } from "../../models/Musclegroup.js";




// DOM Variables
export const addExerciseDom = {
    newExBtn : document.getElementById("new-exercise") as HTMLButtonElement,
    newExPopUp : document.getElementById("new-exercise-popUp") as HTMLDialogElement,
    container : document.getElementById("add-exercise-container") as HTMLFormElement,
    name : document.getElementById("add-exercise-name") as HTMLInputElement,
    musclegroup : document.getElementById("add-exercise-musclegroup") as HTMLInputElement,
    sets : document.getElementById("add-exercise-sets") as HTMLInputElement,
    reps : document.getElementById("add-exercise-reps") as HTMLInputElement,
};


export let initAddExercise = (allExercises : Exercise[]) => {

    // pop-up for new exercise
    addExerciseDom.newExBtn.onclick = () => {
        addExerciseDom.newExPopUp.showModal();
    };

    // save new exercise
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