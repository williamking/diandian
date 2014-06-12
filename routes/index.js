var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var db = req.db;

  var carousels, posts, donations;
  var counter = 0;
  var callback = function(){
    counter++;
    if (counter == 3){
      res.render('index', {
        title: '首页',
        showDonationScroller: true,
        carousels: carousels,
        posts: posts,
        donations: donations
      });
    }
  };

  db.collection('carousels', function(err, col){
    col.find().toArray(function(err, docs){
      carousels = docs;
      callback();
    });
  });

  db.collection('donations', function(err, col){
    col.find({}, {
      sort: {
        date: -1
      },
      limit: 15
    }).toArray(function(err, docs){
      donations = docs;
      callback();
    });
  });

  db.collection('posts', function(err, col){
    col.find({}, {
      sort: {
        createdAt: -1
      },
      limit: 3,
      fields: {
        content: 0
      }
    }).toArray(function(err, docs){
      posts = docs;
      callback();
    });
  });

});

module.exports = router;
