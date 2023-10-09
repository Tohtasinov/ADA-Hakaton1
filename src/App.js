import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import RegistrationPage from "./Components/Registration/RegistrationPage";
import { Login } from "./Components/Login/Login";
import { Registration } from "./Components/Registration/Registrarion";
import MainPage from "./Components/MainPage";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Provider } from "react-redux";
import { store } from "./Components/Redux/store";
import { UserProfile } from "./Components/UserProfile/UserProfile";

const Root = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        path="main"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      />
      <Route path="profile/:id" element={<UserProfile />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Registration />} />
    </Route>
  )
);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Root} />;
    </Provider>
  );
}

export default App;
