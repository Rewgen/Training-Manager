// Main
import { updateExercises } from "../main.js";
import { updateTrainingPlans } from "../main.js";

// Models
import type { Exercise } from "../models/Exercise.js";
import type { TrainingPlan } from "../models/TrainingPlan.js";
import { Musclegroup } from "../models/Musclegroup.js";
// Logic
import { musclegroupLabels } from "../models/MusclegroubLabels.js";


// === Add exercises to Training Plans ===

export let initAddLogic = function(allExercises: Exercise[]){
    // Exercise DOM-list

    document.addEventListener("click", (event) => {

        if(!(event.target instanceof HTMLElement)) return;

        const editButton = event.target.closest(".add-exercise-button");
        if(!(editButton instanceof HTMLElement)) return;

        let idString = editButton.dataset.id;
        if(!(idString)) return;

        let id = Number(idString);

        /*

        // edit Exercise
        let exerciseToEdit = allExercises.find(ex => ex.id === id);
        if (exerciseToEdit) editExercise(exerciseToEdit, allExercises, allTrainingPlans);
        
        // edit Training Plan
        let trainingPlanToEdit = allTrainingPlans.find(plan => plan.id === id);
        if(trainingPlanToEdit) editTrainingPlan(trainingPlanToEdit, allExercises, allTrainingPlans);

        */
    })
};


/*

// edit Exercise logic
let editExercise = function(exerciseToEdit : Exercise, allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    let li = document.querySelector(`button[data-id="${exerciseToEdit.id}"]`)?.closest("li");
    if(!li) return;

    // Empty Li
    li.textContent = "";

    // Change Name
    const changeName = document.createElement("input");
    changeName.value = exerciseToEdit.name;

    // Select Musclegroup
    const changeMusclegroup = document.createElement("select");
    Object.values(Musclegroup).forEach(group => {
        let opt = document.createElement("option");
        if(group === "All") return;
        // show exercises in German 
        opt.textContent = musclegroupLabels[group];
        opt.value = group;

        if(group === exerciseToEdit.musclegroup) opt.selected = true;

        changeMusclegroup.appendChild(opt);
    })


    // Save Button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Speichern";

    saveBtn.addEventListener("click", () =>{
        exerciseToEdit.name = changeName.value;
        exerciseToEdit.musclegroup = changeMusclegroup.value as Musclegroup;

        updateExercises(allExercises);
        updateTrainingPlans(allExercises, allTrainingPlans);
    });

    // Return Button
    let returnBtn = document.createElement("button");
    returnBtn.textContent = "Abbrechen";

    returnBtn.addEventListener("click", () => {
        updateExercises(allExercises);
    });

    li.append(changeName, changeMusclegroup, saveBtn, returnBtn);
};


// edit Training Plan logic
let editTrainingPlan = function(trainingPlanToEdit : TrainingPlan, allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    console.log("bearbeiten");
};


*/