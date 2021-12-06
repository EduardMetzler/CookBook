const { Router } = require("express");


const User = require("../models/User");
const UserDaten = require("../models/UserDaten");


const auth = require("../middleware/auth.middleware");

const router = Router();





router.get("/loading", auth, async (req, res) => {
  try {
    const userDaten = await UserDaten.find({ owner: req.user.userId });

    console.log( userDaten);

 
    res.json(userDaten[0]);

  } catch (e) {
    res.status(500).json({error:{ message: "Ein Feler ist aufgetreten" }});
  }
});



module.exports = router;
