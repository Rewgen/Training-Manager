// MODELS
import type { Exercise } from "../models/Exercise";



// Save exercises
export let saveExercises = (allExercises : Array<Exercise>) => {
    localStorage.setItem("exerciseList", JSON.stringify(allExercises));
}

// Load exercises or [], if empty
export const loadExercises = async () => {
    const exerciseList : string = localStorage.getItem("exerciseList") ?? "[]";
    const allExercises : Array<Exercise> = JSON.parse(exerciseList);
    return allExercises;
}


// load JSON (use later)
/*
    export const loadExercises = async function() {
        const response = await fetch("../../src/data/exercises.json");
        const data = await response.json();
        return data
    };
*/