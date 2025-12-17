export const getCityFromCoordinates = async (lat: number, lon: number): Promise<string> => {
    try {
        const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();
        return data.address.city || data.address.town || data.address.village || "Unknown location";
    }
    catch (error) {
        console.error("Error fetching city from coordinates:", error);
        throw new Error("Failed to fetch city");
    }
    
}
