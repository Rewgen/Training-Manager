export const loadExercises = async function() {
    const response = await fetch("../../src/data/exercises.json");
    const data = await response.json();
    return data
};