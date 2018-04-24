import { combineReducers } from 'redux';
import paises from './paisesReducer';
import noticias from "./noticiasReducer";

export default combineReducers({
    paises,
    noticias
});