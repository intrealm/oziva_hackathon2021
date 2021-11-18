var express = require('express');
var rewardService  = require('../services/rewardService');




var router = express.Router();


router.get('/incomingrewards', async function(req,res,next)
{  
rewardService.updateRewards('arpit','1234567890',10);

});


router.get('/leaderboard', async function(req, res, next) {

  
  let leadersList = await rewardService.getLeaderboard();
      res.render('leaderboard', { title: 'oZiva virtual run leaderboard' ,leaders:leadersList});

    }
  );

module.exports = router;
