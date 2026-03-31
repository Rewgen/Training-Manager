import type { TrainingPlan } from "../models/TrainingPlan.js";

export const TrainingPlanList = ( {trainingPlans} : {trainingPlans: TrainingPlan[]} ) => {
    return (
        <div>
            {trainingPlans.map(plan => (
                <ul key={plan.id}>
                    <h3>{plan.name}</h3>
                    <button>Löschen</button>
                    <button>Plan anzeigen</button>
                </ul>
            ))}
        </div>
    )
};