class Boss {
  constructor(name) {
    this.name = name;
    this.respawn_time = 0;
    this.respawned_by = "null";
    this.img_url = null;
  }

}
bosses = [new Boss("Boss"), new Boss("Boss2")]

function display_all_bosses(bosses) {
  boss_container = document.getElementById("BossContainer");
  for (boss in bosses) {
    boss_container.innerHTML += bosses[boss].name + "<br>";
  }
}
  display_all_bosses(bosses);