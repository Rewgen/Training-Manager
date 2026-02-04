// MODELS
import { Musclegroup } from "./models/Musclegroup.js";
import type { Exercise } from "./models/Exercise";
// LOGIC
import { initAddExercise } from "./logic/addExercise.js";
import { loadExercises } from "./logic/loadExercises.js";
import { initFilterExercise, applyFilter } from "./logic/filterExercises.js";
import { initDeleteLogic } from "./logic/deleteExercise.js";
import { initEditLogic } from "./logic/editExercise.js";
import { saveExercises } from "./logic/saveExercises.js";

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
    initEditLogic(allExercises);
    showExercises(allExercises);

};

export let updateChanges = function(allExercises : Exercise[]){
    applyFilter(allExercises);
    saveExercises(allExercises);
};

init();






