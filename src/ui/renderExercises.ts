// Models
import type { Exercise } from "../models/Exercise.js";
import { MuscleGroupLabels } from "../models/MuscleGroubLabels.js";



// Displays loaded Exercises in the DOM
export let showExercises = (exercises : Exercise[]) => {
    const exerciseList = document.getElementById("exercise-list") as HTMLUListElement;
    exerciseList.innerHTML = "";
    exercises.forEach((ex : Exercise ) => {

        let germanLabel = MuscleGroupLabels[ex.muscleGroup];
        let li = document.createElement("li");
        li.textContent = `${ex.name} - ${germanLabel}`;
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
    deleteButton.dataset.type = "exercise";
    deleteButton.textContent = "Löschen";
    return deleteButton
};

let createEditButton = function(exerciseId : number):HTMLButtonElement{
    let editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.dataset.id = exerciseId.toString();
    editButton.dataset.type = "exercise";
    editButton.textContent = "Bearbeiten";
    return editButton
};