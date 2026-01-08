import { loadExercises } from "./logic/loadExercises.js";

async function init() {
    const exercises = await loadExercises();
    console.log(exercises);
};

init();