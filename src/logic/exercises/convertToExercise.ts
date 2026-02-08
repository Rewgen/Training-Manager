// Models
import type { TrainingPlan } from "../../models/TrainingPlan.js";
import type { Exercise } from "../../models/Exercise";


export let convertIdToExercise = function(exerciseIds:Number[], allExercises:Exercise[]) {
    let exerciseArray = allExercises.filter(ex => exerciseIds.includes(ex.id));
    return exerciseArray
}