// MODELS
import type { Exercise } from "../models/Exercise.js";
import { MuscleGroup } from "../models/MuscleGroup.js";

// HOOKS
import { useEffect, useState } from "react";

// COMPONENTS
import { NewExerciseDialog } from "./Exercise/NewExerciseDialog.js";
import { ExerciseList } from "./Exercise/ExerciseList.js";

// LOGIC
import { createExercise, deleteExercise, editExercise } from "../logic/exerciseService.js";
import { ExerciseFilter } from "./Exercise/ExerciseFilter.js";


type Props = {
    allExercises : Exercise[],
    setExercises : (exercises : Exercise[]) => void
}




export const ExerciseSection = ( {allExercises, setExercises} : Props) => {


    const [editId, setEditId] = useState<number|null>(null);

    const handleCreate = (exerciseName: string, exerciseMuscleGroup: MuscleGroup) => {
        const updated = createExercise(allExercises, exerciseName, exerciseMuscleGroup);
        console.log("erstellt:", updated);
        setExercises(updated)
    }

    const handleDelete = (exerciseId : number) => {
        const updated = deleteExercise(allExercises, exerciseId);
        setExercises(updated);
    }


    const handleEdit = (exerciseId : number, name : string, muscleGroup : MuscleGroup) => {
        const updated = editExercise(allExercises, exerciseId, name, muscleGroup)
        setExercises(updated);
    }

    return (
        <section id="exercise-section">
            <h2>Übungen</h2>
    
            <ExerciseFilter/>
            <NewExerciseDialog onCreate={handleCreate}/>
            <ExerciseList allExercises={allExercises} onDelete={handleDelete} onEdit={handleEdit} editId={editId} setEditId={setEditId}/>
        </section>
    )
}