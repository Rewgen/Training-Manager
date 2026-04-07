// MODELS
import { MuscleGroup } from "../models/MuscleGroup.js";
import type { Exercise } from "../models/Exercise";

// STORAGE
import { saveExercises } from "../storage/exerciseStorage.js";


export let createExercise = (allExercises: Exercise[], exerciseName: string, exerciseMuscleGroup: MuscleGroup) => {
    let newExercise: Exercise = {
        id : Date.now(),
        name : exerciseName,
        muscleGroup : exerciseMuscleGroup,
    };
    allExercises.push(newExercise);

    saveExercises(allExercises)
};



/** activate filter and submit selection for rendering 
 * @param listFilter submitted selection from DOM
 */
export let applyFilter = (listFilter : string) => {
    let exercises = [];
    const selectedValue = listFilter as MuscleGroup;
        // show filtered exercises in DOM
        if (selectedValue === MuscleGroup.All) {
            exercises = allExercises;
        } else {
            const filtered = allExercises.filter(ex => ex.muscleGroup === selectedValue) as Array<Exercise>;
            exercises = filtered;
        }
    saveExercises(allExercises)
};



// Delete Exercise by submitted id
export let deleteExercise = (exerciseId : string) => {

    const numericId = Number(exerciseId);
    const updatedExercises = allExercises.filter((ex) => ex.id !== numericId);
    allExercises.length = 0;
    allExercises.push(...updatedExercises);

    saveExercises(allExercises)
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
export let editExercise = (exerciseToEdit : Exercise, name? : string, muscleGroup? : MuscleGroup) => {
    if(name) exerciseToEdit.name = name;
    if(muscleGroup) exerciseToEdit.muscleGroup = muscleGroup;

    saveExercises(allExercises)
};