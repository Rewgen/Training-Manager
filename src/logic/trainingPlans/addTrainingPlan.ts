// Models
import type { Exercise } from "../../models/Exercise";
import type { TrainingPlan } from "../../models/TrainingPlan";

// Logic
import { saveTrainingPlan } from "./saveTrainingPlans.js";




const newPlanBtn = document.getElementById("new-training-plan") as HTMLButtonElement;
const newPlanPopUp = document.getElementById("new-training-plan-popUp") as HTMLDialogElement;
const trainPlanForm = document.querySelector("#new-training-plan-popUp > form") as HTMLFormElement; //ein form element in einem dialog
const selectionArea = document.getElementById("train-plan-selection-area") as HTMLFieldSetElement;
const inputPlanName = document.getElementById("input-train-plan-name") as HTMLInputElement;


// Init Training Plan logic
export let initAddTrainingPlan = function(allExercises : Exercise[]){

    // open pop-up for new Training Plan
    newPlanBtn.onclick = () => {
        newPlanPopUp.showModal();
        addExercisesToPlan(allExercises);
    }
};


// add selected Exercises to new Plan
let addExercisesToPlan = function (allExercises : Exercise[]) {
    selectionArea.innerText = "";

    allExercises.forEach(ex => {
        // new Checkbox
        const newCheckbox = document.createElement("input") as HTMLInputElement;
        newCheckbox.type = "checkbox";
        newCheckbox.name = "exerciseCheckbox";
        newCheckbox.value = ex.id.toString();
        // Label for Checkbox
        const label = document.createElement("label") as HTMLLabelElement;
        label.innerText = ex.name;

        label.appendChild(newCheckbox);
        selectionArea.appendChild(label);
    });

    // add new training plan with selected name and exercises
    trainPlanForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const planName : string = inputPlanName.value;
        // get all Id's of selected Exercises
        const checkboxData = new FormData(trainPlanForm);
        const selectedStringIds = checkboxData.getAll("exerciseCheckbox");
        const selectedIds = selectedStringIds.map(id => Number(id));
        
        addNewTrainingPlan(planName, selectedIds);
    })
}

// add new Training Plan
let trainingPlans = [];
let addNewTrainingPlan = function(planName:string, exerciseIds:number[]){
    let newTrainingPlan : TrainingPlan = {
        name : planName,
        id : Date.now(),
        exerciseIds: exerciseIds
    };
    trainingPlans.push(newTrainingPlan);
    console.log(newTrainingPlan);
    console.log(trainingPlans);
    saveTrainingPlan(trainingPlans);
};