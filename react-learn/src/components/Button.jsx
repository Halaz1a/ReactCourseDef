import app from "../app.module.css"

function Button({label, onClick}) {
    return <button className={app.add} onClick={onClick}>{label}</button>
}

export default Button