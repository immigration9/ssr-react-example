import express from 'express'
import renderer from './helper/renderer'

const app = express();

/**
 * will be using public as an asset
 */
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.send(renderer(req));
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
})