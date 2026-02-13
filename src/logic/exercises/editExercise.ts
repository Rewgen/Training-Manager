// Main
import { updateExercises } from "../../main.js";
import { updateTrainingPlans } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise.js";
import type { TrainingPlan } from "../../models/TrainingPlan";
import { Musclegroup } from "../../models/Musclegroup.js";
// Logic
import { musclegroupLabels } from "../../models/MusclegroubLabels.js";


export let initEditLogic = function(allExercises: Exercise[], allTrainingPlans : TrainingPlan[]){
    // Exercise DOM-list
    const list = document.getElementById("exercise-list");
    if(!(list instanceof HTMLElement)) return;

    list.addEventListener("click", (event) => {

        if(!(event.target instanceof HTMLElement)) return;
    
        const editButton = event.target.closest(".edit-button");
        if(!(editButton instanceof HTMLElement)) return;

        let idString = editButton.dataset.id;
        if(!(idString)) return;

        let id = Number(idString);

        let exerciseToEdit = allExercises.find(ex => ex.id === id);
        if(!exerciseToEdit) return;

        enterEditMode(exerciseToEdit, allExercises, allTrainingPlans)
    })
};

let enterEditMode = function(exerciseToEdit : Exercise, allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
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

    // Change Sets
    let changeSets = document.createElement("input");
    changeSets.type = "number";
    changeSets.valueAsNumber = exerciseToEdit.sets;
    changeSets.placeholder = "Sätze";

    // Change Reps
    let changeReps = document.createElement("input");
    changeReps.type = "number";
    changeReps.valueAsNumber = exerciseToEdit.reps;
    changeReps.placeholder = "Wiederholungen";

    // Save Button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Speichern";

    saveBtn.addEventListener("click", () =>{
        exerciseToEdit.name = changeName.value;
        exerciseToEdit.musclegroup = changeMusclegroup.value as Musclegroup;
        exerciseToEdit.sets = changeSets.valueAsNumber;
        exerciseToEdit.reps = changeReps.valueAsNumber;

        updateExercises(allExercises);
        updateTrainingPlans(allExercises, allTrainingPlans);
    });

    // Return Button
    let returnBtn = document.createElement("button");
    returnBtn.textContent = "Abbrechen";

    returnBtn.addEventListener("click", () => {
        updateExercises(allExercises);
    });


    li.append(changeName, changeMusclegroup, changeSets, changeReps, saveBtn, returnBtn);
}