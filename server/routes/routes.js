const express = require("express")
const router = express.Router()

router.post("/api/testapi", async (req, res) => {
    const name = req.body
    console.log(req.body);
    res.status(401).send(name)
})

module.exports = router