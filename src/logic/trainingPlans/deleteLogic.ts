// Main
import { updateExercises } from "../../main.js";
import { updateTrainingPlans } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise.js";
import type { TrainingPlan } from "../../models/TrainingPlan.js";



// export let initDeleteLogic = function(allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    

//         // delete Training Pplan
//         const updatedTrainingPlan = allTrainingPlans.filter((plan) => plan.id !== numericId);
//         allTrainingPlans.length = 0;
//         allTrainingPlans.push(...updatedTrainingPlan);
    
//         updateExercises(allExercises);
//         updateTrainingPlans(allExercises, allTrainingPlans);
//     }