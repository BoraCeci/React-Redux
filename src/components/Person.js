import { useState } from "react";
import { connect } from "react-redux";
import { nameChange } from "../actions";


const Person = (props) => {
    const [name, setName] = useState('')

    let changeName = (event) => {
        setName (event.target.value)

        props.nameChange(event.target.value)
    }

return (
    <form>
        <h1>My Name Is: {name}</h1>
        <input type="text" onChange={changeName}>
        </input>
    </form>
)
}


const mapStateToProps = (state) => {
    return {

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        nameChange: (text)=> dispatch(nameChange(text))
    }
    
}

export default connect(null, mapStateToProps, 
    mapDispatchToProps) (Person)