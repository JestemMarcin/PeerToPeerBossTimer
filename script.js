import { Boss } from './Boss.js';
import { ClientPTP } from './ClientPTP.js';
import { ServerPTP } from './ServerPTP.js';


function display_all_bosses(bosses) {
  let boss_container = document.getElementById("BossContainer");
  for (let boss in bosses) {
    boss_container.innerHTML += bosses[boss].name + "<br>";
  }
}

var bosses = [new Boss("Boss"), new Boss("Boss2")]



display_all_bosses(bosses);

