import { connect } from "react-redux"

const FavColor= (props) => {
    return(
        <div>
            <h1>{props.userName}'s favorite color is: </h1>
            <button>Red</button>
            <button>Black</button>
            <button>Blue</button>
            <button>Yellow</button>
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log('in favColor: global state is', state)
    return { userName: state.name}
}

export default connect(mapStateToProps, null) (FavColor)