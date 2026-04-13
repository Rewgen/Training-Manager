
export const ExerciseFilter = () => {
    return (
        <select defaultValue={"All"} name="exercise-list-filter" id="exercise-list-filter">
            <option value={"All"}>Alle Muskelgruppen</option>
            <option value={"Chest"}>Brust</option>
            <option value={"Back"}>Rücken</option>
            <option value={"Legs"}>Beine</option>
            <option value={"Core"}>Rumpf</option>
            <option value={"Shoulders"}>Schultern</option>
            <option value={"Arms"}>Arme</option>
        </select>
    )
}