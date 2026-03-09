// LOGIC
import { applyFilter, deleteExercise } from "../../logic/exerciseService.js";


const exerciseListFilter = document.getElementById("exercise-list-filter") as HTMLSelectElement;  

// filter eventListener
export let initFilterExecises = () => exerciseListFilter.addEventListener("change", async () => applyFilter(exerciseListFilter.value));

export let initDeleteExercise = () => {
    document.addEventListener("click", (event) => {        
        if (!(event.target instanceof HTMLElement)) return;
        const deleteButton = event.target.closest(".delete-button");
        if (!(deleteButton instanceof HTMLElement)) return;
        const id = deleteButton.dataset.id;
        if (!id) return; 
        deleteExercise(id);
})
};
