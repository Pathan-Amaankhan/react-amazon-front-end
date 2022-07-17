import React from "react";
import classes from "./header.module.css";
import amazon from "../../assets/Amazon_logo.png";

const Index = (props ) => {
    return (
        <header className={classes.header}>
            <img src={amazon} alt="Amazon Logo" width="90" height="30" />
        </header>
    );
}

export default Index;