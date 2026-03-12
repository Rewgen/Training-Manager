// MODELS
import type { Exercise } from "../../models/Exercise.js";
import { Musclegroup } from "../../models/Musclegroup.js";
import { musclegroupLabels } from "../../models/MusclegroubLabels.js";

// LOGIC
import { applyFilter, deleteExercise, convertToExercise, editExercise } from "../../logic/exerciseService.js";




// filter eventListener
export let initFilterExecises = () => {
    const exerciseListFilter = document.getElementById("exercise-list-filter") as HTMLSelectElement;
    exerciseListFilter.addEventListener("change", async () => applyFilter(exerciseListFilter.value)); // -> Logic
};

// delete event delegation
export let initDeleteExercise = () => {
    document.addEventListener("click", (event) => {        
        if (!(event.target instanceof HTMLElement)) return;
        const deleteButton = event.target.closest(".delete-button");
        if (!(deleteButton instanceof HTMLElement)) return;
        const exerciseId = deleteButton.dataset.id;
        if (!exerciseId) return; 
        deleteExercise(exerciseId); // -> Logic
    })
};

// edit Exercise
export let initEditExercise = function(){
    document.addEventListener("click", (event) => {
        // event delegation
        if(!(event.target instanceof HTMLElement)) return;
        const editButton = event.target.closest(".edit-button");
        if(!(editButton instanceof HTMLElement)) return;
        const exerciseId = editButton.dataset.id;
        if(!(exerciseId)) return;

        // get Exercise to edit
        let exerciseToEdit : Exercise = convertToExercise(exerciseId); // -> Logic
        let li = document.querySelector(`button[data-id="${exerciseToEdit.id}"]`)?.closest("li");
        if(!li) return;
        li.textContent = "";

        // change values
        const changeName = document.createElement("input");
        changeName.value = exerciseToEdit.name;
        const changeMusclegroup = document.createElement("select");
        Object.values(Musclegroup).forEach(group => {
            let opt = document.createElement("option");
            if(group === "All") return;
            opt.textContent = musclegroupLabels[group];
            opt.value = group;
            if(group === exerciseToEdit.musclegroup) opt.selected = true;
            changeMusclegroup.appendChild(opt);
        })

        // Save Button
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Speichern";
        saveBtn.addEventListener("click", () => editExercise(exerciseToEdit, changeName.value, changeMusclegroup.value as Musclegroup)); // -> Logic

        // Return Button
        let returnBtn = document.createElement("button");
        returnBtn.textContent = "Abbrechen";
        returnBtn.addEventListener("click", () => editExercise(exerciseToEdit)); // -> Logic
        
        li.append(changeName, changeMusclegroup, saveBtn, returnBtn);
    })
};