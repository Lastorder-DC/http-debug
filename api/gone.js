const fs = require("fs");

export default function gone(req, res) {
  res.setHeader('content-type', 'text/html');
  res.status(410).send(fs.readFileSync('410.html', {encoding: 'utf-8', flag: 'r'}));
}
