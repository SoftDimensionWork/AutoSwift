const express = require("express")
const router = express.Router()

router.post("/api/testapi", async (req, res) => {
  const name = req.body
  console.log(req.body);
  res.status(401).send(name)
})

router.get("/api/hello", async (req, res) => {
  const code = 200;
  res.status(code).send({
    code, message: "Hello World"
  })
})

module.exports = router