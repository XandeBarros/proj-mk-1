const mongoose = require('mongoose');

const mongoDB_url = 'mongodb://127.0.0.1:27017/gymdb';

/*
sudo rm -rf /tmp/mongod-27017.sock
sudo systemctl start mongod

https://www.mongodb.com/docs/v3.4/reference/mongo-shell/ referencias

https://medium.com/@skhans/how-to-build-a-basic-node-js-crud-app-with-mongoose-and-mongodb-3e958a36001d
*/

mongoose.connect(mongoDB_url, {}).
  catch(error => console.log(error));

mongoose.connection.on('connected', res => {
  console.log('Conectado ao banco de dados');
});

mongoose.connection.on('error', res => {
  console.log('Erro ao conectar ao banco de dados');
  // console.log(res)
});
