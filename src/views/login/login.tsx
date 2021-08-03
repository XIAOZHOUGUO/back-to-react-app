import React, { FormEvent } from "react";
const API = process.env.REACT_APP_API_URL;
export const Login = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    login({ username, password });
  };
  const login = (params: { username: string; password: string }) => {
    fetch(`${API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(res => {
        if (res.ok) {
          console.log("res :>> ", res);
          return res.json();
        }
      })
      .then(res => {
        console.log("res json :>> ", res);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">姓名</label>
          <input type="text" id={"username"} placeholder="admin" />
        </div>
        <div>
          <label htmlFor="password">密码</label>
          <input type="password" placeholder="123456" />
        </div>
        <button type="submit">登录</button>
      </form>
    </>
  );
};
