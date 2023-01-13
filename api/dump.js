export default function dump(req, res) {
  const headers = req.headers;
  res.setHeader('content-type', 'application/json');
  res.status(200).send(JSON.stringify(headers));
}
