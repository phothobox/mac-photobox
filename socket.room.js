var users = [];
var latestData;

module.exports = function (io) {
  io.on('connection', function (socket) {
    users.push(socket.id);
    if (socket.id !== users[0]) {
      io.to(socket.id).emit('refresh', latestData);
    }
  /*2016/12/11 start*/
  /*SOURCE: http://www.atmarkit.co.jp/ait/articles/1607/01/news027_2.html */
 
    var room = '';
    var name = '';

        // roomへの入室は、「socket.join(room名)」
    socket.on('client_to_server_join', function(data) {
        room = data.value;
        socket.join(room);
    });
    // S05. client_to_serverイベント・データを受信する
    socket.on('client_to_server', function(data) {
        // S06. server_to_clientイベント・データを送信する
        io.to(room).emit('server_to_client', {value : data.value});
    });
    // S07. client_to_server_broadcastイベント・データを受信し、送信元以外に送信する
    socket.on('client_to_server_broadcast', function(data) {
        socket.broadcast.to(room).emit('server_to_client', {value : data.value});
    });
    // S08. client_to_server_personalイベント・データを受信し、送信元のみに送信する
    socket.on('client_to_server_personal', function(data) {
        var id = socket.id;
        name = data.value;
        var personalMessage = "あなたは、" + name + "さんとして入室しました。"
        io.to(id).emit('server_to_client', {value : personalMessage});
    });
    // S09. dicconnectイベントを受信し、退出メッセージを送信する
    socket.on('disconnect', function() {
        if (name == '') {
            console.log("未入室のまま、どこかへ去っていきました。");
        } else {
            var endMessage = name + "さんが退出しました。"
            io.to(room).emit('server_to_client', {value : endMessage});
        }
    });
 
/*2016/12/11 end*/
    console.log(users);

    // Update New User
    socket.on('update-user', function (data, id) {
      id[id].emit('refresh', data);
    });

    // Remove disconnected users
    socket.on('disconnect', function (data) {
      var index = users.indexOf(socket.id);
      if (index !== -1) {
        users.splice(index, 1);
      }
    });

    // CANVAS EVENTS =========================================================

    socket.on('path-created', function (data) {
      latestData = data;
      socket.broadcast.emit('path-created', data);
    });

    // Remove Obj
    socket.on('remove', function (data) {
      latestData = data;
      socket.broadcast.emit('remove', data);
    });

    // Add Obj
    socket.on('add', function (data) {
      latestData = data;
      socket.broadcast.emit('add', data);
    });

    // Refresh All
    socket.on('refresh', function (data) {
      latestData = data;
      socket.broadcast.emit('refresh', data);
    });

      //  ReSync All
    socket.on('resync', function (data) {
      latestData = data;
      socket.broadcast.emit('resync', data);
    });
  });
};

