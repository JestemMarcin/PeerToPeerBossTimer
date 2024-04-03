export class Boss {
  constructor(name) {
    this.name = name;
    this.respawn_time = 0; //Date.now();
    this.respawned_by = "null";
    this.img_url = null;
  }

  show_respawn_time() { // return string of time
    return new Date(this.respawn_time).toTimeString();
  }

}
