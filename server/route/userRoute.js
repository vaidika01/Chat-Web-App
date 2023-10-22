const { signUp, signIn, getallusers } = require("../controller/userController");
const router = require("express").Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.get("/allusers/:id", getallusers);

module.exports = router;
