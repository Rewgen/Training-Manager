// MODELS
import type { Exercise } from "../models/Exercise.js";
import { MuscleGroup } from "../models/MuscleGroup.js";
import { MuscleGroupLabels } from "../models/MuscleGroubLabels.js";

// LOGIC
import { createExercise, applyFilter, deleteExercise, convertToExercise, editExercise } from "../logic/exerciseService.js";



// initialise Dialog and eventListener für new Exercise
export let initCreateExercise = () => {

    // DOM Variables
    const createExerciseDom = {
        newExBtn : document.getElementById("new-exercise") as HTMLButtonElement,
        newExPopUp : document.getElementById("new-exercise-dialog") as HTMLDialogElement,
        container : document.getElementById("add-exercise-container") as HTMLFormElement,
        name : document.getElementById("add-exercise-name") as HTMLInputElement,
        muscleGroup : document.getElementById("add-exercise-muscleGroup") as HTMLInputElement
    };

    createExerciseDom.newExBtn.onclick = () => createExerciseDom.newExPopUp.showModal();
    createExerciseDom.container.addEventListener("submit", (event) => {
        
        event.preventDefault();
        console.log("test");
        let name: string = createExerciseDom.name.value;
        let muscleGroup = createExerciseDom.muscleGroup.value as MuscleGroup;

        createExercise(name, muscleGroup);

        createExerciseDom.name.value = "";
        createExerciseDom.muscleGroup.value = "";
    })
};



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
        const type = deleteButton.dataset.type;
        if (type !== "exercise") return; // stops, if button is for Training Plan
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
        const changeMuscleGroup = document.createElement("select");
        Object.values(MuscleGroup).forEach(group => {
            let opt = document.createElement("option");
            if(group === "All") return;
            opt.textContent = MuscleGroupLabels[group];
            opt.value = group;
            if(group === exerciseToEdit.muscleGroup) opt.selected = true;
            changeMuscleGroup.appendChild(opt);
        })

        // Save Button
        let saveBtn = document.createElement("button");
        saveBtn.textContent = "Speichern";
        saveBtn.addEventListener("click", () => editExercise(exerciseToEdit, changeName.value, changeMuscleGroup.value as MuscleGroup)); // -> Logic

        // Return Button
        let returnBtn = document.createElement("button");
        returnBtn.textContent = "Abbrechen";
        returnBtn.addEventListener("click", () => editExercise(exerciseToEdit)); // -> Logic
        
        li.append(changeName, changeMuscleGroup, saveBtn, returnBtn);
    })
};