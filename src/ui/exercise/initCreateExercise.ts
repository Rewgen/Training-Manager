// MODELS
import { Musclegroup } from "../../models/Musclegroup.js";

// Logic
import { createExercise } from "../../logic/exerciseService.js";


// DOM Variables
const createExerciseDom = {
    newExBtn : document.getElementById("new-exercise") as HTMLButtonElement,
    newExPopUp : document.getElementById("new-exercise-dialog") as HTMLDialogElement,
    container : document.getElementById("add-exercise-container") as HTMLFormElement,
    name : document.getElementById("add-exercise-name") as HTMLInputElement,
    musclegroup : document.getElementById("add-exercise-musclegroup") as HTMLInputElement
};


// initialise Dialog and eventListener für new Exercise
export let initCreateExercise = () => {

    createExerciseDom.newExBtn.onclick = () => createExerciseDom.newExPopUp.showModal();
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