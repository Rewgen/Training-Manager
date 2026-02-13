// Main
import { updateExercises } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise";
import { Musclegroup } from "../../models/Musclegroup.js";




const exerciseListFilter = document.getElementById("exercise-list-filter") as HTMLSelectElement;  


// initializes the filter as eventListener
export let initFilterExercise = (allExercises:Exercise[]) => {
    exerciseListFilter.addEventListener("change", async () => {
        updateExercises(allExercises);
})
};


// Filter logic -> Filters exercises by selected muscle group
export let applyFilter = (allExercises: Exercise[]) => {
    let exercises = []
    const selectedValue = exerciseListFilter.value as Musclegroup;
        // show filtered exercises in DOM
        if (selectedValue === Musclegroup.All) {
            exercises = allExercises;
        } else {
            const filtered = allExercises.filter(ex => ex.musclegroup === selectedValue) as Array<Exercise>;
            exercises = filtered;
        }  
    return exercises;
};





