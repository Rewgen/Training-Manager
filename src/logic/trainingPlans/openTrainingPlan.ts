// MODELS
import type { Exercise } from "../../models/Exercise.js";
import type { TrainingPlan } from "../../models/TrainingPlan.js";
import type { ViewMode } from "../../models/ViewMode.js";
import { musclegroupLabels } from "../../models/MusclegroubLabels.js";

// Ui
import { changeView } from "../../ui/updateView.js";
    

export let initOpenPlanLogic = function(allExercises : Exercise[], allTrainingPlans : TrainingPlan[]){

    const view : ViewMode = "planOverview";

    const planOverview = document.getElementById("training-plan-overview") as HTMLElement;
    const heading = document.createElement("h3") as HTMLHeadingElement;

    document.addEventListener("click", (event) => {
        

        if (!(event.target instanceof HTMLElement)) return;

        const openButton = event.target.closest(".open-plan-button");
        if (!(openButton instanceof HTMLElement)) return;

        const id = openButton.dataset.id;
        if (!id) return; 

        const numericId = Number(id);

        const selectedPlan = allTrainingPlans.find(plan  => numericId === plan.id);
        if(!selectedPlan) return

        

        // === Plan overview ===

        planOverview.textContent = "";

        // add name
        heading.textContent = selectedPlan.name;

        // convert id's to exercises and add to plan overview
        const ul = document.createElement("ul");

        let exercises:Exercise[] = allExercises.filter(ex => selectedPlan.exerciseIds.includes(ex.id));
        
        exercises.forEach(ex => {

            let germanLabel = musclegroupLabels[ex.musclegroup];

            let li = document.createElement("li");
            li.textContent = `${ex.name} - ${germanLabel} - ${ex.sets} x ${ex.reps}`; 
            
            ul.appendChild(li);
        });
        planOverview.appendChild(heading);
        planOverview.appendChild(ul);



        changeView(view, allExercises, allTrainingPlans);
    
    })
};