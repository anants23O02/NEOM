export const fetchUsers = async () => {
    try {
        const res = await fetch("/api/admin/allusers", {
            method: "GET",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch users");
        }

        const data = await res.json(); // Read response only once
        console.log("Fetched Users:", data);
        return data;

        
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};
