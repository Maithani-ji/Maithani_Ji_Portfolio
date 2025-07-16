import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Protected pages */}
        {/* <Route element={<RequireAuth />}>
          <Route element={<AuthLayout/>}></Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
