// MODELS
import { Musclegroup } from "./models/Musclegroup.js";
import type { Exercise } from "./models/Exercise";
import type { TrainingPlan } from "./models/TrainingPlan.js";
// LOGIC
import { initAddExercise } from "./logic/exercises/addExercise.js";
import { loadExercises } from "./logic/exercises/loadExercises.js";
import { initFilterExercise, applyFilter } from "./logic/exercises/filterExercises.js";
import { initDeleteLogic } from "./logic/exercises/deleteExercise.js";
import { initEditLogic } from "./logic/exercises/editExercise.js";
import { saveExercises } from "./logic/exercises/saveExercises.js";

import { initAddTrainingPlan } from "./logic/trainingPlans/addTrainingPlan.js";
import { saveTrainingPlan } from "./logic/trainingPlans/saveTrainingPlans.js";
import { loadTrainingPlan } from "./logic/trainingPlans/loadTrainingPlans.js";

// UI
import { showExercises } from "./ui/renderExercises.js";
import { showTrainingPlans } from "./ui/renderTrainingPlans.js"
import { initUpdateView } from "./ui/updateView.js";
// ---------




// Load Data
let allExercises:Exercise[] = [];
let allTrainingPlans:TrainingPlan[] = [];
let init = async () => {

    allExercises = await loadExercises();
    allTrainingPlans = loadTrainingPlan();
    initFilterExercise(allExercises);
    initAddExercise(allExercises);
    initDeleteLogic(allExercises);
    initEditLogic(allExercises);

    showExercises(allExercises);

    initAddTrainingPlan(allExercises, allTrainingPlans);
    showTrainingPlans(allExercises, allTrainingPlans);

    initUpdateView(allExercises, allTrainingPlans);

};

export let updateExercises = function(allExercises:Exercise[]){   
    saveExercises(allExercises);
    let exercises = applyFilter(allExercises);
    console.log(exercises);
    showExercises(exercises);
};

export let updateTrainingPlans = function (allExercises:Exercise[], allTrainingPlans:TrainingPlan[]) {
    saveTrainingPlan(allTrainingPlans);
    showTrainingPlans(allExercises, allTrainingPlans)
};



init();





// ---------------------------------







