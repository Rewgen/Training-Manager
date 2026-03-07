// MODELS
import { Musclegroup } from "./models/Musclegroup.js";
import type { Exercise } from "./models/Exercise.js";
import type { TrainingPlan } from "./models/TrainingPlan.js";
// LOGIC

import { initFilterExercise, applyFilter } from "./logic/exercises/filterExercises.js";
import { initDeleteLogic } from "./logic/deleteLogic.js";
import { initEditLogic } from "./logic/editLogic.js";

import { initOpenPlanLogic } from "./logic/trainingPlans/openTrainingPlan.js";
import { initAddLogic } from "./logic/addLogic.js";

import { initAddTrainingPlan } from "./logic/trainingPlans/addTrainingPlan.js";
import { saveTrainingPlan } from "./logic/trainingPlans/saveTrainingPlans.js";
import { loadTrainingPlan } from "./logic/trainingPlans/loadTrainingPlans.js";

// UI
import { initCreateExercise } from "./ui/initCreateExercise.js";

// Storage
import { saveExercises, loadExercises } from "./storage/exerciseStorage.js";

// ----
import { showExercises } from "./ui/renderExercises.js";
import { showTrainingPlans } from "./ui/renderTrainingPlans.js"
import { initUpdateView } from "./ui/updateView.js";
// ---------


export let allExercises: Exercise[] = [];
let allTrainingPlans:TrainingPlan[] = [];


// UI control
initCreateExercise();

// Logic control

// Storage Control





// ---------

// Load Data

let init = async () => {

    allExercises = await loadExercises();
    allTrainingPlans = loadTrainingPlan();
    initFilterExercise(allExercises);
    initDeleteLogic(allExercises, allTrainingPlans);
    initEditLogic(allExercises, allTrainingPlans);




    showExercises(allExercises);

    initAddTrainingPlan(allExercises, allTrainingPlans);
    showTrainingPlans(allExercises, allTrainingPlans);
    initOpenPlanLogic(allExercises, allTrainingPlans);
    initAddLogic(allExercises);

    initUpdateView(allExercises, allTrainingPlans);

};

export let updateExercises = function(allExercises:Exercise[]){   
    saveExercises(allExercises);
    let exercises = applyFilter(allExercises);
    showExercises(exercises);
};

export let updateTrainingPlans = function (allExercises:Exercise[], allTrainingPlans:TrainingPlan[]) {
    saveTrainingPlan(allTrainingPlans);
    showTrainingPlans(allExercises, allTrainingPlans)
};



init();





// ---------------------------------







