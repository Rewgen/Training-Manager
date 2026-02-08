// Models
import type { Exercise } from "../models/Exercise";
import { musclegroupLabels } from "../models/MusclegroubLabels.js";

// Displays loaded Exercises in the DOM
const exerciseList = document.getElementById("exercise-list") as HTMLUListElement;
export let showExercises = (exercisesArray : Exercise[]) => {
    exerciseList.innerHTML = "";
    exercisesArray.forEach((ex : Exercise ) => {

        let germanLabel = musclegroupLabels[ex.musclegroup];

        let li = document.createElement("li");
        li.textContent = `${ex.name} - ${germanLabel} - ${ex.sets} x ${ex.reps}`;
        
        let deleteButton = createDeleteButton(ex.id);
        li.appendChild(deleteButton);

        let editButton = createEditButton(ex.id);
        li.appendChild(editButton);

        exerciseList.appendChild(li);
    });
};


let createDeleteButton = function(exerciseId : number):HTMLButtonElement{
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.id = exerciseId.toString();
    deleteButton.textContent = "Löschen";
    return deleteButton
};

let createEditButton = function(exerciseId : number):HTMLButtonElement{
    let editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.dataset.id = exerciseId.toString();
    editButton.textContent = "Bearbeiten";
    return editButton
};