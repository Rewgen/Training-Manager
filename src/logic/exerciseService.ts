// MODELS
import { Musclegroup } from "../models/Musclegroup.js";
import type { Exercise } from "../models/Exercise";

// MAIN
import { updateStorageExercise, updateDisplayedExercise } from "../main.js"; // save and apply changes
import { allExercises } from "../main.js"; // variabels


export let createExercise = (exerciseName: string, exerciseMusclegroup: Musclegroup) => {
    let newExercise: Exercise = {
        id : Date.now(),
        name : exerciseName,
        musclegroup : exerciseMusclegroup,
    };
    allExercises.push(newExercise);

    updateStorageExercise(allExercises);
    updateDisplayedExercise(allExercises);
};



/** activate filter and submit selection for rendering 
 * @param listFilter submitted selection from DOM
 */
export let applyFilter = (listFilter : string) => {
    let exercises = [];
    const selectedValue = listFilter as Musclegroup;
        // show filtered exercises in DOM
        if (selectedValue === Musclegroup.All) {
            exercises = allExercises;
        } else {
            const filtered = allExercises.filter(ex => ex.musclegroup === selectedValue) as Array<Exercise>;
            exercises = filtered;
        }
    updateDisplayedExercise(exercises);
};



// Delete Exercise by submitted id
export let deleteExercise = (exerciseId : string) => {

    const numericId = Number(exerciseId);
    const updatedExercises = allExercises.filter((ex) => ex.id !== numericId);
    allExercises.length = 0;
    allExercises.push(...updatedExercises);

    updateStorageExercise(allExercises);
    updateDisplayedExercise(allExercises);
}



// Convert submitted Id to Exercise
export let convertToExercise = (exerciseId : string) : Exercise => {
    let id = Number(exerciseId);
    let exerciseToEdit = allExercises.find(ex => ex.id === id);
    if (!exerciseToEdit) {
        throw new Error(`Übung mit ID ${id} existiert nicht`);
    };
    return exerciseToEdit
}



// Edit Exercise
export let editExercise = (exerciseToEdit : Exercise, name? : string, musclegroup? : Musclegroup) => {
    if(name) exerciseToEdit.name = name;
    if(musclegroup) exerciseToEdit.musclegroup = musclegroup;
    updateStorageExercise(allExercises);
    updateDisplayedExercise(allExercises);
};