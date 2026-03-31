import type { Exercise } from "../models/Exercise.js";
import { MuscleGroupLabels } from "../models/MuscleGroubLabels.js";

type Props = {
    exercises : Exercise[],
    onDelete : (id : number) => void,
    onEdit : (id : number) => void
};

export const ExerciseList = ( {exercises, onDelete, onEdit} : Props ) => {

    return (
        <ul>
            {exercises.map(exercise => {
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