// MODELS
import { Musclegroup } from "./models/Musclegroup.js";
import type { Exercise } from "./models/Exercise";
// LOGIC
import { initAddExercise } from "./logic/addExercise.js";
import { loadExercises } from "./logic/loadExercises.js";
import { initFilterExercise } from "./logic/filterExercises.js";
import { initDeleteLogic } from "./logic/deleteExercise.js";

// UI
import { showExercises } from "./ui/renderExercises.js";

// ---------


// Load Data
let allExercises: Array<Exercise> = [];
let init = async () => {
    allExercises = await loadExercises();
    initFilterExercise(allExercises);
    initAddExercise(allExercises);
    initDeleteLogic(allExercises);
    showExercises(allExercises);

};

init();






