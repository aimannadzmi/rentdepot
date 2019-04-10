const router = require("express").Router();
const db = require("../../models");

//   /api/students
router.get("/", (req, res) => {
  db.items.findAll().then(items => {
    res.json(items);
  });
})

router.post("/add", (req, res) => {
  const itemName = req.body.itemName;
  const itemPrice = req.body.itemPrice;
  const itemDescription = req.body.itemDescription;
  const itemLocation = req.body.itemLocation;
  const itemImage = req.body.itemImage;

  console.log("Got student!", student);

  db.items.create({ 
    itemName: itemName,
    itemName: itemPrice,
    itemName: itemDescription,
    itemName: itemLocation,
    itemName: itemImage,

   }).then(() => {
    //Created new student!
    
    res.json({ itemReceived: student });
  })

  
});

module.exports = router;
