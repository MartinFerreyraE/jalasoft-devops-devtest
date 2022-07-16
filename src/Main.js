import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import AppLayout, { RouteWithSubRoutes } from "./components";
import { ContactsOutlined } from "@ant-design/icons";
import { routess } from "./routes";

function Main() {
  const navigate = useNavigate();
  return (
    <AppLayout
      navigate={navigate}
      defaultSelected="contacts"
      appOptions={[
        {
          icon: <ContactsOutlined />,
          label: "Contacts",
          path: "contacts",
        },
      ]}
      appTheme="dark"
      breadcrumbs={[]}
    >
      <BrowserRouter>
      <Routes>
        <Route>
        {routess.map((route) => (
          <RouteWithSubRoutes key={route.path.replace("/", "-")} {...route} />
        ))}
        </Route>
      </Routes>
      </BrowserRouter>
    </AppLayout>
  );
}

export default Main;
