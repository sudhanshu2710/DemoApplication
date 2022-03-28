import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authAction } from "../store/auth";
export const Register = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onchangeHandler = (e) => {
    let { name, value } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };
  const formHandler = (e) => {
    e.preventDefault();
    console.log(data);
    fetch(`https://reqres.in/api/register`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json;charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((token) => {
        dispatch(authAction.login(token));
        navigate("/welcome", { state: { ...data } });
      })
      .catch((err) => console.log(err));
    setData({ email: "", password: "" });
  };
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={formHandler}>
        <label>Email</label>
        <input
          type="email"
          value={data.email}
          name="email"
          onChange={onchangeHandler}
          placeholder="User Email"
        ></input>
        <label>Password</label>
        <input
          type="password"
          value={data.password}
          name="password"
          onChange={onchangeHandler}
          placeholder="User Password"
        ></input>
        <button type="submit">Register</button>
      </form>
      <img
        src="https://camo.githubusercontent.com/117d0191569b7e00e69062ce99d26fe9c251dc735c57386b497c75b0b26dda08/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313035393538332f73637265656e73686f74732f343137313336372f636f64696e672d667265616b2e676966"
        alt=""
      />
    </div>
  );
};
