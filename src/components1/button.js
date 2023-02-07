import React from "react";
import styles from './style.module.css'
import { getClasses } from './getClasses'
const Button = ({variant, text, img}) =>  {
        const buttonTypes = {
        black: "black",
        blue: 'blue'
        };
    return (
        <>
            <button className={getClasses([
                styles.button,
                styles[`button-${buttonTypes[variant]}`],
                ])}
                type="button"><img src={img} alt="" className={variant === "black" ? styles.displaynone : styles.img}/>{text}</button>
        </>
    )
}
export default Button