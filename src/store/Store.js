import { createStore } from "redux";

const initialState = {
    users: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
            };
        case "TOGGLE_ACTIVE":
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.payload)
                        return { ...user, active: !user.active };
                    else return user;
                }),
            };
        default:
            return state;
    }
};

export const store = createStore(reducer, initialState);
