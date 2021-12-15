import {APP_LOADING, FULL_SIDEBAR} from "../types";

interface AppState {
    loading: boolean
    fullSidebar: boolean
}

interface AppAction {
    type: String
    payload: boolean
}

const initialState: AppState = {
    loading: false,
    fullSidebar: false
}

export const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case APP_LOADING:
            return {...state, loading: action.payload}
        case FULL_SIDEBAR:
            return {...state, fullSidebar: action.payload}
        default:
            return state
    }
}

