import { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';

// db.json のパスを取得
const dbPath = path.join(process.cwd(), 'db.json');

export default function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // JSONファイル読み込み
    const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

    if (req.method === 'GET') {
      // GET /api/products → 全件取得
      res.status(200).json(data.products);
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}
