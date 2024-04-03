export class ClientPTP {

  constructor() {
    this.xd = null;
  }

  on_connection(bosses_incoming) {
    for (boss in bosses) {
      if (bosses_incoming['boss'].respawn_time != bosses['boss'].respawn_time) {
        if (confirm()) {
          confirm("do you want to replace current time" + bosses['boss'] + show_respawn_time() + " with incoming with " + bosses_incoming['boss'].show_respawn_time())
        }

      }
    }
  }

}