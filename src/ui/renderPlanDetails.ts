// Models
import type { Exercise } from "../models/Exercise.js";
import type { TrainingPlan } from "../models/TrainingPlan.js";
import type { PlanExercise } from "../models/PlanExercise.js";

// Logic
import { saveTrainingPlan } from "../logic/trainingPlans/saveTrainingPlans.js";


const getDomElement = {
    // Container
    trainingPlanDetails : document.getElementById("training-plan-details") as HTMLElement, // overview for selected training plan
    trainingPlanExercises : document.getElementById("training-plan-exercises") as HTMLUListElement, // Listed exercises in plan
    planAddExercisedialog : document.getElementById("training-plan-add-exercises-dialog") as HTMLDialogElement, //
    planAddExerciseList : document.getElementById("training-plan-add-exercises-list") as HTMLElement, // Exercises for adding as buttons 
    exerciseConfig : document.getElementById("exercise-config") as HTMLElement, // inputs
    // Buttons + Inputs
    saveExerciseBtn : document.getElementById("save-exercise") as HTMLButtonElement, //save config and exercise for plan
    setsInput : document.getElementById("sets") as HTMLInputElement,
    repsInput : document.getElementById("reps") as HTMLInputElement,
    pauseInput : document.getElementById("pause") as HTMLInputElement
};

// Create Dom Elements
const heading = document.createElement("h3") as HTMLHeadingElement;
const addBtn = document.createElement("button") as HTMLButtonElement;
addBtn.classList.add("add-exercise-button");
addBtn.textContent = "Übung hinzufügen";

// variable for exercise Id
let selectedExerciseId: number;


export let showPlanDetails = function(currentTrainingPlan:TrainingPlan, allExercises:Exercise[], allTrainingPlans:TrainingPlan[]){

    // set name
    heading.textContent = currentTrainingPlan.name;
    // create button for add Exercises
    addBtn.dataset.id = currentTrainingPlan.toString();
    getDomElement.trainingPlanDetails.prepend(heading, addBtn);

    // show exercises in selected plan overview
    renderPlanExercises(currentTrainingPlan.exercises, allExercises);

    // show Exercises for adding as Dialog
    addBtn.addEventListener("click", () => {
        renderExerciseButtons(allExercises);
        getDomElement.planAddExercisedialog.showModal();
    })
    
    // add, save and render exercise in selected training Plan 
    getDomElement.saveExerciseBtn.addEventListener("click", () => {
        
        if (!selectedExerciseId) return;

        const newPlanExercise: PlanExercise = {
            exerciseId: selectedExerciseId,
            sets: getDomElement.setsInput.valueAsNumber,
            reps: getDomElement.repsInput.valueAsNumber,
            pause: getDomElement.pauseInput.valueAsNumber
        };

        currentTrainingPlan.exercises.push(newPlanExercise);
        saveTrainingPlan(allTrainingPlans); // logic folder
        renderPlanExercises(currentTrainingPlan.exercises, allExercises);
        getDomElement.planAddExercisedialog.close();
    });

};


// render exercises in selected plan
let renderPlanExercises = function(planExercises : PlanExercise[], allExercises : Exercise[]){

    // empty training plan exercise list
    getDomElement.trainingPlanExercises.textContent = "";

    planExercises.forEach(planEx => {

        // get origin exercise 
        let exercise = allExercises.find(ex => ex.id === planEx.exerciseId)
        if(!exercise) return

        // set li for each exercise
        let li = document.createElement("li");
        li.textContent = `${exercise.name} - ${planEx.sets} Sätze x ${planEx.reps} Wiederholungen - ${planEx.pause} sek. Pause`; 
        getDomElement.trainingPlanExercises.appendChild(li);
    });
};


let renderExerciseButtons = function (allExercises : Exercise[]) {

    // empty add exercise list
    getDomElement.planAddExerciseList.innerHTML = "";

    // create button for each exercise
    allExercises.forEach(ex => {
        const btn = document.createElement("button");
        btn.textContent = ex.name;
        btn.dataset.id = ex.id.toString();
        // set id for exercise
        btn.onclick = () => selectExercise(ex.id);

        getDomElement.planAddExerciseList.appendChild(btn);
    });
};


// set id for exercise and render configuration
let selectExercise = function(id: number) {
    selectedExerciseId = id;
    getDomElement.exerciseConfig.classList.remove("hidden");
};



