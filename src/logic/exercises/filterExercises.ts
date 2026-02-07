import type { Exercise } from "../../models/Exercise";
import { Musclegroup } from "../../models/Musclegroup.js";
import { showExercises } from "../../ui/renderExercises.js";


const exerciseListFilter = document.getElementById("exercise-list-filter") as HTMLSelectElement;  

// Filter logic -> Filters exercises by selected muscle group
export let applyFilter = (allExercises : Array<Exercise>) => {
    const selectedValue = exerciseListFilter.value as Musclegroup;
        // show filtered exercises in DOM
        if (selectedValue === Musclegroup.All) {
            showExercises(allExercises);
        } else {
            const filtered = allExercises.filter(ex => ex.musclegroup === selectedValue) as Array<Exercise>;
            showExercises(filtered);
        }  
};


// initializes the filter as eventListener
export let initFilterExercise = (allExercises : Array<Exercise>) => {
    exerciseListFilter.addEventListener("change", async () => {
        applyFilter(allExercises);
})
};


