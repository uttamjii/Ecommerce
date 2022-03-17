import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate,Routes} from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {

  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <>
      {!loading && (
        <Route {...rest} render={(props) => {
          if (!isAuthenticated) {
            return <Navigate to="/login" />
          }
          return (<Component {...props} />)
        }} />
      )}
    </>
  );
};

export default ProtectedRoute;
