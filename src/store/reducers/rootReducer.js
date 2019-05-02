import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {CombineReducers} from 'redux'

const rootReducer = CombineReducers({
    auth: authReducer,
    project: projectReducer
});

export default rootReducer;