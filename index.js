var config = {
    type: Phaser.AUTO,
    width: 320,
    height: 200,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var sprite;
var follow = false;
var px, py;

function preload ()
{
    this.load.image('link', 'assets/link.png');
}

function create ()
{
    sprite = this.add.image(160, 100, 'link');
    this.input.on('pointerdown', function () {
        follow = true;
    });
    this.input.on('pointerup', function () {
        follow = false;
    });
    this.input.on('pointermove', function (pointer) {
        px = pointer.x;
        py = pointer.y;
    });
}

function update ()
{
    if (follow) {
        sprite.x = px;
        sprite.y = py;
    }
}
