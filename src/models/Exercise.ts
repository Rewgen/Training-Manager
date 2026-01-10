import { Musclegroup } from "./Musclegroup";

export interface Exercise {
    id : string,
    name: string,
    musclegroup : Musclegroup,
    sets : number,
    reps: number 
}