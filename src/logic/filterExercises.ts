import type { Exercise } from "../models/Exercise";
import { Musclegroup } from "../models/Musclegroup.js";
import { showExercises } from "../ui/renderExercises.js";



// initializes the filter
export let initFilterExercise = function(allExercises : Array<Exercise>){
    const exerciseListFilter = document.getElementById("exercise-list-filter") as HTMLSelectElement;
    // starts filter
    exerciseListFilter.addEventListener("change", async () => {
        const selectedValue = exerciseListFilter.value as Musclegroup;
        // show filtered exercises in DOM
        if (selectedValue === Musclegroup.All) {
            showExercises(allExercises);
        } else {
            const filtered = filterExercisesByMusclegroup(allExercises, selectedValue);
            showExercises(filtered);
        }     
    });
}

// Filters exercises by selected muscle group
const filterExercisesByMusclegroup = function (allExercises : Array<Exercise>, filter : Musclegroup) {
    return allExercises.filter(ex => ex.musclegroup === filter) as Array<Exercise>;
}


