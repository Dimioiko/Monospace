import "./App.css";

import { Users } from "./components/Users";
import { Provider } from "react-redux";

import { store } from "./store/Store";

export function App() {
    return (
        <Provider store={store}>
            <Users />
        </Provider>
    );
}

