import "../App.css"

function Button({label, onClick}) {
    return <button className="add" onClick={onClick}>{label}</button>
}

export default Button