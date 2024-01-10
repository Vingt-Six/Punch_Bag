import './LifeBar.css'

function LifeBar(props) {
    return (
        <div>
            <div className='life'>
                <div style={{ width: `${props.vie}%` }} ></div>
            </div>
        </div>
    )
}

export default LifeBar