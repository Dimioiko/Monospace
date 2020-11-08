import React from "react";
 
 
export function User({ user, onChange }) {
    return (
        <div className="user user-container">
            <div className="user-wrapper">
                <input type="checkbox" />
                <span className="user__type">{user.type}</span>
                <span className="user__name" >{user.name}</span>
                <span className="user__email">{user.email}</span>
                <span className="user__phone">{user.phone}</span>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={user.active ? true : false}
                        onChange={onChange}
                    />
                    <span className="slider round"></span>
                </label>
 
            </div>
 
        </div>
    );
}
 