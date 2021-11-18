var express = require('express');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://newuser:newpassword@ozivarun.0yawr.mongodb.net/ozivarundb?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/leaderboard', async function(req, res, next) {

  client.connect(
    async err=>
    {
      let resp  = client.db("ozivarundb").collection("userinfo").find().limit(10).sort( {coin : -1} );
      console.log(await resp.count());
      let leaders = [];
      await   resp.forEach(element => {
        leaders.push(element);
        console.log(element);
      });
      console.log(leaders);

      res.render('leaderboard', { title: 'oZiva virtual run leaderboard' ,leaders});

    }
  );

  
});


module.exports = router;
