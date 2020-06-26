import React from 'react';

export const NameDialogFormRow = ({ name, selector, children }) => {
    return (
        <label
            key={selector}>
            <span>
                {name}
            </span>
            <div>
                {children}
            </div>
        </label>
    )
}