import React from 'react';
import s from "./active-label.module.css";

export interface ActiveLabelProps {
    children: React.ReactNode;
}
console.log(s)
export default function StatusLabel({children}: ActiveLabelProps) {
    return (
        <span className={s.label}>{children}</span>
    );
};

