var express = require('express');
const { redirect } = require('express/lib/response')
const Events = require('../models/events');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/result-list', async function (req, res, next) {
  let events = []
  if (req.query.search) {
    events = await Events.find({ destination: req.query.search })
  } else {
    events = await Events.find()
  }
  console.log(events, "------------")
  res.render('resultList', { events });
});

// router.get('/home', function (req, res, next) {
//   res.render('createSathi');
// });

router.get('/home', function (req, res, next) {
  res.render('homepage');
});

router.get('/create-sathi', function (req, res, next) {
  res.render('createSathi')
});
router.post('/save-event', function (req, res, next) {
  const event = new Events({
    names: req.body.names,
    currentLocation: req.body.currentLocation,
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
    gender: req.body.gender,
    destination: req.body.destination,
    startTravelDate: req.body.startTravelDate,
    endTravelDate: req.body.endTravelDate,
    requiredNumber: req.body.requiredNumber,
    itinerary: req.body.itinerary,
    remarks: req.body.remarks
  });



  const promise = event.save();
  promise.then((event) => {

    res.redirect('/result-list');

  });


});

router.get('/result-list', function (req, res, next) {
  res.render('resultList');
});


module.exports = router;
