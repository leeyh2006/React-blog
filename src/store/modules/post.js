import {createAction,handleActions} from 'redux-actions';
import {fromJS, Map} from 'immutable';
import {pender} from "redux-pender";

import * as api from '../../lib/api';

//action types
const GET_POST = 'post/GET_POST';
const REMOVE_POST='post/REMOVE_POST';

//action creators
export const getPost = createAction(GET_POST,api.getPost);
export const removePost =createAction(REMOVE_POST,api.removePost);

//initialState
const initialState = Map({
    post:Map({})
});

//reducer
export default handleActions({
    ...pender({
        type:GET_POST,
        onSuccess:(state,action)=>{
            console.log('GET_POST' ,action.payload);
            const {data: post}= action.payload;
            return state.set('post',fromJS(post));
        }
    })
},initialState)
