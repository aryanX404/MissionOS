import { Navigate } from "react-router-dom";
import { STORAGE_KEYS } from "../../utils/storage";

const ProtectedRoute = ({ children }) => {

    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;