import type { Exercise } from "../models/Exercise";
import { Musclegroup } from "../models/Musclegroup.js";
import { showExercises } from "../ui/renderExercises.js";


const exerciseListFilter = document.getElementById("exercise-list-filter") as HTMLSelectElement;  

// Filter logic -> Filters exercises by selected muscle group
export let applyFilter = function (allExercises : Array<Exercise>) {
    const selectedValue = exerciseListFilter.value as Musclegroup;
        // show filtered exercises in DOM
        if (selectedValue === Musclegroup.All) {
            showExercises(allExercises);
            console.log(allExercises);
        } else {
            // const filtered = filterExercisesByMusclegroup(allExercises, selectedValue);
            const filtered = allExercises.filter(ex => ex.musclegroup === selectedValue) as Array<Exercise>;
            showExercises(filtered);
        }  
};


// initializes the filter as eventListener
export let initFilterExercise = function(allExercises : Array<Exercise>){
    exerciseListFilter.addEventListener("change", async () => {
        applyFilter(allExercises);
})
};

// Filters exercises by selected muscle group
// const filterExercisesByMusclegroup = function (allExercises : Array<Exercise>, filter : Musclegroup) {
//     return allExercises.filter(ex => ex.musclegroup === filter) as Array<Exercise>;
// };


