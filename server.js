const express = require('express')

const app = express()

app.get('/', (req, res) => res.json({
  message: 'Hello World to the Contact Keeper API!'
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on port ${5000} 🚀`))