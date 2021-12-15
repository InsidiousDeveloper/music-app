import {combineReducers} from "redux";
import {appReducer} from "./appStore";

export const rootStore = combineReducers({
    app: appReducer
})

export type RootReducer = ReturnType<typeof rootStore>