import { loadExercises } from "./logic/loadExercises.js";
import { showExercises } from "./ui/renderExercises.js";
import { filterExercisesByMusclegroup } from "./logic/filterExercises.js";
import { Musclegroup } from "./models/Musclegroup.js";
import type { Exercise } from "./models/Exercise.js";

let allExercises: Array<Exercise> = [];

let init = async function() {
    allExercises = await loadExercises();
    showExercises(allExercises);
};

const exerciseListFilter = document.getElementById("exercise-list-filter") as HTMLSelectElement;
exerciseListFilter.addEventListener("change", async () => {
    console.clear();
    const selectedValue = exerciseListFilter.value as Musclegroup;

    const filtered = filterExercisesByMusclegroup(allExercises, selectedValue);

    showExercises(filtered);
});


init();
