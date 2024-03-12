// import React from 'react'

const UserProfile = () => {
  return (
    <div className="w-full h-full bg-zinc-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-primary mb-5">User_Profile</h1>
      <div className="user-card w-1/2 bg-secondary border shadow p-6">
        <div className="w-full h-1/4">
          <div className="image w-2/12 h-full bg-secondary mx-auto">
            <img
              src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
              alt="user image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="details w-full h-3/4 bg-secondary mt-4 flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-primary">
            Name:{" "}
            <span className="text-xl font-medium text-zinc-400">John Doe</span>
          </h2>
          <h3 className="text-2xl font-semibold text-primary">
            Email:{" "}
            <span className="text-xl font-medium text-zinc-400">
              abc@gmail.com
            </span>{" "}
          </h3>
          <h3 className="text-2xl font-semibold text-primary">
            Designation:{" "}
            <span className="text-xl font-medium text-zinc-400">
              Software Developer
            </span>
          </h3>

          <p className="text-xl font-normal text-primary mt-4 tracking">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            explicabo, vero aliquid eveniet accusamus dolore labore deserunt
            animi minima voluptas? Debitis culpa numquam animi ullam nulla
            incidunt aspernatur doloremque aliquam nihil saepe cum adipisci
            eveniet hic inventore, voluptates esse reiciendis minus amet vel,
            excepturi ut aut corporis? Delectus, voluptas! Libero.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;