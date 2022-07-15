import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuthentication } from "../../hooks";

export function PrivateRoute({ children, ...leftover }) {
  const token = useAuthentication();
  return (
    <Route
      {...leftover}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Navigate to={{ pathname: "/signin", state: { from: location } }} />
        )
      }
    />
  );
}
