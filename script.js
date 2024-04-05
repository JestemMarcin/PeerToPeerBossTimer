import { Boss } from './Boss.js';
import { ClientPTP } from './ClientPTP.js';
import { ServerPTP } from './ServerPTP.js';
import { Tests } from './Tests.js';

function display_all_bosses(bosses) {
  let boss_container = document.getElementById("BossContainer");
  for (let boss in bosses) {
    boss_container.innerHTML += bosses[boss].name + "<br>";
  }
}

var bosses = [new Boss("Boss"), new Boss("Boss2")];

var client = new ClientPTP(bosses);
var server = new ServerPTP(bosses);



display_all_bosses(bosses);
// TESTS

var tests = new Tests();
tests.test_0();
tests.test_client_onconnection();

