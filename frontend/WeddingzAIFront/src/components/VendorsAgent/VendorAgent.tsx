import React, { useState } from "react";
import axios from "axios";

interface Vendor {
    name: string;
    price_range: string;
    menu_type: string;
    reviews: string;
    website: string;
    contact: string;
}

interface VendorResponse {
    vendors: Vendor[]
}

const VendorAgent: React.FC = () => {
    const [vendors, setVendors] = useState<Vendor[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchVendors = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post<VendorResponse>('http://localhost:4000/api/ai/vendors');
            setVendors(response.data.vendors);
        } catch (err) {
            console.error(err);
            setError('Failed to load vendors. Please try Again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{padding:"20px", maxWidth: "800px", margin: "auto"}}>
            <h2>Wedding Caterer AI Finder</h2>
            <button onClick={fetchVendors} disabled={loading}>
                {loading ? 'Finding caterers...' : 'Find Cateres'}
            </button>

            {error && <p style={{ color: "red", marginTop: "10px"}}>{error}</p>}

            <ul style={{ marginTop: "20px"}}>
                {vendors.map((vendor, index) => (
                    <li key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px"}}>
                        <h4>{vendor.name}</h4>
                        <p><strong>Price:</strong> {vendor.price_range}</p>
                        <p><strong>Menu:</strong> {vendor.menu_type}</p>
                        <p><strong>Reviews:</strong> {vendor.reviews}</p>
                        <p><strong>Contact:</strong> {vendor.contact}</p>
                        <p>
                            <strong>Website:</strong>
                            <a href={vendor.website} target="_blank" rel="noopener noreferrer">
                                {vendor.website}
                            </a>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VendorAgent;