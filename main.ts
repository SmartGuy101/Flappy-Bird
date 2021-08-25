namespace SpriteKind {
    export const Background = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    MyPlayer.vy = -60
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Wings) {
        Wings = false
    } else {
        Wings = true
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    MyPlayer.vy = -60
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    MyPlayer.vy = -60
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    MyPlayer.vy = -60
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    MyPlayer.vy = -60
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Lava`, function (sprite, location) {
    game.over(false)
})
let MyPlayer: Sprite = null
let Wings = false
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
Wings = false
game.setDialogFrame(img`
    ..bbbbbbbbbbbbbbbbbbbb..
    .bd111111111111111111db.
    bd1dbbbbbbbbbbbbbbbbd1db
    b1dbbbbbbbbbbbbbbbbbbd1b
    b1bd1111111111111111db1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1b111111111111111111b1b
    b1bd1111111111111111db1b
    bd1bbbbbbbbbbbbbbbbbb1db
    bbd111111111111111111dbb
    .bbbbbbbbbbbbbbbbbbbbbb.
    ..bbbbbbbbbbbbbbbbbbbb..
    `)
game.showLongText("Press \"b\" to enable/disable wings", DialogLayout.Full)
MyPlayer = sprites.create(assets.image`Player-Wings`, SpriteKind.Player)
let mySprite = sprites.create(assets.image`End-Mouth-Open`, SpriteKind.Player)
MyPlayer.ay = 100
MyPlayer.vx = 70
scene.cameraFollowSprite(MyPlayer)
forever(function () {
    if (Wings) {
        MyPlayer.setImage(assets.image`Player-Wings`)
    } else {
        MyPlayer.setImage(assets.image`Player-NoWings`)
    }
})
