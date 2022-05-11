export const nameChange = (text) => {

    console.log('in Actions', text)

    return{
        type: 'NAME_CHANGE',
        payload: text,

    }
}