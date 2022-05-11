import { connect } from "react-redux"

const Feelings = (props) => {
    return(
        <div>
            <h1>{props.userName} is feeling: </h1>
            <button>Happy</button>
            <button>Sad</button>
            <button>Mad</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('in favColor: global state is', state)
    return { userName: state.name}
}

export default connect(mapStateToProps, null) (Feelings)