import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout, { RouteWithSubRoutes } from "./components";
import { ContactsOutlined } from "@ant-design/icons";
import { routess } from "./routes";

function Main({ history }) {
  return (
    <AppLayout
      history={history}
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
