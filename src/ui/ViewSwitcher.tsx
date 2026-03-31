import type { ViewMode } from "../models/ViewMode.js";

type Props = {
    view : ViewMode;
    onViewChange : (view: ViewMode) => void;
}

export const ViewSwitcher = ( {view, onViewChange} : Props  ) => {
    return (
        <aside>
            <form id="radio-form">
                <label htmlFor="opt-ex">Übungen</label>
                <input 
                    type="radio" 
                    name="view" 
                    id="opt-ex" 
                    value="exercises" 
                    checked={view ==="exercises"}
                    onChange={() => onViewChange("exercises")}
                />
                
                <label htmlFor="opt-plan">Trainingspläne</label>
                <input 
                    type="radio" 
                    name="view" 
                    id="opt-plan" 
                    value="plans"
                    checked={view ==="plans"}
                    onChange={() => onViewChange("plans")}
                />
            </form>
        </aside>
    )
}