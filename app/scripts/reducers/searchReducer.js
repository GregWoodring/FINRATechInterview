import axios from 'axios';

const initialState = {
    itemArray: [],
    pendingSearch: false,
    queryString: ''
}

export default function reducer(state = initialState, action) {
    let {type, payload} = action;

    switch(type) {
        case UPDATE_QUERY: {
            return {...state, queryString: payload}
        }
       
        case RECIEVED_ITEM: {
            console.log('fulfilled payload', payload)

            return {...state, itemArray: [...payload], pendingSearch: false}
        }
        default:
            return state;
    }
}

const RECIEVED_ITEM = 'RECIEVED_ITEM';
const UPDATE_QUERY = 'UPDATE_QUERY';

export const setQueryString = query => {
    return {
        type: UPDATE_QUERY,
        payload: query
    }
}

export const setProductData = productArr => {
    
    return {
        type: RECIEVED_ITEM,
        payload: productArr
    }
} 

