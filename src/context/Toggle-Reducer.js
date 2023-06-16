const toggleReducer = (state, action) => {
    if(action.type === 'false') {
        return {...state, isToggled: 'false'}
    }
    if(action.type === 'true') {
        return {...state, isToggled: 'true'}
    }
}

export default toggleReducer;