const router = require("express").Router();
const db = require("../../models");

// get all listings
router.get("/get", (req, res) => {
  db.items.findAll().then(items => {
    res.json(items);
  });
})

// get specific listing
router.get("/get/search/:itemName", (req, res) => {
  console.log("searching")
  db.items.findAll({
    where: {
      itemName: req.params.itemName
    }
  }).then(items => {
    res.json(items);
  });
})

// get user's listings
router.get("/get/myprofile/:username", (req, res) => {
  console.log("user profile append item hit")
  db.items.findAll({
    where: {
      username: req.params.username
    }
  }).then(items => {
    res.json(items);
  });
  console.log("item appended")


})


router.post("/add", (req, res) => {
  const username = req.body.username;
  const itemName = req.body.itemName;
  const itemPrice = req.body.itemPrice;
  const itemDescription = req.body.itemDescription;
  const itemLocation = req.body.itemLocation;
  const itemImage = req.body.itemImage;

  console.log("Got item!", itemName, itemPrice, itemLocation, itemDescription, itemImage);

  db.items.create({
    username: username, 
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
