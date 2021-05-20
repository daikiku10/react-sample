import {combineReducers} from 'redux'; // 結合するためのもの
import counter from './counter'; // 結合されるもの
import task from './task';

export default combineReducers({counter,task}) //複数ある場合は[,]で区切る