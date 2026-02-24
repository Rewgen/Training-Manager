// Main
import { updateTrainingPlans } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise";
import type { TrainingPlan } from "../../models/TrainingPlan";


const newPlanBtn = document.getElementById("new-training-plan") as HTMLButtonElement;
const newPlanPopUp = document.getElementById("new-training-plan-popUp") as HTMLDialogElement;
const trainPlanForm = document.querySelector("#new-training-plan-popUp > form") as HTMLFormElement; //ein form element in einem dialog
const inputPlanName = document.getElementById("input-train-plan-name") as HTMLInputElement;


// Init Training Plan logic
let allTrainingPlans:TrainingPlan[] = [];

export let initAddTrainingPlan = function(allExercises : Exercise[], loadedTrainingPlans:TrainingPlan[]){

    // open pop-up for new Training Plan
    newPlanBtn.onclick = () => {
        newPlanPopUp.showModal();
    };

    // add new training plan with selected name and exercises by submit
    trainPlanForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const planName : string = inputPlanName.value;
        
        addNewTrainingPlan(planName, allExercises);
    })

    allTrainingPlans = loadedTrainingPlans;
};




// add new Training Plan
let addNewTrainingPlan = function(planName:string, allExercises:Exercise[]){
    let newTrainingPlan : TrainingPlan = {
        name : planName,
        id : Date.now(),
        exercises: []
    };
    
    allTrainingPlans.push(newTrainingPlan)

    updateTrainingPlans(allExercises, allTrainingPlans);
};