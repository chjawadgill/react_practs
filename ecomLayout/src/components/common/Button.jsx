
function Buttoon(props){
    return(
        <button style={{ backgroundColor: props.colore, padding : '10px 20px', border: 'none', color: 'white', cursor: 'pointer' }}>
            {props.value}
        </button>
    )
}

export default Buttoon;