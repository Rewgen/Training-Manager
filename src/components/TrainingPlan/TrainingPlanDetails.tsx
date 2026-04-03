

export const TrainingPlanDetails = () => {
    return (
        <div id="training-plan-details">
            <ul id="training-plan-exercises"></ul>
        
            <dialog id="training-plan-add-exercises-dialog">
                
                {/*exercises as buttons*/}
                <div id="training-plan-add-exercises-list"></div>

                <div id="exercise-config" className="hidden">
                    <input type="number" id="sets" placeholder="Sätze" />
                    <input type="number" id="reps" placeholder="Wiederholungen" />
                    <input type="number" id="pause" placeholder="Pause" />
                    <button id="save-exercise" type="submit">Speichern</button>
                </div>
            </dialog>
        </div>
    )

}