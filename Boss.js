export class Boss {


  constructor(name, respawn_time) {
    this.name = name;//timestamp np. Date.now();
    this.respawned_by = "null";
    this.img_url = null;

    if(respawn_time!=undefined)
      this.respawn_time=respawn_time;
    else{
      this.respawn_time=0;
    }
  }

  show_respawn_time() { // return string of time
    return new Date(this.respawn_time).toTimeString();
  }

}
