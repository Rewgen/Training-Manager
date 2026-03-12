// LOGIC
import { initUpdateView } from "./ui/updateView.js";

import { initOpenPlanLogic } from "./logic/trainingPlans/openTrainingPlan.js";
import { initAddLogic } from "./logic/trainingPlans/addLogic.js";





// -------------

// MODELS
import type { Exercise } from "./models/Exercise.js";
import type { TrainingPlan } from "./models/TrainingPlan.js";

// UI
    // Exercises
import { initCreateExercise } from "./ui/exercise/initCreateExercise.js";
import { initFilterExecises, initDeleteExercise, initEditExercise } from "./ui/exercise/initExercisesEvents.js";
import { showExercises } from "./ui/exercise/renderExercises.js";
    // Training Plans
import { initCreateTrainingPlan } from "./ui/trainingPlan/initCreateTrainingPlan.js";
import { showTrainingPlans } from "./ui/trainingPlan/renderTrainingPlans.js";
import { initDeleteTrainingPlan } from "./ui/trainingPlan/initTrainingPlanEvents.js";

// LOGIC


// STORAGE
import { saveExercises, loadExercises } from "./storage/exerciseStorage.js";
import { saveTrainingPlans, loadTrainingPlans } from "./storage/trainingPlanStorage.js";


// global variabels
export let allExercises: Exercise[] = [];
export let allTrainingPlans:TrainingPlan[] = [];


// load and start programm
let start = async () =>{
    allExercises = await loadExercises();
    allTrainingPlans = loadTrainingPlans();
    showExercises(allExercises);
    showTrainingPlans(allTrainingPlans);
}

// init eventListener
let init = () => {
    initCreateExercise();
    initFilterExecises();
    initDeleteExercise();
    initEditExercise();
    initCreateTrainingPlan();
    initDeleteTrainingPlan();
    
}

start();
init();


// Update-Functions
export let updateViewExercise = (exercises: Exercise[]) => showExercises(exercises);
export let updateStorageExercise = (exercises: Exercise[]) => saveExercises(exercises);
export let updateStorageTrainingPlan = (trainingPlans : TrainingPlan []) => saveTrainingPlans(trainingPlans);
export let updateViewTrainingPlan = (trainingPlans : TrainingPlan []) => showTrainingPlans(trainingPlans);











// ---------

// Load Data

let init2 = async () => {



    // ------
    initOpenPlanLogic(allExercises, allTrainingPlans);
    initAddLogic(allExercises);

    initUpdateView(allExercises, allTrainingPlans);
};

export let updateExercises = function(allExercises:Exercise[]){   
    saveExercises(allExercises);
    showExercises(allExercises);
};

export let updateTrainingPlans = function (allExercises:Exercise[], allTrainingPlans:TrainingPlan[]) {
    saveTrainingPlans(allTrainingPlans);
    showTrainingPlans(allTrainingPlans)
};


init2();

// ---------------------------------







