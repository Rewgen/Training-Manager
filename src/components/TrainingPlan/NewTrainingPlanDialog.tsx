

export const NewTrainingPlanDialog = () => {
    return (
        <dialog id="new-training-plan-dialog">
            <form>
                <h3>Neuer Trainingsplan</h3>
                <input type="text" id="input-train-plan-name" required/>
                <button id="save-plan-button" type="submit">Speichern</button>
            </form>
        </dialog>
    )
}