import "./Pertemuan-5/assets/tailwind.css";
import React, { Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import NotFound from "./components/NotFound";
// import ErrorPage from "./pages/error/ErrorPage";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import Loading from "./components/Loading";

//  ==== Admin

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Users = React.lazy(() => import("./pages/Users"));
const Notes = React.lazy(() => import("./pages/Notes"));
const Product2 = React.lazy(() => import("./pages/Product2"));
const Product = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

const NotFound = React.lazy(() => import("./components/NotFound"));
const ErrorPage = React.lazy(() => import("./pages/error/ErrorPage"));

//  ==== Auth

const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

// ==== Guest

const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const Home = React.lazy(() => import("./pages/guest/Home"));
const MemberCheck = React.lazy(() => import("./pages/guest/MemberCheck"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/product2" element={<Product2 />} />
          {/* <Route path="/error/:errorCode" element={<ErrorPage />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/member-check" element={<MemberCheck />} />
        </Route>

        <Route path="/error/:errorCode" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
