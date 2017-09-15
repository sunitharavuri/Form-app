const express=require('express');
const router = express.Router();
const Challenge = require('../models/challenges');
const dateFormat = require('date-format');

router.get('/challenges', (req, res, next) => {
    Challenge.find(function (err, challenges) {
        //res.send('challenges');
       // const startDate=res.body.start_date;
        //const endDate=res.body.end_date;
        //var now = new Date();

        //var now =new Date(start_date); 
      
       //Challenge.formattedDate(start_date){
          // return dateFormat('MM-dd-yyyy', start_date);
      // }
        
//    console.log(challenges[0].start_date.getDate());
//    console.log(challenges[0].start_date.getMonth());
//    console.log(challenges[0].start_date.getFullYear());
//var start_date = challenges[0].start_date;
//var tmp = new Date(start_date.getFullYear(), start_date.getMonth(), start_date.getDate());
//dateFormat(tmp, "dddd, mmmm dS, yyyy, h:MM:ss TT");
//dateFormat(tmp, "fullDate");
//console.log(challenges[0].name);/
//challenges[0].start_date = tmp; 

// console.log(tmp)
        res.json(challenges);

    })

});

router.post('/challenge', (req, res, next) => {
    let newChallenge = new Challenge({
        name: req.body.name,
        description: req.body.description,
        priority: req.body.priority,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
    });
    newChallenge.save((err, challenge) => {
        if (err) {
            res.json({ msg: 'failed to add challenge' });
        }
        else {
            res.json({ msg: 'challenge added succesfully' });
        }

    })

});

router.delete('/challenge/:id', (req, res, next) => {
    Challenge.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })


});

module.exports = router;
