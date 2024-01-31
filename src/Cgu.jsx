import React, { useState } from 'react';
function Cgu() {
    const [isTermAccepted, setIsTermAccepted] = useState(false);
    return (
        <div>
            <Checkbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
            <button disabled={!isTermAccepted}>Valider</button>
        </div>
    );
}
function Checkbox({ checked, onCheck }) {
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={e => onCheck(e.target.checked)} />
            <label>J'accepte les CGU</label>
        </div>
    );
}
export default Cgu;