import { Boss } from './Boss.js';
import { BossManager } from './BossManager.js';

export class Tests {
  constructor() {
  }

  test_0() {
    let a = 0;
    ////////////////////////
    a += 12;
    ////////////////////////
    console.log(a);
    if (a == 0) return true;
  }

  test_client_onconnection() {
    let bosses_incoming = [new Boss("Boss", Date.now() - 333), new Boss("Boss2", Date.now() + 999999), new Boss()];
    console.log("ss");
    ///////////////////////
    let boss_manager = new BossManager([new Boss("Boss"), new Boss("Boss2")]);
    boss_manager.update_all_bosses(bosses_incoming);
    ////////////////////////
    console.log(boss_manager.bosses);
    boss_manager.display_all_bosses();

  }




}