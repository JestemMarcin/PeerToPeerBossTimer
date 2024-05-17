export class BossManager {

  constructor(bosses) {
    this.bosses = bosses; // table of all bosses withrespawn times in format [Boss, Boss, Boss] Boss = {name: "Boss", respawn_time: Date, killed_by: "nickname"} 
    this.peer;  // peerjs.com
    this.killed_by = "Unnamed"; // nickname idk if I will use this


  }

  // temporary function to display all bosses
  display_all_bosses() {
    let boss_container = document.getElementById("BossContainer");
    boss_container.innerHTML = "";
    for (let boss in this.bosses) {
      boss_container.innerHTML += this.bosses[boss].name + "<br>";
    }
  }

  // update all bosses from incoming array and if display time is diffrent ask to replace boss
  update_all_bosses(bosses_incoming) {
    for (let i in this.bosses) {
      if (bosses_incoming[i].kill_time != this.bosses[i].kill_time && bosses_incoming[i].kill_time != 0) {
        if (confirm("do you want to replace current time" + this.bosses[i].get_respawn_time() + " with incoming with " + bosses_incoming[i].get_respawn_time())) {
          console.log("replaced");
          this.bosses[i] = bosses_incoming[i];
        }
      }
    }
  }

  //event when peer send "boss kill data", update boss respawn time
  on_boss_kill_incoming(boss_incoming) {
    for (let i in this.bosses) {
      if (this.bosses[i].name == boss_incoming.name) {
        this.bosses[i] = boss_incoming;
      }
    }
  }

  //event when button "boss is killed" is pressed, update respawn time of boss and send it to peer
  on_boss_kill_press(boss_name) {
    for (let i in this.bosses) {
      if (this.bosses[i].name == boss_name) {
        this.bosses[i].kill_time = Date.now();
        this.bosses[i].killed_by = this.killed_by;
        this.send_boss_kill_data(this.bosses[i]);
      }
    }
  }

  ///////////////////////////PEERS//////////////////////////////

  //send boss kill data to all conections established with peers
  send_boss_kill_data(boss) {
    data_packet = { type: 'boss_kill', content: boss };
    this.peer._connections.forEach(function(v, k) { v[0].send(data_packet.stringify()); });
  }


  peer_server() {

    var peer = new Peer("boss_timser_o120d6");
    this.peer = peer;

    //checking error of peer
    peer.on('error', function(error) {
      // check if id is taken
      /*if (error.type = 'unavalible_id') {
        console.log("zajęte id");
      }*/

      alert("client błąd" + error.type)
      peer.destroy();
      this.peer_client();

    });

    // event when another peer is connecting to us
    peer.on('connection', function(con) {

      // data send by con.send("string") from all clients
      con.on('data', function(data) {
        data = JSON.parse(data);

        // execute actions based on incoming data
        switch (data.type) {
          case 'boss_kill':
            this.on_boss_kill_incoming(data.content);
            this.send_boss_kill_data(data.content);
            break;


        }
      });

      console.log(con);
    });
  }

  peer_client() {

    var peer = new Peer("boss_timser_o120d6");
    this.peer = peer;

    // event on error
    peer.on('error', function(error) {

      alert("client błąd" + error.type);
      peer.destroy();
      this.peer_server();

    });

    // event on peer connected to server
    peer.on('open', function(id) {
      // make connection to peer
      conn = peer.connect("boss_timer_o120d6");
      ////////////////////////////////////////////////////////
      conn.on('open', function() {
        // Receive messages
        conn.on('data', function(data) {
          // execute actions based on incoming data
          switch (data[0]) {
            case 'boss_kill':
              this.on_boss_kill_incoming(data[1]);
              break;
          }
        });
      });
    });

  }



}