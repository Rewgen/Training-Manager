// Models
import type { Exercise } from "../../models/Exercise";

export let saveExercises = (allExercises : Array<Exercise>) => {
    localStorage.setItem("exerciseList", JSON.stringify(allExercises));
}