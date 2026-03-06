// MODELS
import { Musclegroup } from "../models/Musclegroup.js";
import type { Exercise } from "../models/Exercise";

// MAIN
import { allExercises } from "../main.js"; // variabels
import { updateExercises } from "../main.js"; // save and apply changes

export let createExercise = (exerciseName: string, exerciseMusclegroup: Musclegroup) => {
    
    let newExercise: Exercise = {
        id : Date.now(),
        name : exerciseName,
        musclegroup : exerciseMusclegroup,
    };
    allExercises.push(newExercise);

    updateExercises(allExercises);
};

