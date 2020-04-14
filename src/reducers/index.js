import { combineReducers } from 'redux';
import SampleReducer from "./sampleReducer";
import LoaderReducer from "./loaderReducer";
const rootReducer = combineReducers({ 
    SampleReducer,
    LoaderReducer
});

export default rootReducer;