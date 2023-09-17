import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout/RootLayout";
import Login from "../pages/Login";
import CreateAcc from "../pages/CreateAcc";
import TodoApp from "../pages/TodoApp";
import ProtectedRoute from "./RootLayout/ProtectedRouts";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />} />
            <Route path="createaccount" element={<CreateAcc />} />
            <Route path="/todo" element={
                <ProtectedRoute allowedRoles={"admin"}>
                    <TodoApp />
                </ProtectedRoute>} />
        </Route>
    )
)