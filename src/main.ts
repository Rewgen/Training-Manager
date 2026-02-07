// MODELS
import { Musclegroup } from "./models/Musclegroup.js";
import type { Exercise } from "./models/Exercise";
// LOGIC
import { initAddExercise } from "./logic/exercises/addExercise.js";
import { loadExercises } from "./logic/exercises/loadExercises.js";
import { initFilterExercise, applyFilter } from "./logic/exercises/filterExercises.js";
import { initDeleteLogic } from "./logic/exercises/deleteExercise.js";
import { initEditLogic } from "./logic/exercises/editExercise.js";
import { saveExercises } from "./logic/exercises/saveExercises.js";
import { initLoadTrainingPlan } from "./logic/trainingPlans/addTrainingPlan.js";


// UI
import { showExercises } from "./ui/renderExercises.js";

// ---------


// Load Data
let allExercises: Array<Exercise> = [];
let init = async () => {
    allExercises = await loadExercises();
    initLoadTrainingPlan(allExercises);
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






