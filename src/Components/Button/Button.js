import './Button.css'

function Btn(props) {
    return (
        <div>
            <button onClick={props.taper} >{props.content}</button>
        </div>
    )
}

export default Btn