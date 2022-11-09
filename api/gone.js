import { readFileSync } from 'fs';
import path from 'path';

export default function gone(req, res) {
  const file = path.join(process.cwd(), 'templates', '410.html');
  res.setHeader('content-type', 'text/html');
  res.status(410).send(readFileSync(file, {encoding: 'utf-8', flag: 'r'}));
}
