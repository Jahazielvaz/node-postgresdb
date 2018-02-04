var pg = require('pg');

// STUDY THIS SECTION

//NEW WAY OF CONNECTING

var cn = {
  database: 'node_postdb',
  host: 'localhost',
  user: 'mac',
  password: 'Peca1110'
};

var pool = new pg.Pool(cn);

pool.connect(function(err, client, done){
  client.query(`insert into users (name, userid, password) VALUES ("$1, $2, $3", {'Carmen', 'carmax23', '214432'})`, function(err, result){
    console.log(err);
    console.log(result.rows);
    done();
  });
});


pool.connect(function(err, client, done){
  client.query(`select * from users`, function(err, result){
    console.log(err);
    console.log(result.rows);
    done();
  });

});




pool.end();


//DEPRECIATED. DON'T USE ANY MORE
// pg.connect('postgres://jazzy:Peca1110@localhost/users', function(err, client, done){
//   client.query(`select * from users`, function(err, result){
//     console.log(result.rows);
//     done();
//     pg.end();
//   });
// });
