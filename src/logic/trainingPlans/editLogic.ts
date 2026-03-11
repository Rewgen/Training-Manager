// Main
import { updateExercises } from "../../main.js";
import { updateTrainingPlans } from "../../main.js";

// Models
import type { Exercise } from "../../models/Exercise.js";
import type { TrainingPlan } from "../../models/TrainingPlan.js";
import { Musclegroup } from "../../models/Musclegroup.js";
// Logic
import { musclegroupLabels } from "../../models/MusclegroubLabels.js";




// edit Exercise logic
let editExercise = function(exerciseToEdit : Exercise, allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){


    // Empty Li
    

    // Change Name


    // Select Musclegroup






};


// edit Training Plan logic
let editTrainingPlan = function(trainingPlanToEdit : TrainingPlan, allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){
    console.log("bearbeiten");
};

/*

    // edit Training Plan
    let trainingPlanToEdit = allTrainingPlans.find(plan => plan.id === id);
    if(trainingPlanToEdit) editTrainingPlan(trainingPlanToEdit, allExercises, allTrainingPlans);

*/