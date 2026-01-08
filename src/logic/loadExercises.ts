import type { Exercise } from "../models/Exercise";

export async function loadExercises():Promise<Exercise[]>{
    const response = await fetch("./src/data/exercises.json");
    const data = await response.json();
    return data;
}