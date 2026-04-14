import type { TrainingPlan } from "../models/TrainingPlan.js";

// Components
import { TrainingPlanList } from "./TrainingPlan/TrainingPlanList";
import { NewTrainingPlanDialog } from "./TrainingPlan/NewTrainingPlanDialog.js";
import { TrainingPlanDetails } from "./TrainingPlan/TrainingPlanDetails.js";

import { createTrainingPlan } from "../logic/trainingPlanService.js";

type Props = {
    allTrainingPlans : TrainingPlan[]
    setTrainingPlans : (trainingPlans : TrainingPlan[]) => void
}

export const TrainingPlanSection = ({allTrainingPlans, setTrainingPlans} : Props)  => {

    const handleCreate = (trainingPlanName : string) => {
        const updated = createTrainingPlan(allTrainingPlans, trainingPlanName);
        setTrainingPlans(updated)
    };

    return (
        <section id="training-plan-section">
            <h2>Trainingspläne</h2>
            <NewTrainingPlanDialog onCreate={handleCreate}/>
            <TrainingPlanList trainingPlans={allTrainingPlans}/>
            <TrainingPlanDetails/>
        </section>
    )
}