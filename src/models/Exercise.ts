import { Musclegroup } from "./Musclegroup.js";

export interface Exercise {
    id : number,
    name: string,
    musclegroup : Musclegroup,
    sets : number,
    reps: number 
}