import type { Exercise } from "../models/Exercise";

// Displays loaded Exercises in the DOM
const exerciseList = document.getElementById("exercise-list") as HTMLUListElement;
export let showExercises = (exercisesArray : Array<Exercise>) => {
    exerciseList.innerHTML = "";
    exercisesArray.forEach((ex : Exercise ) => {
        let li = document.createElement("li");
        li.textContent = `${ex.name} - ${ex.musclegroup} - ${ex.sets} x ${ex.reps}`;
        
        let deleteButton = createDeleteButton(ex.id);
        li.appendChild(deleteButton);

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

