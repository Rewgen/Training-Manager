// MODELS
import type { Exercise } from "./models/Exercise.js";
import type { TrainingPlan } from "./models/TrainingPlan.js";
import type { ViewMode } from "./models/ViewMode.js";


// UI
    // Exercises
import { initCreateExercise, initFilterExecises, initDeleteExercise, initEditExercise } from "./ui/initExercisesEvents.js";
import { showExercises } from "./ui/renderExercises.js";
    // Training Plans
import { showTrainingPlans } from "./ui/renderTrainingPlans.js";
import { initCreateTrainingPlan, initDeleteTrainingPlan, initOpenTrainingPlan } from "./ui/initTrainingPlanEvents.js";
import { changeView } from "./ui/changeView.js";
    // Plan Deatils
import { showPlanDetails } from "./ui/renderPlanDetails.js";
    // View
import { initChangeView } from "./ui/changeView.js"; 


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
    changeView("exercises");
}


// init eventListener
let init = () => {
    initCreateExercise();
    initFilterExecises();
    initDeleteExercise();
    initEditExercise();

    initCreateTrainingPlan();
    initDeleteTrainingPlan();
    initOpenTrainingPlan();

    initChangeView();
}


start();
init();


// Update-Functions
export let updateDisplayedExercise = (exercises: Exercise[]) => showExercises(exercises);
export let updateStorageExercise = (exercises: Exercise[]) => saveExercises(exercises);
export let updateStorageTrainingPlan = (trainingPlans : TrainingPlan []) => saveTrainingPlans(trainingPlans);
export let updateDisplayedTrainingPlan = (trainingPlans : TrainingPlan []) => showTrainingPlans(trainingPlans);
export let updateView = (viewMode : ViewMode, selectedPlan? : TrainingPlan) => {
    changeView(viewMode);
    if (selectedPlan) showPlanDetails(selectedPlan);
};