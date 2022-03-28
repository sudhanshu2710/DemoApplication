import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Card } from "./Card";
import styles from "./Welcome.module.css";
export const Welcome = () => {
  const auth = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  //console.log("auth", auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.isLoggedIn == false) {
      navigate("/login");
    }
  }, [auth]);

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=2`, {
      method: "GET",
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setData([...data.data]);
      })
      .catch((err) => console.log(err));
  }, []);
  //  console.log(data);
  return (
    <div>
      <div className={styles.heading}>Here is the list of users</div>
      <div className={styles.card_container}>
        {data.map((elem, index) => (
          <Card key={index} data={elem} />
        ))}
      </div>
    </div>
  );
};
