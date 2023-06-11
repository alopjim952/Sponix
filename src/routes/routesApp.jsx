import { Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import { Player } from "../components/Player/Player";
import { AuthContext } from "../context/SponixContext";
import { ProtectedRoutes } from "./ProtectedRoutes";

const RoutesApp = () => {
    return ( 
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={
                    <ProtectedRoutes>
                        <Player />
                    </ProtectedRoutes>
                } />
            </Routes>
        </>
    );
}
 
export default RoutesApp;