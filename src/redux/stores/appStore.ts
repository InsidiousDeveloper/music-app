import {APP_LOADING} from "../types";

interface AppState {
    loading: boolean
}

interface AppAction {
    type: String
    payload: boolean
}

const initialState: AppState = {
    loading: false
}

export const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case APP_LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }
}