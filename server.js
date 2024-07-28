import express from 'express';
import bodyParser from 'body-parser';
import qr from "qr-image"; 
import fs from "fs"; 

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); 
app.post('/generate', (req, res) => {
  const urls = req.body.url;

  var qr_svg = qr.image(urls);
  qr_svg.pipe(fs.createWriteStream("public/qrimg.png")); 

  fs.writeFile("public/URL.txt", urls, (err) => { 
    if (err) {
      res.json({ success: false });
      throw err;
    }
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
