import React, {useState,ChangeEventHandler } from 'react';
import classes from "./Input.module.css";
const Input: React.FC<{error: string, type:string, name:string, id:string, placeholder:string, onChange:ChangeEventHandler<HTMLInputElement>, value:string, label:string }> =(props) => {
    const [focused, setFocused] = useState(false);
    const getBorderColor = () => {
        if (props.error) {
        return "red";
        } 
        if (focused) {
        return "#ccc";
        } else {
        return "#ccc";
        }
    };
    return (
    <div className={classes.wrapperInput}>
        <label htmlFor={props.id} className={classes.label}>
        {props.label}
        </label>
        <input
            className={classes.input}
            style={{
            borderColor: getBorderColor(),
            }}
            type={props.type}
            required
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            onFocus={() => {
            setFocused(true);
            }}
            onBlur={() => {
            setFocused(false);
            }}
        />
      {props.error && <div className={classes.error}>{props.error}</div>}
    </div>)
}

export default Input;