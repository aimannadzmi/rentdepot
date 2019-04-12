const router = require("express").Router();
const db = require("../../models");

//   /api/students
router.get("/", (req, res) => {
  db.items.findAll().then(items => {
    res.json(items);
  });
})

router.get("/get", (req, res) => {
  
  db.items.findAll({
    where: {
      itemName: itemName
    }
  }).then(items => {
    res.json(items);
  });
})

router.post("/add", (req, res) => {
  const itemName = req.body.itemName;
  const itemPrice = req.body.itemPrice;
  const itemDescription = req.body.itemDescription;
  const itemLocation = req.body.itemLocation;
  const itemImage = req.body.itemImage;

  console.log("Got item!", itemName, itemPrice, itemLocation, itemDescription, itemImage);

  db.items.create({ 
    itemName: itemName,
    itemPrice: itemPrice,
    itemLocation: itemDescription,
    itemDescription: itemLocation,
    itemImage: itemImage

   }).then((items) => {
    //Created new student!
    
    res.json({ itemReceived: items });
  })

  
});

module.exports = router;
