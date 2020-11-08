import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { User } from "./User";

const URL = "http://dimitris.users.challenge.dev.monospacelabs.com/users";

export function Users() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [error, setError] = useState(null)

    const toggleActive = async (user) => {
        try {
            const UPDATE_URL = URL + "/" + user.id;
            await fetch(UPDATE_URL, {
                method: "PUT",
                body: JSON.stringify({
                    ...user,
                    active: !user.active,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            setError(false);
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                dispatch({ type: "SET_USERS", payload: data });
                setError(false);
            } catch (error) {
                setError(true);
            }
        })();
    }, []);

    if (!users) <div>Could not found user</div>;

    if (error) <div>Something went wrong</div>;

    return (
        <div className="users">
            {users.map((user) => (
                <User
                    key={user.id}
                    user={user}
                    onChange={() => {
                        dispatch({ type: "TOGGLE_ACTIVE", payload: user.id });
                        toggleActive(user);
                    }}
                />
            ))}
        </div>
    );
}
