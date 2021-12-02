const { Router } = require("express");


const User = require("../models/User");

const auth = require("../middleware/auth.middleware");

const router = Router();





router.get("/loading", auth, async (req, res) => {
  try {
    const user = await User.find({ _id: req.user.userId });

    console.log(user);

    res.json({ firstName: user[0].firstName, lastName: user[0].lastName });
  } catch (e) {
    res.status(500).json({error:{ message: "Ein Feler ist aufgetreten" }});
  }
});



module.exports = router;
