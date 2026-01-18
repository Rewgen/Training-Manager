// MODELS
import { Musclegroup } from "./models/Musclegroup.js";
import type { Exercise } from "./models/Exercise";
// LOGIC
import { initAddExercise } from "./logic/addExercise.js";
import { loadExercises } from "./logic/loadExercises.js";
import { initFilterExercise } from "./logic/filterExercises.js";
// UI
import { showExercises } from "./ui/renderExercises.js";

// ---------

// Load Data
let allExercises: Array<Exercise> = [];
let init = async function() {
    allExercises = await loadExercises();
    initFilterExercise(allExercises);
    initAddExercise(allExercises);
    showExercises(allExercises);

};

init();






