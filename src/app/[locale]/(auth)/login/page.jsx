"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Titles from "../../_components/PageSettings/TitlePage/Titles";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Вызов функции signIn из next-auth для обработки входа
    const result = await signIn("credentials", {
      redirect: false, // Отключение перенаправления
      username,
      password,
    });

    if (result.error) {
      alert("Unable to sign in: " + result.error);
    } else {
      window.location.href = "/dashboard"; // Перенаправление на страницу после входа
    }
  };

  return (
    <section className="min-h-[calc(100dvh-14rem)] py-[2.5rem]">
      <div className="container">
        <Titles title="Авторизация" subTitle="Подзаголовок" />
        <div className="flex items-center justify-center ">
          <div className="w-4/12 mx-auto">
            <form onSubmit={handleSubmit} className="form">
              <div className="mb-5">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full h-10 bg-white dark:bg-black  border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
                />
              </div>
              <button type="submit" className=" dark:text-white my-4 mx-auto block transition-all duration-200 hover:underline">
                <button>Login</button>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
