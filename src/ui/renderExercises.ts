import { loadExercises } from "../logic/loadExercises.js";

const exerciseListContainer = document.getElementById("exerciseListContainer");

export let showExercises = async function(){

    let exercisesArray = await loadExercises();
    exercisesArray.forEach((ex : string) => {
        let li = document.createElement("li");
        li.innerText = ex;
        exerciseListContainer?.appendChild(li);
    });
};
