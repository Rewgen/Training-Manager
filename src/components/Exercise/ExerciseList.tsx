import type { Exercise } from "../../models/Exercise.js";
import { MuscleGroupLabels } from "../../models/MuscleGroubLabels.js";

type Props = {
    allExercises : Exercise[],
    onDelete : (id : number) => void,
    onEdit : (id : number) => void
};

export const ExerciseList = ( {allExercises, onDelete, onEdit} : Props ) => {

    return (

        <ul id="exercise-list">
            {allExercises.map(exercise => {
                const germanMGLabel = MuscleGroupLabels[exercise.muscleGroup];
                return (
                    <li key={exercise.id}>
                        {exercise.name} {germanMGLabel}
                        <button onClick={() => onDelete(exercise.id)}>Löschen</button>
                        <button onClick={() => onEdit(exercise.id)}>Bearbeiten</button>
                    </li>
                )
            })}
        </ul>
    )
};