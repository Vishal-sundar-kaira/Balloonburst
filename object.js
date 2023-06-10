// Define the Balloon object
var Balloon = me.Sprite.extend({
    init: function (x, y) {
      var image = me.loader.getImage("balloon");
      this._super(me.Sprite, "init", [x, y, { image: image }]);
      this.body.setVelocity(0, -200); // Set the vertical velocity of the balloon
    },
  
    update: function (dt) {
      this.body.update(dt);
      return this._super(me.Sprite, "update", [dt]);
    }
  });
  