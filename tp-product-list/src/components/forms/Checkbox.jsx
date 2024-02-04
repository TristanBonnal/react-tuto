export default function Checkbox({checked, onChange, label}) {
    return <div className="form-check my-3">
        <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)} className="form-check-input"/>
        <label className="form-check-label">{label}</label>
    </div>

}