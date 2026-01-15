import type { Exercise } from "../models/Exercise.js";
import { Musclegroup } from "../models/Musclegroup.js";


export let filterExercisesByMusclegroup =  function (exercises : Array<Exercise>, group : Musclegroup) {
    return exercises.filter(ex => ex.musclegroup === group) as Array<Exercise>;
}
