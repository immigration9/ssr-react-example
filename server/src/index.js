import 'babel-polyfill'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helper/renderer'
import createStore from './helper/createStore'

const app = express();

/**
 * will be using public as an asset
 */
app.use(express.static('public'));
app.get('*', (req, res) => {
  const store = createStore();

  // Some logic to initialize
  // and load data into the store
  matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData() : null;
  })

  res.send(renderer(req, store));
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
})