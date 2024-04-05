export class BossManager {

  constructor(bosses) {
    this.bosses = bosses;
  }

  display_all_bosses() {
    let boss_container = document.getElementById("BossContainer");
    boss_container.innerHTML = "";
    for (let boss in this.bosses) {
      boss_container.innerHTML += this.bosses[boss].name + "<br>";
    }
  }

  update_all_bosses(bosses_incoming) {
    for (let i in this.bosses) {
      if (bosses_incoming[i].respawn_time != this.bosses[i].respawn_time && bosses_incoming[i].respawn_time != 0) {
        if (confirm("do you want to replace current time" + this.bosses[i].show_respawn_time() + " with incoming with " + bosses_incoming[i].show_respawn_time())) {
          console.log("replaced");
          this.bosses[i] = bosses_incoming[i];
        }
      }
    }
  }

  on_boss_kill_incoming(boss_incoming){
    for(let i in this.bosses){
      if(this.bosses[i].name==boss_incoming.name){
        this.bosses[i]=boss_incoming;
      }
    }
  }

  on_boss_kill_press(boss_name){
    for(let i in this.bosses){
      if(this.bosses[i].name==boss_name){
        this.bosses[i].respawn_time=Date.now();
      }
    }
  }

}