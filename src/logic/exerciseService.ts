// MODELS
import { MuscleGroup } from "../models/MuscleGroup.js";
import type { Exercise } from "../models/Exercise";

// STORAGE
import { saveExercises } from "../storage/exerciseStorage.js";


export const createExercise = (allExercises: Exercise[], exerciseName: string, exerciseMuscleGroup: MuscleGroup) => {
    const newExercise: Exercise = {
        id : Date.now(),
        name : exerciseName,
        muscleGroup : exerciseMuscleGroup,
    };

    const updatedExercises = [...allExercises];
    updatedExercises.push(newExercise);
    saveExercises(updatedExercises);
    return updatedExercises
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
export let deleteExercise = (allExercises: Exercise[], exerciseId : number) => {

    const updatedExercises = allExercises.filter((ex) => ex.id !== exerciseId);
    saveExercises(updatedExercises);
    return updatedExercises
}



// Convert submitted Id to Exercise
export let convertToExercise = (exercises : Exercise[], exerciseId : number) : Exercise => {
    let exerciseToEdit = exercises.find(ex => ex.id === exerciseId);
    if (!exerciseToEdit) {
        throw new Error(`Übung mit ID ${exerciseId} existiert nicht`);
    };
    return exerciseToEdit
}



// Edit Exercise
export let editExercise = (allExercises : Exercise[], idForChange : number, newName : string, newMuscleGroup : MuscleGroup) => {

    const updatedExercises : Exercise[] = allExercises.map(ex => 
        idForChange === ex.id
        ? {...ex, name : newName, muscleGroup : newMuscleGroup}
        : ex
    )

    console.log("old", allExercises);
    console.log("new", updatedExercises)

    saveExercises(updatedExercises);
    return updatedExercises
};