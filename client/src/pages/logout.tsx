import { useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";

export const Logout: React.FC = () => {
    useEffect(() => {
        const logoutUser = async () => {
            try {
                await fetch("/auth/logout", {
                    method: "POST",
                    credentials: "include", // Ensures the cookie is included and removed
                });

                localStorage.clear(); // Clear any remaining client-side storage
                sessionStorage.clear();
                window.location.href = "/"; // Redirect after logout
            } catch (error) {
                console.error("Logout failed:", error);
            }
        };

        logoutUser();
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <CircularProgress size={60} />
        </Box>
    );
};
