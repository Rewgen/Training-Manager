// MODELS
import type { ViewMode } from "./models/ViewMode.js";
import type { TrainingPlan } from "./models/TrainingPlan.js";
import type { Exercise } from "./models/Exercise.js";
// HOOKS
import { useEffect, useState } from "react"
// COMPONENTS
import { ViewSwitcher } from "./components/ViewSwitcher.js";
import { TrainingPlanSection } from "./components/TrainingPlanSection.js";
import { ExerciseSection } from "./components/ExerciseSection.js";
// STORAGE
import { saveExercises, loadExercises } from "./storage/exerciseStorage.js";
import { saveTrainingPlans, loadTrainingPlans } from "./storage/trainingPlanStorage.js";




const App =() => {

    const [view, setView] = useState<ViewMode>("exercises");
    const [allExercises, setExercises] = useState<Exercise[]>([]);
    const [allTrainingPlans, setTrainingPlans] = useState<TrainingPlan[]>([]);

    useEffect(() => {
    (async () => {
        setExercises(await loadExercises());
        setTrainingPlans(await loadTrainingPlans()); 
    }) ()
    }, [])

    return (
        <>
            <ViewSwitcher view={view} onViewChange={setView}/>
                {view === "exercises" && <ExerciseSection allExercises={allExercises} setExercises={setExercises}/>}
                {view === "plans" && <TrainingPlanSection allTrainingPlans={allTrainingPlans}/>}
        </>
    )
}

export default App