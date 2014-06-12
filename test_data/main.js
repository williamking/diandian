exports.insert = function(callback){
  var files = ['accounts', 'posts', 'carousels', 'donations'];
  var counter = 0;

  require('../lib/db').getConnection(function(db){
    var handler = function(){
      counter++;
      if (counter == files.length){
        if (callback)
          callback();
      }
    };

    for(var i = 0; i < files.length; i++){
      require('./' + files[i]).insert(db, handler);
    }

  });
};