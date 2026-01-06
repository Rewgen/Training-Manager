import { Musclegroup } from "./Musclegroup";

export interface Exercise {
    id : number,
    name : string,
    muscleGroup : Musclegroup,
    sets : number,
    reps : number,
};
