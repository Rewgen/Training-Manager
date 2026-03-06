// MODELS
import { Musclegroup } from "../models/Musclegroup.js";

// Logic
import { createExercise } from "../logic/exerciseService.js";


// DOM Variables
export const createExerciseDom = {
    newExBtn : document.getElementById("new-exercise") as HTMLButtonElement,
    newExPopUp : document.getElementById("new-exercise-dialog") as HTMLDialogElement,
    container : document.getElementById("add-exercise-container") as HTMLFormElement,
    name : document.getElementById("add-exercise-name") as HTMLInputElement,
    musclegroup : document.getElementById("add-exercise-musclegroup") as HTMLInputElement
};


export let initCreateExercise = () => {
    // Dialog for new exercise
    createExerciseDom.newExBtn.onclick = () => createExerciseDom.newExPopUp.showModal();

    // save new exercise
    createExerciseDom.container.addEventListener("submit", (event) => {
        event.preventDefault();

        let name: string = createExerciseDom.name.value;
        let musclegroup = createExerciseDom.musclegroup.value as Musclegroup;
        createExercise(name, musclegroup);
        
        emptyInput();
    })
};


let emptyInput = () => {
    createExerciseDom.name.value = "";
    createExerciseDom.musclegroup.value = "";
};