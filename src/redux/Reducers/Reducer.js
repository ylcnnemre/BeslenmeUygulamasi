const initialState={

    login : false
}

const Reducer=(state=initialState,action)=>{

    switch (action.type) {
        case "Login":
            return {...state,login:action.payload}

        default:
            return state
    }
}


export {
    Reducer
}