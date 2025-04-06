// src/controllers/vendorAgent_controllers.ts

import { Request, Response } from "express";
import { fetchVendorsFromAI } from "../services/vendorAgent_service";

export const   getVendors = async (req: Request, res: Response) => {
    try {
        const vendors = await fetchVendorsFromAI();
        res.json({ vendors });
    } catch (error){
        console.error('[VendorAgent  Controller Error]', error);
        res.status(500).json({ error: 'Failed to fetch vendors from AI agent' });
    }
};