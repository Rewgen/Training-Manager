// MODELS
import { Musclegroup } from "../models/Musclegroup.js";
import type { Exercise } from "../models/Exercise";

// MAIN
import { allExercises } from "../main.js"; // variabels
import { updateStorage, updateView } from "../main.js"; // save and apply changes


export let createExercise = (exerciseName: string, exerciseMusclegroup: Musclegroup) => {
    
    let newExercise: Exercise = {
        id : Date.now(),
        name : exerciseName,
        musclegroup : exerciseMusclegroup,
    };
    allExercises.push(newExercise);

    updateStorage(allExercises);
    updateView(allExercises);
};



/** activate filter and submit selection for rendering 
 * @param listFilter submitted selction from DOM
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
    updateView(exercises);
};


/** Delete Exercise by submitted id
 * @param exerciseId submitted id as String
 */
export let deleteExercise = (exerciseId : string) => {

    const numericId = Number(exerciseId);
    const updatedExercises = allExercises.filter((ex) => ex.id !== numericId);
    allExercises.length = 0;
    allExercises.push(...updatedExercises);

    updateStorage(allExercises);
    updateView(allExercises);
}
    