// src/services/vendorAgent_service.ts

import axios from 'axios';

export const fetchVendorsFromAI = async (): Promise<any[]> => {
    const prompt = `
        Act as a wedding planner AI agent.
        Research 5 top-rated wedding cateres in Tel Aviv for July 2025.
        For each, provide the following fields:
        - name
        - price_range
        - menu_type
        - reviews
        - website
        - contact
        Return the result as JSON array.
    `;

    const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7,
        },
        {
            headers: {
                Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        }
    );

    const content = response.data.choices[0].messages.content;
    const jsonStart = content.indexOf('[');
    const jsonEnd = content.indexOf(']') +1;
    const jsonText = content.slice(jsonStart, jsonEnd);
    return JSON.parse(jsonText);
}