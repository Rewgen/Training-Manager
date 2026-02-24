// Main
import { updateExercises } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise.js";
import { Musclegroup } from "../../models/Musclegroup.js";




// DOM Variables
export const createExerciseDom = {
    newExBtn : document.getElementById("new-exercise") as HTMLButtonElement,
    newExPopUp : document.getElementById("new-exercise-popUp") as HTMLDialogElement,
    container : document.getElementById("add-exercise-container") as HTMLFormElement,
    name : document.getElementById("add-exercise-name") as HTMLInputElement,
    musclegroup : document.getElementById("add-exercise-musclegroup") as HTMLInputElement
};


export let initCreateExercise = (allExercises : Exercise[]) => {

    // pop-up for new exercise
    createExerciseDom.newExBtn.onclick = () => {
        createExerciseDom.newExPopUp.showModal();
    };

    // save new exercise
    createExerciseDom.container.addEventListener("submit", (event) => {
        event.preventDefault();
        allExercises = createExercise(allExercises);
        
        updateExercises(allExercises);
        emptyInput();

    })
    return allExercises
};



let createExercise = (allExercises : Array<Exercise>) => {
    
    let newExercise : Exercise = {
        id : Date.now(),
        name : createExerciseDom.name.value,
        musclegroup : createExerciseDom.musclegroup.value as Musclegroup,
    };
    allExercises.push(newExercise);
    return allExercises
};

let emptyInput = () => {
    createExerciseDom.name.value = "";
    createExerciseDom.musclegroup.value = "";
};