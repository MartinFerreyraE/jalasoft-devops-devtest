import React from "react";
import { Routes, Navigate, useMatch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../components";

function Contacts({ routes }) {
  const { path } = useMatch();
  return (
    <Routes>
      <Navigate to={`${path}/all`} from={`${path}`} exact />
      {routes.map((route) => {
        return (
          <RouteWithSubRoutes key={route.path.replace("/", "-")} {...route} />
        );
      })}
    </Routes>
  );
}

Contacts.propTypes = {};

export default Contacts;
