const nameReducer = (state = {name: 'Bora'}, action) => {
    switch (action.type) {
        case 'NAME_CHANGE':
            alert ('name changing')
            return {...state, name: action.payload}
            
        
    
        default:
            return state
    }
}

export default nameReducer