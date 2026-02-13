// Models
import type { TrainingPlan } from "../models/TrainingPlan.js";
import type { Exercise } from "../models/Exercise";
import { musclegroupLabels } from "../models/MusclegroubLabels.js";



export let showTrainingPlans = function(allExercises:Exercise[], allTrainingPlans:TrainingPlan[]){

    const trainingPlanContainer = document.querySelector("#training-plan-section > div") as HTMLElement;

    trainingPlanContainer.textContent = "";

    allTrainingPlans.forEach(trainPlan => {
        const ul = document.createElement("ul") as HTMLUListElement;
        const headline = document.createElement("h3") as HTMLHeadingElement;
        const deleteButton = createDeleteButton(trainPlan.id) as HTMLButtonElement;
        const editButton = createEditButton(trainPlan.id) as HTMLButtonElement;

        // add Training Plan Name as headline 
        headline.textContent = trainPlan.name;
        ul.appendChild(headline);

        // add Buttons
        ul.appendChild(deleteButton);
        ul.appendChild(editButton);

        // convert and add exercises to Training Plan
        let exercises:Exercise[] = allExercises.filter(ex => trainPlan.exerciseIds.includes(ex.id));


        exercises.forEach(ex => {
            
            let germanLabel = musclegroupLabels[ex.musclegroup];

            let li = document.createElement("li");
            li.textContent = `${ex.name} - ${germanLabel} - ${ex.sets} x ${ex.reps}`;
            
            ul.appendChild(li);
        });

        trainingPlanContainer.appendChild(ul);

    });

}

let createDeleteButton = function(TrainPlanId : number):HTMLButtonElement{
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.dataset.id = TrainPlanId.toString();
    deleteButton.textContent = "Löschen";
    return deleteButton
};

let createEditButton = function(TrainPlanId : number):HTMLButtonElement{
    let editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    editButton.dataset.id = TrainPlanId.toString();
    editButton.textContent = "Bearbeiten";
    return editButton
};