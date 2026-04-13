// MODELS 
import type { Exercise } from "../../models/Exercise.js";
import { MuscleGroup } from "../../models/MuscleGroup.js";
import { MuscleGroupLabels } from "../../models/MuscleGroubLabels.js";

// HOOKS
import { useRef } from "react";

type Props = {
    allExercises : Exercise[],
    onDelete : (exerciseId : number) => void,
    onEdit : (exerciseId : number, name : string, muscleGroup : MuscleGroup) => void,
    editId : number | null,
    setEditId : (exerciseId : number | null) => void
};

export const ExerciseList = ( {allExercises, onDelete, onEdit, editId, setEditId} : Props ) => {

    const changeNameRef = useRef<HTMLInputElement>(null);
    const changeMGRef = useRef<HTMLSelectElement>(null);

    return (

        <ul id="exercise-list">
            {allExercises.map(exercise => {
                const germanMGLabel = MuscleGroupLabels[exercise.muscleGroup];
                return (
                    <li key={exercise.id}>
                        {exercise.id !== editId
                            ?
                                <> 
                                    {exercise.name} {germanMGLabel}
                                    <button onClick={() => onDelete(exercise.id)}>Löschen</button>
                                    <button onClick={() => setEditId(exercise.id)}>Bearbeiten</button>
                                </>
                            : 
                                <form onSubmit={(event) => {
                                    event.preventDefault();
                                    onEdit(
                                        exercise.id, 
                                        changeNameRef.current?.value!,
                                        changeMGRef.current?.value as MuscleGroup
                                    );
                                    setEditId(null)
                                }}>
                                    <input type="text" defaultValue={exercise.name} ref={changeNameRef}/>
                                    <select defaultValue={exercise.muscleGroup} ref={changeMGRef}>
                                        <option value="" disabled hidden>Bitte wählen</option>
                                        <option value="Chest">Brust</option>
                                        <option value="Back">Rücken</option>
                                        <option value="Legs">Beine</option>
                                        <option value="Core">Rumpf</option>
                                        <option value="Shoulders">Schultern</option>
                                        <option value="Arms">Arme</option>
                                    </select>
                                    <button type="submit">Speichern</button>
                                    <button onClick={() => setEditId(null)}>Abbrechen</button>
                                </form>
                        }
                    </li>
                )
            })}
        </ul>
    )
};