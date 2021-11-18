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
  rewardService.updateRewards(req.body.name,req.body.phone,req.body.coins);
  res.send('ok');
});

router.get('/game', async function(req, res, next) {
  // let leadersList = await rewardService.getLeaderboard();
      res.render('game', { title: 'oZiva virtual run game'});
    }
  );

router.get('/leaderboard', async function(req, res, next) {  
  let leadersList = await rewardService.getLeaderboard();
      res.render('leaderboard', { title: 'oZiva virtual run leaderboard' ,leaders:leadersList});

    }
  );
module.exports = router;