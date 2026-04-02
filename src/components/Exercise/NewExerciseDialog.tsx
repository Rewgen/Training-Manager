
export const NewExerciseDialog = () => {
    return (
        <dialog id="new-exercise-dialog">
            <form id="add-exercise-container">
                <input type="text" id="add-exercise-name" placeholder="Name der Übung" required/>
                <select id="add-exercise-muscleGroup" defaultValue={""} required>
                    <option value="" disabled hidden>Bitte wählen</option>
                    <option value="Chest">Brust</option>
                    <option value="Back">Rücken</option>
                    <option value="Legs">Beine</option>
                    <option value="Core">Rumpf</option>
                    <option value="Shoulders">Schultern</option>
                    <option value="Arms">Arme</option>
                </select>
                <button type="submit">Absenden</button>
            </form>
        </dialog>
    )
}