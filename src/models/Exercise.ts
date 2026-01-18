import { Musclegroup } from "./Musclegroup";

export interface Exercise {
    id : number,
    name: string,
    musclegroup : Musclegroup,
    sets : number,
    reps: number 
}