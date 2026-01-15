import type { Exercise } from "../models/Exercise.js";

// Displays the loaded JSON in the DOM
const exerciseList = document.getElementById("exercise-list") as HTMLUListElement;
export let showExercises = function(exercisesArray : Array<Exercise>){
    exerciseList.innerHTML = "";
    exercisesArray.forEach((ex : Exercise ) => {
        let li = document.createElement("li");
        li.textContent = `${ex.name} - ${ex.musclegroup} - ${ex.sets} x ${ex.reps}`;
        exerciseList.appendChild(li);
    });
};