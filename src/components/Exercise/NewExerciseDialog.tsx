// HOOKS
import { useRef } from "react"

// MODELS
import type { MuscleGroup } from "../../models/MuscleGroup";
import type { Exercise } from "../../models/Exercise";

type Props = {
    onCreate : (exerciseName : string, exerciseMuscleGroup : MuscleGroup) => void 
}


export const NewExerciseDialog = ( {onCreate} : Props ) => {

    const dialogRef = useRef<HTMLDialogElement>(null);
    const newExerciseNameRef = useRef<HTMLInputElement>(null);
    const newExerciseMuscleGroupRef = useRef<HTMLSelectElement>(null);
    const openDialog = () => dialogRef.current?.showModal();
    const closeDialog = () => dialogRef.current?.close();

    
    return (

        <div>
            <button id="new-exercise" onClick={openDialog}>Übung erstellen</button>

            <dialog ref={dialogRef} id="new-exercise-dialog">
                <form id="add-exercise-container" onSubmit={(event) => {
                    event.preventDefault();
                    closeDialog();
                    onCreate(
                        newExerciseNameRef.current?.value!, 
                        newExerciseMuscleGroupRef.current?.value as MuscleGroup
                    );
                }}>
                    <input ref={newExerciseNameRef} type="text" id="add-exercise-name" placeholder="Name der Übung" required/>
                    <select ref={newExerciseMuscleGroupRef} id="add-exercise-muscleGroup" defaultValue={""} required>
                        <option value="" disabled hidden>Bitte wählen</option>
                        <option value="Chest">Brust</option>
                        <option value="Back">Rücken</option>
                        <option value="Legs">Beine</option>
                        <option value="Core">Rumpf</option>
                        <option value="Shoulders">Schultern</option>
                        <option value="Arms">Arme</option>
                    </select>
                    <button type="submit">Absenden</button>
                </form>
            </dialog>
        </div>
    )
}