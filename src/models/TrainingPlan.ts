import type { PlanExercise } from "./PlanExercise";

export interface TrainingPlan {
    name : string,
    id : number,
    exercises : PlanExercise[]
}