const express = require("express");
const Hospital = require("../models/hospital");

const router = express.Router();

router.post("/hospital", async (req, res) => {
  const hosp = new Hospital(req.body);
  try {
    const city = hosp.city;
    const dh = await Hospital.findOne({ city });
    if (dh) {
      return res.send("hospital already exits");
    } else {
      await hosp.save();
      console.log({ hosp });
      res.send({ hosp });
    }
  } catch (e) {
    throw new Error();
  }
});

// router.get('/hospitals', async (req, res) =>{

//     const city = req.bady;
//     try{
//         const city = hosp.city;
//         const dh = await Hospital.findOne({city});
//         if(!dh) {
//             return res.send('hospital does not exits');
//         } else{
//             return res.send({dh});
//         }
//     } catch(e) {
//         throw new Error;
//     }
// });

module.exports = router;
