var express = require('express');
var rewardService  = require('../services/rewardService');




var router = express.Router();

router.get('/game', async function (req,resp,next)
{
  resp.render('game',{title : 'hello'});
})

router.post('/incomingrewards', async function(req,res,next)
{  
  console.log(req.body);
  console.log('raising update rewards');
  rewardService.updateRewards(req.name,req.phone,req.coins);
  res.send('ok');
});


router.get('/leaderboard', async function(req, res, next) {  
  let leadersList = await rewardService.getLeaderboard();
      res.render('leaderboard', { title: 'oZiva virtual run leaderboard' ,leaders:leadersList});

    }
  );

module.exports = router;
