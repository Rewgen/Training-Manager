// Models
import type { TrainingPlan } from "../models/TrainingPlan.js";
import type { Exercise } from "../models/Exercise";
import { musclegroupLabels } from "../models/MusclegroubLabels.js";
// Logic
import { convertIdToExercise } from "../logic/exercises/convertToExercise.js";


export let showTrainingPlans = function(allTrainingPlans:TrainingPlan[], allExercises:Exercise[]){
    
    const trainingPlanSection = document.getElementById("training-plan-section") as HTMLElement;

    allTrainingPlans.forEach(trainPlan => {
        const ul = document.createElement("ul") as HTMLUListElement;
        const headline = document.createElement("h3") as HTMLHeadingElement;

        // add Training Plan Name as headline 
        headline.textContent = trainPlan.name;
        ul.appendChild(headline);

        // convert and add exercises to Training Plan
        let exercises:Exercise[] = convertIdToExercise(trainPlan.exerciseIds, allExercises);
        exercises.forEach(ex => {
            
            let germanLabel = musclegroupLabels[ex.musclegroup];

            let li = document.createElement("li");
            li.textContent = `${ex.name} - ${germanLabel} - ${ex.sets} x ${ex.reps}`;
            
            ul.appendChild(li);
        });

        trainingPlanSection.appendChild(ul);

    });

}