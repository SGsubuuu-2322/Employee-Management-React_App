// import React from 'react'

import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const allUsers = localStorage.getItem("allUsers");

  const onSubmit = (data) => {
    if (data.password1 === data.password2) {
      if (allUsers === null) {
        localStorage.setItem("allUsers", JSON.stringify([data]));
      } else {
        const users = JSON.parse(allUsers);
        users.push(data);
        localStorage.setItem("allUsers", JSON.stringify(users));
      }
    } else {
      alert("Passwords do not match");
    }
    reset();
  };

  return (
    <div className="register-container w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary border shadow mb-4 p-3 rounded-md">
        Registration Form
      </h1>
      <form
        className="register-card w-1/4 bg-secondary border shadow p-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-container flex flex-col">
          <label htmlFor="name">Name: </label>
          <input
            {...register("name")}
            type="text"
            name="name"
            className="border w-[80%] mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name">Username: </label>
          <input
            {...register("username")}
            type="text"
            name="username"
            className="border w-[80%] mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="email">Email: </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            className="border w-[80%] mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name">Designation: </label>
          <input
            {...register("designation")}
            type="text"
            name="designation"
            className="border w-[80%] mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name">Password: </label>
          <input
            {...register("password1")}
            type="password"
            name="password1"
            className="border w-[80%] mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="name">Re-Enter Password: </label>
          <input
            {...register("password2")}
            type="password"
            name="password2"
            className="border w-[80%] mx-auto mb-2"
          />
        </div>

        <button className="px-3 py-2 border rounded-lg bg-primary w-full mt-6 text-white font-semibold hover:scale-105">
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default Register;
