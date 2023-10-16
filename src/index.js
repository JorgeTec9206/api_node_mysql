import app from './app.js'

import {PORT,HOST} from './config.js'

app.listen(PORT, () => {
    console.log("Running server on port:", `${HOST}:${PORT}`)
  })