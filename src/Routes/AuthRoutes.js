import Home from "../Components/Home";
import UserProfile from "../Components/UserProfile";

export const AuthRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/user-profile/:id",
    element: UserProfile,
  },
];
