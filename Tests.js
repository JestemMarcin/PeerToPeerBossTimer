import { Boss } from './Boss.js';
import { ClientPTP } from './ClientPTP.js';
import { ServerPTP } from './ServerPTP.js';

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

    ///////////////////////
    let client = new ClientPTP([new Boss("Boss"), new Boss("Boss2")]);
    client.on_connection(bosses_incoming);
    ////////////////////////


  }




}