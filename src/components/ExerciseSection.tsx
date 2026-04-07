
import type { Exercise } from "../models/Exercise.js";

// COMPONENTS
import { NewExerciseDialog } from "./Exercise/NewExerciseDialog.js";
import { ExerciseList } from "./Exercise/ExerciseList.js";

type Props = {
    allExercises : Exercise[] 
}




export const ExerciseSection = ( {allExercises} : Props) => {

    const deleteExercise = (id : number) => {
        let deletedExercise = allExercises.find(plan => plan.id === id);
        console.log("gelöscht: ", deletedExercise);
    };

    const editExercise = (id : number) => {
        let editedExercise = allExercises.find(plan => plan.id === id);
        console.log("bearbeitet: ", editedExercise);
    }

    return (
        <section id="exercise-section">
            <h2>Übungen</h2>
    
            <select defaultValue={"All"} name="exercise-list-filter" id="exercise-list-filter">
                <option value={"All"}>Alle Muskelgruppen</option>
                <option value={"Chest"}>Brust</option>
                <option value={"Back"}>Rücken</option>
                <option value={"Legs"}>Beine</option>
                <option value={"Core"}>Rumpf</option>
                <option value={"Shoulders"}>Schultern</option>
                <option value={"Arms"}>Arme</option>
            </select>
            
            <NewExerciseDialog allExercises={allExercises}/>
            <ExerciseList allExercises={allExercises} onDelete={deleteExercise} onEdit={editExercise}/>
        </section>
    )
}