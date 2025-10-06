import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const fileData = fs.readFileSync(dbPath, 'utf-8');
    const data = JSON.parse(fileData);

    if (req.method === 'GET') {
      res.status(200).json(data.products);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (err) {
    console.error('API Error:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
