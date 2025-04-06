// src/routes/aiAgents_route.ts

import express from 'express';
import { getVendors } from '../controllers/vendorsAgent_controller';

const router = express.Router();

router.post('/ai/vendors', getVendors);

export default router;