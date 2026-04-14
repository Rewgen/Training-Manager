import { useRef } from "react";


type Props = {
    onCreate : (trainingPlanName : string) => void;
}

export const NewTrainingPlanDialog = ( {onCreate} : Props ) => {

    const dialogRef = useRef<HTMLDialogElement>(null);
    const openDialog = () => dialogRef.current?.showModal();
    const closeDialog = () => dialogRef.current?.close();
    const newPlanNameRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <button id="new-training-plan" onClick={openDialog}>Neuer Trainingsplan</button>
            <dialog id="new-training-plan-dialog" ref={dialogRef}>
                <form onSubmit={(e) => {
                    e.preventDefault(); 
                    if (newPlanNameRef.current?.value) onCreate(newPlanNameRef.current.value);
                    closeDialog(); 
                }}>
                    <h3>Neuer Trainingsplan</h3>
                    <input type="text" id="input-train-plan-name" ref={newPlanNameRef} required/>
                    <button id="save-plan-button" type="submit">Speichern</button>
                </form>
            </dialog>
        </div>
    )
}