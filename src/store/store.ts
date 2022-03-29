import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import {postAPI} from "../services/postService";

const rootReducer = combineReducers({
    user: userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
        
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']