import React from "react";


export function User({ user, onChange }) {
    return (
        <div className="user">
            <input type="checkbox" />
            <span>{user.type}</span>
            <span className="user__name" >{user.name}</span>
            <span className="user__email">{user.email}</span>
            <span className="user__phone">{user.phone}</span>
            <input
                type="checkbox"
                checked={user.active ? true : false}
                onChange={onChange}
            />
        </div>
    );
}
