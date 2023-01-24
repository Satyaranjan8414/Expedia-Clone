import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const PrivateRoute = ({ children }) => {
  let auth = useSelector((state) => state.AuthReducer.isAuth);

  console.log(auth);

  if (!auth) {
    return <Navigate to="/signup" />;
  }

  return children;
};

export default PrivateRoute;
