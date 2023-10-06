import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Login from "../pages/Login";
import CreateAcc from "../pages/CreateAcc";
import ProtectedRoute from "./RootLayout/ProtectedRouts";
import ToduApp2 from "../pages/ToduApp2";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />} />
            <Route path="createaccount" element={<CreateAcc />} />
            <Route path="dashbord/admin" element={
                <ProtectedRoute allowedRoles={"admin"}>
                    <ToduApp2/>
                </ProtectedRoute>} />
        </Route>
    )
)