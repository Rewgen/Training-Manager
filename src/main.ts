// MODELS
import { Musclegroup } from "./models/Musclegroup.js";
import type { Exercise } from "./models/Exercise.js";
import type { TrainingPlan } from "./models/TrainingPlan.js";
// LOGIC


import { initEditLogic } from "./logic/editLogic.js";

import { initOpenPlanLogic } from "./logic/trainingPlans/openTrainingPlan.js";
import { initAddLogic } from "./logic/addLogic.js";

import { initAddTrainingPlan } from "./logic/trainingPlans/addTrainingPlan.js";
import { saveTrainingPlan } from "./logic/trainingPlans/saveTrainingPlans.js";
import { loadTrainingPlan } from "./logic/trainingPlans/loadTrainingPlans.js";

// UI
import { initCreateExercise } from "./ui/exercise/initCreateExercise.js";
import { initFilterExecises, initDeleteExercise } from "./ui/exercise/initExercisesEvents.js";

// Storage
import { saveExercises, loadExercises } from "./storage/exerciseStorage.js";

// ----
import { showExercises } from "./ui/exercise/renderExercises.js";
import { showTrainingPlans } from "./ui/renderTrainingPlans.js"
import { initUpdateView } from "./ui/updateView.js";
// ---------


// global variabels
export let allExercises: Exercise[] = [];
let allTrainingPlans:TrainingPlan[] = [];


// load and start programm
let start = async () =>{
    allExercises = await loadExercises();
    allTrainingPlans = loadTrainingPlan();

    showExercises(allExercises);
}

// init eventListener
let init = () => {
    initCreateExercise();
    initFilterExecises();
    initDeleteExercise();
}

start();
init();


// Update-Functions
export let updateView = (exercises: Exercise[]) => showExercises(exercises);
export let updateStorage = (exercises: Exercise[]) => saveExercises(exercises);




// ---------

// Load Data

let init2 = async () => {



    // ------


    initEditLogic(allExercises, allTrainingPlans);

    initAddTrainingPlan(allExercises, allTrainingPlans);
    showTrainingPlans(allExercises, allTrainingPlans);
    initOpenPlanLogic(allExercises, allTrainingPlans);
    initAddLogic(allExercises);

    initUpdateView(allExercises, allTrainingPlans);

};

export let updateExercises = function(allExercises:Exercise[]){   
    saveExercises(allExercises);
    showExercises(allExercises);
};

export let updateTrainingPlans = function (allExercises:Exercise[], allTrainingPlans:TrainingPlan[]) {
    saveTrainingPlan(allTrainingPlans);
    showTrainingPlans(allExercises, allTrainingPlans)
};



init2();





// ---------------------------------







