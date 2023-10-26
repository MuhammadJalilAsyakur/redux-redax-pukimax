import axios from "axios";

const initialValue = {
    todos: [],
    isLoading: false,
    error: ""
}


function todoReducers(state = initialValue, action) {
    switch (action.type) {
        case "START_FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "SUCCES_GET_DATA":
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        default: return state;
    }
}

function startFetching() {
    return {
        type: "START_FETCHING"
    }
}


function succesGetData(data) {
    return {
        type: "SUCCES_GET_DATA",
        payload: data
    }
}


export function getTodo() {
    return async function (dispatch) {
        dispatch(startFetching())

        const { data } = await axios("https://6524c49cea560a22a4ea1424.mockapi.io/todo")

        dispatch(succesGetData(data))
    }
}

export const addTodo = (newTodo) => async (dispatch) => {
    dispatch(startFetching())

    await axios.post("https://6524c49cea560a22a4ea1424.mockapi.io/todo", newTodo)

    dispatch(getTodo())
}

export default todoReducers