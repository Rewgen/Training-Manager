import type { TrainingPlan } from "../models/TrainingPlan.js";

// Components
import { TrainingPlanList } from "./TrainingPlan/TrainingPlanList";
import { NewTrainingPlanDialog } from "./TrainingPlan/NewTrainingPlanDialog.js";
import { TrainingPlanDetails } from "./TrainingPlan/TrainingPlanDetails.js";

type Props = {
    allTrainingPlans : TrainingPlan[]
}

export const TrainingPlanSection = ({allTrainingPlans} : Props)  => {
    return (
        <section id="training-plan-section">
            <h2>Trainingspläne</h2>
            <button id="new-training-plan">Neuer Trainingsplan</button>
            <TrainingPlanList trainingPlans={allTrainingPlans}/>
            <NewTrainingPlanDialog/>
            <TrainingPlanDetails/>
        </section>
    )
}