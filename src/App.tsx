// MODELS
import type { ViewMode } from "./models/ViewMode.js";
import { MuscleGroup } from "./models/MuscleGroup.js";
import type { TrainingPlan } from "./models/TrainingPlan.js";

// HOOKS
import { useEffect, useState } from "react"
// COMPONENTS
import { ViewSwitcher } from "./ui/ViewSwitcher.js";
import { TrainingPlanList } from "./ui/TrainingPlanList.js";
import { ExerciseList } from "./ui/ExerciseList.js";
import type { Exercise } from "./models/Exercise.js";


// platzhalter -> wird später durch allTrainingPlans ersetzt
const testPlans : TrainingPlan[] = [
    { id : 1, name : "testPlan1" },
    { id : 2, name : "testPlan2" },
    { id : 3, name : "testPlan3" },
];

// platzhalter -> wird später durch allExercises ersetzt
const testExercises : Exercise[] = [
    { id : 1, name: "Liegestütz", muscleGroup : MuscleGroup.Chest },
    { id : 2, name: "Klimmzüge", muscleGroup : MuscleGroup.Back },
    { id : 3, name: "Sit-up", muscleGroup : MuscleGroup.Core },
]

const App = () => {

    const [view, setView] = useState<ViewMode>("exercises");

    // platzhalter -> wird später durch hook (useEffect) ersetzt
    const deleteExercise = (id : number) => {
        let deletedExercise = testExercises.find(plan => plan.id === id);
        console.log("gelöscht: ", deletedExercise);
    };

    const editExercise = (id : number) => {
        let editedExercise = testExercises.find(plan => plan.id === id);
        console.log("bearbeitet: ", editedExercise);
    }


    

    return (
        <>
            <ViewSwitcher view={view} onViewChange={setView}/>
            <ExerciseList exercises={testExercises} onDelete={deleteExercise} onEdit={editExercise}/>
            <TrainingPlanList trainingPlans={testPlans}/>
        </>
    )
}

export default App