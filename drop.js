function Drop() {
  this.x = random(width); // give drops a random width location
  this.y = random(-500, -50); // drops starts off the screen
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20); // map len from 10 to 20
  this.yspeed = map(this.z, 0, 20, 1, 20); // map speed from 1 to 20

  this.fall = () => {
    this.y += this.yspeed;
    this.x += this.yspeed / 6; // wind

    // the closer the drops are, the gravity gets higher
    let grav = map(this.z, 0, 20, 0, 0.2);
    this.yspeed = this.yspeed + grav;

    if(this.y > height) {
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }

    if(this.x > width) {
      this.x = random(-200, -100);
    }
  }

  this.show = () => {
    let thick = map(this.z, 0, 20, 1, 3);
    strokeWeight(thick);
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len);
  }
}
