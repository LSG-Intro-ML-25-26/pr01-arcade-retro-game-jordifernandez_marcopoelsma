function setWalls () {
    wallList = [
    assets.tile`mesa L`,
    assets.tile`mesaR`,
    assets.tile`mesa`,
    assets.tile`miMosaico7`,
    assets.tile`isla de cocina`,
    assets.tile`miMosaico`,
    assets.tile`transparency16`,
    assets.tile`turquesa`
    ]
    for (let wall of wallList) {
        tileUtil.setWalls(wall, true)
    }
}
function ghostAbilitiesList () {
    if (currentGhostAbility == "Oni") {
        flashingGhost = flashingGhost * 0.33
        animation.runImageAnimation(
        ghost,
        assets.animation`ghostAnimation`,
        flashingGhost,
        true
        )
    } else if (currentGhostAbility == "Demon") {
        maxAtkCooldown = minAtkCooldown
        minAtkCooldown = minAtkCooldown * 0.5
    } else if (currentGhostAbility == "Revenant") {
        ghostSpeed = ghostSpeed * 0.5
        ghostSightSpeed = ghostSightSpeed * 1.5
    } else if (currentGhostAbility == "Deogen") {
        looseTrailTime = maxHuntTime
        wallHacks = true
        ghostSightSpeed = ghostSightSpeed * 1.3
        ghostCloseSpeed = ghostCloseSpeed * 0.5
        sightRange = 999999999999
        ghostSight = true
    } else if (currentGhostAbility == "Yurei") {
        sightRange = sightRange * 0.2
        looseTrailTime = looseTrailTime * 0.4
    } else if (currentGhostAbility == "Mimic") {
        minMimicCooldown = 4000
        maxMimicCooldown = 6000
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(ghostReadyToHunt) && !(openedMenu)) {
        openedMenu = true
        controller.moveSprite(mainCharacter, 0, 0)
        inputGhostType = miniMenu.createMenuFromArray([
        miniMenu.createMenuItem(ghostList[0], skullList[0]),
        miniMenu.createMenuItem(ghostList[1], skullList[1]),
        miniMenu.createMenuItem(ghostList[2], skullList[2]),
        miniMenu.createMenuItem(ghostList[3], skullList[3]),
        miniMenu.createMenuItem(ghostList[4], skullList[4]),
        miniMenu.createMenuItem(ghostList[5], skullList[5])
        ])
        inputGhostType.setTitle("INPUT GHOST TYPE")
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 150)
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 100)
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Padding, 5)
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 3)
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 0)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 6)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 6)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 9)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 1)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 0)
        tiles.placeOnTile(inputGhostType, tiles.getTileLocation(scene.cameraProperty(CameraProperty.X) / 16, scene.cameraProperty(CameraProperty.Y) / 16))
        inputGhostType.onButtonPressed(controller.A, function (selection, selectedIndex) {
            immortalPlayer = true
            if (tiles.tileIs(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), ghostSpawnRoom)) {
                if (selectedIndex == ghostList.indexOf(currentGhostType)) {
                    changeHuntOrColorState = true
                    win = true
                }
            }
            gameOver()
        })
        inputGhostType.onButtonPressed(controller.B, function (selection, selectedIndex) {
            openedMenu = false
            inputGhostType.close()
            controller.moveSprite(mainCharacter, playerVelocity, playerVelocity)
        })
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`escondite`, function (sprite, location) {
    if (!(wallHacks)) {
        ghostSight = false
    }
    mainCharacter.setImage(assets.image`hidden`)
})
function noSelectMenu () {
    tiles.placeOnTile(ghostReveal, tiles.getTileLocation(scene.cameraProperty(CameraProperty.X) / 16 - 2, scene.cameraProperty(CameraProperty.Y) / 16 - 1))
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 120)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 70)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Padding, 5)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 3)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 6)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Foreground, 16)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 9)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Border, 1)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.BorderColor, 0)
}
function gameOver () {
    controller.moveSprite(mainCharacter, 0, 0)
    changeHuntOrColorState = true
    if (openedMenu) {
        inputGhostType.close()
    }
    ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[ghostList.indexOf(currentGhostType)], skullList[ghostList.indexOf(currentGhostType)]), miniMenu.createMenuItem("Room", ghostSpawnRoom)])
    ghostReveal.setTitle("The Ghost was:")
    noSelectMenu()
    ghostReveal.onButtonPressed(controller.A, function (selection, selectedIndex) {
        game.gameOver(win)
    })
    ghostReveal.onButtonPressed(controller.B, function (selection, selectedIndex) {
        game.gameOver(win)
    })
}
function setBaseStats () {
    playerVelocity = 100
    controller.moveSprite(mainCharacter, playerVelocity, playerVelocity)
    maxAtkCooldown = 5000
    minAtkCooldown = 10000
    maxHuntTime = 15000
    minHuntTime = 20000
    looseTrailTime = 5000
    ghostSpeed = 100
    ghostSightSpeed = ghostSpeed
    ghostCloseSpeed = ghostSpeed
    wallHacks = false
    sightRange = 160
    timeBeforeAtkAfterLightsOff = 2000
    immunitySpawnTime = 2000
    flashingGhost = 300
    animation.runImageAnimation(
    ghost,
    assets.animation`ghostAnimation`,
    flashingGhost,
    true
    )
}
function setGhostType () {
    ghostList = [
    "Demon",
    "Deogen",
    "Mimic",
    "Oni",
    "Revenant",
    "Yurei"
    ]
    skullList = [
    assets.image`DemonSkull`,
    assets.image`DeogenSkull`,
    assets.image`MimicSkull`,
    assets.image`OniSkull`,
    assets.image`RevenantSkull`,
    assets.image`YureiSkull`
    ]
    currentGhostAbility = ghostList._pickRandom()
    currentGhostType = currentGhostAbility
    ghostAbilitiesList()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(immortalPlayer)) {
        gameOver()
    }
})
let yTile = 0
let xTile = 0
let ghostInfo = false
let isHouseFloorTile = false
let canHunt = false
let immunitySpawnTime = 0
let timeBeforeAtkAfterLightsOff = 0
let minHuntTime = 0
let ghostReveal: miniMenu.MenuSprite = null
let playerVelocity = 0
let currentGhostType = ""
let immortalPlayer = false
let skullList: Image[] = []
let ghostList: string[] = []
let inputGhostType: miniMenu.MenuSprite = null
let ghostReadyToHunt = false
let maxMimicCooldown = 0
let minMimicCooldown = 0
let ghostSight = false
let sightRange = 0
let ghostCloseSpeed = 0
let wallHacks = false
let maxHuntTime = 0
let looseTrailTime = 0
let ghostSightSpeed = 0
let ghostSpeed = 0
let minAtkCooldown = 0
let maxAtkCooldown = 0
let flashingGhost = 0
let currentGhostAbility = ""
let wallList: Image[] = []
let openedMenu = false
let win = false
let changeHuntOrColorState = false
let ghostSpawnRoom: Image = null
let ghost: Sprite = null
let mainCharacter: Sprite = null
music.play(music.createSong(assets.song`laOdiaElMili`), music.PlaybackMode.LoopingInBackground)
music.setVolume(32)
tiles.setCurrentTilemap(tilemap`TangleWood`)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mainCharacter = sprites.create(assets.image`nena-front`, SpriteKind.Player)
tiles.placeOnRandomTile(mainCharacter, assets.tile`myTile3`)
scene.cameraFollowSprite(mainCharacter)
game.showLongText("FIND THE GHOST ROOM AND GUESS THE GHOST TYPE!", DialogLayout.Bottom)
ghost = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
ghost.setScale(0, ScaleAnchor.Middle)
let floorTiles = [assets.tile`miMosaico2`, assets.tile`moqueta`, assets.tile`moqueta morada`]
let hideTiles = [assets.tile`escondite`]
let door = assets.tile`door`
ghostSpawnRoom = floorTiles._pickRandom()
tiles.placeOnRandomTile(ghost, ghostSpawnRoom)
setWalls()
setBaseStats()
setGhostType()
changeHuntOrColorState = false
let ghostHunt = false
ghostHunt = false
win = false
openedMenu = false
forever(function () {
    if (currentGhostType == "Mimic") {
        while (true) {
            currentGhostAbility = ghostList._pickRandom()
            if (currentGhostAbility != currentGhostType) {
                setBaseStats()
                ghostAbilitiesList()
                break;
            }
        }
        pause(randint(minMimicCooldown, maxMimicCooldown))
    } else {
        pause(9999999999)
    }
})
forever(function () {
    if (sight.isInSight(
    ghost,
    mainCharacter,
    sightRange,
    wallHacks
    )) {
        ghostSight = true
        pause(looseTrailTime)
        ghostSight = false
    }
})
forever(function () {
    if (characterAnimations.matchesRule(mainCharacter, characterAnimations.rule(Predicate.Moving))) {
        characterAnimations.loopFrames(
        mainCharacter,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . . f e 4 d d d d 4 e f e . . 
            . . f e f 2 2 2 2 e d d 4 e . . 
            . . e 4 f 2 2 2 2 e d d e . . . 
            . . . . f 4 4 5 5 f e e . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f e 4 d d d d 4 e f . . . 
            . . e 4 d d e 2 2 2 2 f e f . . 
            . . . e d d e 2 2 2 2 f 4 e . . 
            . . . . e e f 5 5 4 4 f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingDown)
        )
        characterAnimations.loopFrames(
        mainCharacter,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f f 2 f e f . . 
            . . f f f 2 f e e 2 2 f f f . . 
            . . f e 2 f f e e 2 f e e f . . 
            . f f e f f e e e f e e e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . . e f f f f f f f f 4 e . . 
            . . . 4 f 2 2 2 2 2 e d d 4 . . 
            . . . e f f f f f f e e 4 . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . . f f f f 2 2 f f f f . . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e f 2 f f f 2 f 2 e f . . 
            . . f f f 2 2 e e f 2 f f f . . 
            . . f e e f 2 e e f f 2 e f . . 
            . f f e e e f e e e f f e f f . 
            . f f e e e e e e e e e e f f . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f e . . . 
            . . 4 d d e 2 2 2 2 2 f 4 . . . 
            . . . 4 e e f f f f f f e . . . 
            . . . . . . . . . f f f . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingUp)
        )
        characterAnimations.loopFrames(
        mainCharacter,
        [img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . f f . . . . . . 
            . . . . . . f f e e f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `,img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . f f . . . . . . 
            . . . . . . f f e e f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight)
        )
        characterAnimations.loopFrames(
        mainCharacter,
        [img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . f f . . . . . . . . 
            . . . . f f e e f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . f f . . . . . . . . 
            . . . . f f e e f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft)
        )
    } else {
        mainCharacter.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
forever(function () {
    if (canHunt) {
        if (!(changeHuntOrColorState)) {
            tileUtil.setWalls(door, false)
            color.setPalette(
            color.originalPalette
            )
            ghostReadyToHunt = false
            ghostHunt = false
            if (!(wallHacks)) {
                ghostSight = false
            }
            ghost.setScale(0, ScaleAnchor.Middle)
            pause(randint(minAtkCooldown, maxAtkCooldown))
        }
        if (!(changeHuntOrColorState)) {
            tileUtil.setWalls(door, true)
            ghostReadyToHunt = true
            color.setPalette(
            color.Adventure
            )
            if (openedMenu) {
                openedMenu = false
                inputGhostType.close()
                controller.moveSprite(mainCharacter, playerVelocity, playerVelocity)
            }
            pause(timeBeforeAtkAfterLightsOff)
            tiles.placeOnRandomTile(ghost, ghostSpawnRoom)
            ghostHunt = true
            ghost.changeScale(1, ScaleAnchor.Middle)
            immortalPlayer = true
            pause(immunitySpawnTime)
            immortalPlayer = false
            pause(randint(minHuntTime, maxHuntTime))
        }
    }
})
forever(function () {
    isHouseFloorTile = false
    for (let tile of floorTiles) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), tile)) {
            isHouseFloorTile = true
            break;
        }
    }
    if (!(isHouseFloorTile)) {
        for (let tile of hideTiles) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), tile)) {
                isHouseFloorTile = true
                break;
            }
        }
    }
    if (isHouseFloorTile) {
        canHunt = true
    } else {
        canHunt = false
    }
})
forever(function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`myTile3`)) {
        if (ghostInfo) {
            ghostReveal.close()
        }
        ghostInfo = false
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Demon`)) {
        if (!(ghostInfo)) {
            ghostInfo = true
            if (openedMenu) {
                inputGhostType.close()
            }
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[0], skullList[0]), miniMenu.createMenuItem("Attacks more frequently!")])
            noSelectMenu()
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 200)
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Deogen`)) {
        if (!(ghostInfo)) {
            ghostInfo = true
            if (openedMenu) {
                inputGhostType.close()
            }
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[1], skullList[1]), miniMenu.createMenuItem("You can't hide, run!")])
            noSelectMenu()
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 200)
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Mimic`)) {
        if (!(ghostInfo)) {
            ghostInfo = true
            if (openedMenu) {
                inputGhostType.close()
            }
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[2], skullList[2]), miniMenu.createMenuItem("Mimics others abilities!")])
            noSelectMenu()
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 200)
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Oni`)) {
        if (!(ghostInfo)) {
            ghostInfo = true
            if (openedMenu) {
                inputGhostType.close()
            }
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[3], skullList[3]), miniMenu.createMenuItem("Glinks more frequently!")])
            noSelectMenu()
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 200)
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Revenant`)) {
        if (!(ghostInfo)) {
            ghostInfo = true
            if (openedMenu) {
                inputGhostType.close()
            }
            ghostReveal = miniMenu.createMenuFromArray([
            miniMenu.createMenuItem(ghostList[4], skullList[4]),
            miniMenu.createMenuItem("Slow at base"),
            miniMenu.createMenuItem("Fast when chasing!")
            ])
            noSelectMenu()
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 200)
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Yurei`)) {
        if (!(ghostInfo)) {
            ghostInfo = true
            if (openedMenu) {
                inputGhostType.close()
            }
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[5], skullList[5]), miniMenu.createMenuItem("Can only see closely!")])
            noSelectMenu()
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 200)
        }
    }
})
game.onUpdateInterval(300, function () {
    if (ghostHunt == true) {
        if (ghostSight) {
            if (spriteutils.distanceBetween(mainCharacter, ghost) < 48) {
                scene.followPath(ghost, scene.aStar(tiles.locationOfSprite(ghost), tiles.locationOfSprite(mainCharacter)), ghostCloseSpeed)
            } else {
                scene.followPath(ghost, scene.aStar(tiles.locationOfSprite(ghost), tiles.locationOfSprite(mainCharacter)), ghostSightSpeed)
            }
        } else {
            while (true) {
                let index = 0
                xTile = randint(0, tiles.tilemapRows())
                yTile = randint(0, tiles.tilemapRows())
                if (tiles.tileAtLocationEquals(tiles.getTileLocation(xTile, yTile), floorTiles[index])) {
                    scene.followPath(ghost, scene.aStar(tiles.locationOfSprite(ghost), tiles.getTileLocation(xTile, yTile)), ghostSpeed)
                    break;
                }
            }
        }
    }
})
