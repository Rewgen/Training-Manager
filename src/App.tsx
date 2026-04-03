// MODELS
import type { ViewMode } from "./models/ViewMode.js";
import { MuscleGroup } from "./models/MuscleGroup.js";
import type { TrainingPlan } from "./models/TrainingPlan.js";
import type { Exercise } from "./models/Exercise.js";

// HOOKS
import { useEffect, useState } from "react"
// COMPONENTS
import { ViewSwitcher } from "./components/ViewSwitcher.js";
import { TrainingPlanSection } from "./components/TrainingPlanSection.js";
import { ExerciseSection } from "./components/ExerciseSection.js";


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



    return (
        <>
            <ViewSwitcher view={view} onViewChange={setView}/>
                {view === "exercises" && <ExerciseSection allExercises={testExercises}/>}
                {view === "plans" && <TrainingPlanSection allTrainingPlans={testPlans}/>}
            
        </>
    )
}

export default App