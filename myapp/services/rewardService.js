const { MongoClient } = require('mongodb');


const uri = "mongodb+srv://newuser:newpassword@ozivarun.0yawr.mongodb.net/ozivarundb?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const rewardService = {
    updateRewards : async function(phone,name,coins)
    {
        client.connect(
            async err=>
            {
                console.log('raising update rewards');
            let userInfo = await client.db("ozivarundb").collection("userinfo").findOne({'phone':phone});

            console.log(userInfo);

            if(userInfo)
            {
                await client.db("ozivarundb").collection("userinfo").updateOne(userInfo,
                {
                    $set:{count:Number(Number(userInfo.coins)+coins)}
                });
            }
            else 
            {
                await client.db("ozivarundb").collection("userinfo").insertOne({
                    'name':name,'phone':phone,'coins':Number(coins)
                });
            }
        } );
    },
    getLeaderboard : async function() {
        let leadersList = [];
        client.connect(
            async err=>
            {
              let resp  = client.db("ozivarundb").collection("userinfo").find().limit(10).sort( {coin : -1} );
              console.log(await resp.count());
              
              await resp.forEach(element => {
                leadersList.push(element);
                console.log(element);
              });
              console.log(leadersList);
            }
        );
      return leadersList;
    }
  };

module.exports = rewardService;