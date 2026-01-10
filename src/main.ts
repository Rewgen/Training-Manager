import { loadExercises } from "./logic/loadExercises.js";
import { showExercises } from "./ui/renderExercises.js";

let init = async function(){
    let exercises = await loadExercises();
    console.log(exercises);
}

init();
showExercises();