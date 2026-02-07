import type { Exercise } from "../../models/Exercise";
// Logic
import { applyFilter } from "./filterExercises.js";
import { saveExercises } from "./saveExercises.js";

export let initDeleteLogic = function(allExercises : Exercise[]){
    document.addEventListener("click", (event) => {
        
        if (!(event.target instanceof HTMLElement)) return;

        const deleteButton = event.target.closest(".delete-button");
        if (!(deleteButton instanceof HTMLElement)) return;

        const id = deleteButton.dataset.id;
        if (!id) return; 

        const numericId = Number(id);

        const updatedExercises = allExercises.filter(
            (ex) => ex.id !== numericId
        );

        allExercises.length = 0;
        allExercises.push(...updatedExercises);

        applyFilter(allExercises);
        saveExercises(allExercises);
    })
};