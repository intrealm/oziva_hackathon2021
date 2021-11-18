var express = require('express');
var rewardService  = require('../services/rewardService');




var router = express.Router();


router.post('/incomingrewards', async function(req,res,next)
{  
  const paylaod = JSON.parse(req.body);
rewardService.updateRewards(payload.name,payload.phone,payload.coins);

});


router.get('/leaderboard', async function(req, res, next) {

  
  let leadersList = await rewardService.getLeaderboard();
      res.render('leaderboard', { title: 'oZiva virtual run leaderboard' ,leaders:leadersList});

    }
  );

module.exports = router;
