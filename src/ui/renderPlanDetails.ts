// MODELS
import type { Exercise } from "../models/Exercise.js";
import type { TrainingPlan } from "../models/TrainingPlan.js";
import type { PlanExercise } from "../models/PlanExercise.js";

// LOGIC
import { addExerciseToPlan } from "../logic/trainingPlanService.js";

// MAIN
import { allExercises } from "../main.js";



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

// Create heading and add-exercise-btn (outside of the function, to avoid multiple creations)
const heading = document.createElement("h3") as HTMLHeadingElement;
const addBtn = document.createElement("button") as HTMLButtonElement;
addBtn.classList.add("add-exercise-button");
addBtn.textContent = "Übung hinzufügen";

// variabel to get origin exercise -> getting set by clicking exerciseBtn -> renderExerciseButtons()
let selectedExerciseId: number;



// render all plan details (heading, button, exercsies)
export let showPlanDetails = function(selectedPlan:TrainingPlan){

    // set name
    heading.textContent = selectedPlan.name;
    // create button for add Exercises
    getDomElement.trainingPlanDetails.prepend(heading, addBtn);

    // show exercises in selected plan overview
    renderPlanExercises(selectedPlan.exercises);

    // open dialog for adding exercise
    addBtn.addEventListener("click", () => {
        renderExerciseButtons(allExercises);
        getDomElement.planAddExercisedialog.showModal();
    })
    
    // add selected exercise from dialog in selected training Plan 
    getDomElement.saveExerciseBtn.addEventListener("click", () => {

        if (!selectedExerciseId) return;

        addExerciseToPlan(
            selectedPlan,
            selectedExerciseId,
            getDomElement.setsInput.valueAsNumber, 
            getDomElement.repsInput.valueAsNumber,
            getDomElement.pauseInput.valueAsNumber
        ); // -> Logic
        renderPlanExercises(selectedPlan.exercises);
        getDomElement.planAddExercisedialog.close();
    });
};



// render exercises in selected plan
let renderPlanExercises = function(planExercises : PlanExercise[]){

    // empty training plan exercise list
    getDomElement.trainingPlanExercises.textContent = "";

    planExercises.forEach(planEx => {

        // get origin exercise for name 
        let exercise = allExercises.find(ex => ex.id === planEx.exerciseId);
        if(!exercise) return

        // set li for each exercise
        let li = document.createElement("li");
        li.textContent = `${exercise.name} - ${planEx.sets} Sätze x ${planEx.reps} Wiederholungen - ${planEx.pause} sek. Pause`; 
        getDomElement.trainingPlanExercises.appendChild(li);
    });
};



// render exercises as buttons for selecting exercise and add to current training plan
let renderExerciseButtons = function (allExercises : Exercise[]) {
    getDomElement.planAddExerciseList.innerHTML = "";

    // create button for each exercise
    allExercises.forEach(ex => {
        
        const btn = document.createElement("button");
        btn.textContent = ex.name;
        btn.dataset.id = ex.id.toString();
        
        // set id for exercise btn and render config
        btn.onclick = () => {
            getDomElement.exerciseConfig.classList.remove("hidden");
            selectedExerciseId = ex.id;
        };
        getDomElement.planAddExerciseList.appendChild(btn);
    });
};