import React from "react";
import styles from "./Card.module.css";
export const Card = (props) => {
  //console.log(props.data);
  return (
    <React.Fragment>
      <div className={styles.main_card}>
        <img src={props.data.avatar} />
        <div className={styles.name}>
          <div>{props.data.first_name}</div>
          <div>{props.data.last_name}</div>
        </div>
        <div>Email: {props.data.email}</div>
      </div>
    </React.Fragment>
  );
};
