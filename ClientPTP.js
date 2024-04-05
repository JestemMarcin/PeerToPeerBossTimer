export class ClientPTP {

  constructor(bosses) {
    this.bosses = bosses;
  }

  on_connection(bosses_incoming) {
    for (let boss in this.bosses) {
      if (bosses_incoming[boss].respawn_time != this.bosses[boss].respawn_time && bosses_incoming[boss].respawn_time != 0) {
        if (confirm("do you want to replace current time" + this.bosses[boss].show_respawn_time() + " with incoming with " + bosses_incoming[boss].show_respawn_time())) {
          console.log("replaced");
          this.bosses[boss] = bosses_incoming[boss];
        }
      }
    }
  }

}