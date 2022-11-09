export default function handler(_, res) {
  res.setHeader('content-type', 'text/html');
  res.status(410).send(fs.readFileSync('410.html', {encoding: 'utf-8', flag: 'r'}));
}
