import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME} from '../index'

const initialState = {
    firstName: '',
    secondName: ''
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_FIRST_NAME:
            return {...state, firstName: action.payload};
        case ACTION_CHANGE_SECOND_NAME:
            return {...state, secondName: action.payload};
    }
    return state;
};