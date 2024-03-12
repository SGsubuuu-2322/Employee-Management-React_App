// import React from 'react'

const Login = () => {
  return (
    <div className="register-container w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-primary border shadow mb-4 p-3 rounded-md">
        Login Form
      </h1>
      <form className="register-card w-1/4 bg-secondary border shadow p-5">
        <div className="input-container flex flex-col">
          <label htmlFor="name">Username: </label>
          <input
            type="text"
            name="username"
            className="border w-[80%] mx-auto mb-2"
          />
        </div>
        <div className="input-container flex flex-col">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            className="border w-[80%] mx-auto mb-2"
          />
        </div>

        <div className="input-container flex flex-col">
          <label htmlFor="name">Password: </label>
          <input
            type="password"
            name="password1"
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

export default Login;
