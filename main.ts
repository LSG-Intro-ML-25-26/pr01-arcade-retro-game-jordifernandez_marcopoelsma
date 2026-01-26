function ghostAbilitiesList () {
    if (currentGhostAbility == "Oni") {
        flashingGhost = flashingGhost * 0.2
        animation.runImageAnimation(
        ghost,
        assets.animation`ghostAnimation`,
        flashingGhost,
        true
        )
    } else if (currentGhostAbility == "Demon") {
        maxAtkCooldown = minAtkCooldown
        minAtkCooldown = minAtkCooldown * 0
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
function setMap () {
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
    setUtilTiles()
}
function setUtilTiles () {
    floorTiles = [
    assets.tile`miMosaico2`,
    assets.tile`moqueta`,
    assets.tile`moqueta morada`,
    assets.tile`bathroom`,
    assets.tile`floor1`,
    assets.tile`moqueta1`,
    assets.tile`suelo3`,
    assets.tile`floor2`,
    assets.tile`noTextureFloor`,
    assets.tile`noTextureDifferentFloor`,
    assets.tile`moqueta2`,
    assets.tile`myTile4`,
    assets.tile`floor4`
    ]
    otherHouseTilescantSpawn = [assets.tile`mesa L`, assets.tile`mesaR`, assets.tile`openDoorNOSPAWN`]
    hideTiles = [assets.tile`hideLeft`, assets.tile`hideDown`, assets.tile`hideUp`]
    openDoor = assets.tile`myTile7`
    closedDoor = assets.tile`doorClose`
    wallList = [
    assets.tile`myTile2`,
    assets.tile`outsideWall`,
    assets.tile`mesa`,
    assets.tile`miMosaico7`,
    assets.tile`isla de cocina`,
    assets.tile`miMosaico`,
    assets.tile`transparency16`,
    assets.tile`white`,
    assets.tile`noTextureFurniture`,
    assets.tile`noTextureWall`
    ]
    for (let wall of wallList) {
        tileUtil.setWalls(wall, true)
    }
}
function setPlayerSpawnAndCam () {
    mainCharacter = sprites.create(assets.image`nena-front`, SpriteKind.Player)
    tiles.placeOnRandomTile(mainCharacter, assets.tile`myTile3`)
    scene.cameraFollowSprite(mainCharacter)
}
function noSelectMenu () {
    ghostReveal.setFrame(img`
        ..bbabbaabbaabbaabbbbb..
        .bddbaddbaddbaddbabbddb.
        addddbaddbaddbaddbadddda
        addddbbaabbaabbaabbdddda
        abddbccccccccccccccbddba
        bbabccccccccccccccccbbab
        babbccccccccccccccccbadb
        abdaccccccccccccccccadda
        addaccccccccccccccccadba
        bdabccccccccccccccccbbab
        babbccccccccccccccccbadb
        abdaccccccccccccccccadda
        addaccccccccccccccccadba
        bdabccccccccccccccccbbab
        babbccccccccccccccccbadb
        abdaccccccccccccccccadda
        addaccccccccccccccccadba
        bdabccccccccccccccccbbab
        babbccccccccccccccccbabb
        abddbccccccccccccccbddba
        addddbbaabbaabbaabbdddda
        addddabddabddabddabdddda
        .addbbabddabddabddabdda.
        ..aaabbaabbaabbaabbaaa..
        `)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 160)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 60)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 2)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 11)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 13)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Foreground, 16)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    ghostReveal.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Background, 11)
    ghostReveal.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
}
function setGhostStats () {
    maxAtkCooldown = 5000 * difficulty
    minAtkCooldown = 10000 * difficulty
    maxHuntTime = 15000 * difficulty
    minHuntTime = 20000 * difficulty
    looseTrailTime = 5000 * difficulty
    ghostSpeed = 100 * difficulty
    ghostSightSpeed = ghostSpeed
    ghostCloseSpeed = ghostSpeed
    wallHacks = false
    sightRange = 160 * difficulty
    flashingGhost = 300
    animation.runImageAnimation(
    ghost,
    assets.animation`ghostAnimation`,
    flashingGhost,
    true
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(ghostReadyToHunt) && !(openedMenu) && !(openOtherMenu) && !(infoDisplayed)) {
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
        inputGhostType.setFrame(img`
            ..................................................................
            ............fff........fff.............fff..............ffff......
            ...........fddbf......fbdbf...........fbdbf............fbddf......
            ...........fddbbf.....fdddffff........fdddffff...fff..ffddbff.....
            ...........fddddffffffbdddbddbffffffffbdddbddbffffddffddddddf.....
            ...fff....fdddddfddddddddbbddddddddddddddbbddddddfdddddbccddf.....
            .fffddf..fddffffddddddddddbbddddddddddddddbbdddddffbddbbddff......
            .fdbddfffddfffdddfffffbdddbddbffffffffbdddbddbfffefddccbddf.......
            .fdddcddddffeffffeeeeefbdbfddfeeeeeeeefbdbfddfeeeefffcddddf.......
            .fbddcddddfeeeeeeeeeeeefffffffeeeeeeeeefffffffeeeeeeefdddddf......
            ..ffdbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddf.....
            ...fddbcddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfff..
            ....fddccffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddf.
            ....fdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddddf.
            ...fddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbbf.
            ...fddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdfddbf..
            ...ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddfff...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
            ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
            .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
            .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
            .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
            ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fbddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fdddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fddbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbff..
            ..ffbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddddbf.
            .fbddbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddddf.
            .fdddddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbddbddbf.
            .fbdddddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbbbbff..
            ..ffbddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddddf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddbf...
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ....fddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddf....
            ...fffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffff...
            ..fbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffddf...
            .fbbddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbddf...
            .fddddfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdddf....
            .fddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffccddf....
            ..fffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddcbddf...
            .....fddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbbbdff..
            ......fdddddfeeeeeeefffffffeeeeeeeeefffffffeeeeeeeeeeeefddddcddbf.
            .......fddddcfffeeeefddfbdbfeeeeeeeefddfbdbfeeeeeffffeffddddcdddf.
            .......fddbccddfefffbddbdddbffffffffbddbdddbfffffdddfffddfffddbdf.
            ......ffddbbddbffdddddbbddddddddddddddbbddddddddddffffddf..fddfff.
            .....fddccbdddddfddddddbbddddddddddddddbbddddddddfdddddf....fff...
            .....fddddddffddffffbddbdddbffffffffbddbdddbffffffddddf...........
            .....ffbddff..fff...ffffdddf........ffffdddf.....fbbddf...........
            ......fddbf............fbdbf...........fbdbf......fbddf...........
            ......ffff..............fff.............fff........fff............
            ..................................................................
            `)
        inputGhostType.setTitle("INPUT GHOST TYPE")
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 180)
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 110)
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 3)
        inputGhostType.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 0)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.BorderColor, 11)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 11)
        inputGhostType.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 13)
        inputGhostType.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        inputGhostType.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (canHunt) {
                if (tiles.tileIs(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), ghostSpawnRoom)) {
                    if (selectedIndex == ghostList.indexOf(currentGhostType)) {
                        win = true
                    }
                }
                gameOver2()
            }
        })
        inputGhostType.onButtonPressed(controller.B, function (selection, selectedIndex) {
            openedMenu = false
            inputGhostType.close()
            controller.moveSprite(mainCharacter, playerVelocity, playerVelocity)
        })
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(openedMenu) && !(openOtherMenu) && !(infoDisplayed)) {
        if (incenseCount > 0) {
            incenseCount = incenseCount - 1
            info.setLife(incenseCount)
            immortalPlayer = true
            ghostSight = false
            incenseState = true
            incense = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            incense.setPosition(mainCharacter.x, mainCharacter.y)
            animation.runImageAnimation(
            incense,
            assets.animation`incienso quemado`,
            incenseDuration / 6,
            false
            )
            incense.z = -1
            pause(incenseDuration)
            immortalPlayer = false
            incenseState = false
        }
    }
})
function setDifficulty () {
    if (!(isDifficultySetted)) {
        openOtherMenu = true
        controller.moveSprite(mainCharacter, 0, 0)
        setDifficultyMenu = miniMenu.createMenuFromArray([miniMenu.createMenuItem("Hard"), miniMenu.createMenuItem("Normal"), miniMenu.createMenuItem("Easy")])
        setDifficultyMenu.setTitle("SET DIFFICULTY")
        setDifficultyMenu.setFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            cb11111111111111111111bc
            ccd111111111111111111dc.
            .ccd1111111111111111dcc.
            ..ccbd111111111111dbcc..
            ...cccccccccccccccccc...
            ...cccccccccccccccc.....
            ........................
            `)
        setDifficultyMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 105)
        setDifficultyMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 64)
        setDifficultyMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 1)
        setDifficultyMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Alignment, 0)
        setDifficultyMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Alignment, 1)
        setDifficultyMenu.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
        setDifficultyMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 6)
        setDifficultyMenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 13)
        setDifficultyMenu.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        setDifficultyMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
            if (selection == "Hard") {
                difficulty = 1.1
                setPlayerStats()
                incenseCount = 0
                for (let wall2 of hideTiles) {
                    tileUtil.setWalls(wall2, true)
                    tileUtil.coverAllTiles(wall2, assets.tile`miMosaico`)
                }
            } else if (selection == "Normal") {
                difficulty = 1
                setPlayerStats()
                incenseCount = 1
            } else if (selection == "Easy") {
                difficulty = 0.9
                setPlayerStats()
                incenseCount = 2
            }
            info.setLife(incenseCount)
            setGhostStats()
            setGhostType()
            isDifficultySetted = true
            openOtherMenu = false
            controller.moveSprite(mainCharacter, playerVelocity, playerVelocity)
            setDifficultyMenu.close()
        })
        setDifficultyMenu.onButtonPressed(controller.B, function (selection, selectedIndex) {
            openOtherMenu = false
            controller.moveSprite(mainCharacter, playerVelocity, playerVelocity)
            setDifficultyMenu.close()
        })
        while (openOtherMenu) {
            pause(1000)
        }
        done = true
        pause(1500)
        done = false
    }
}
function setGhost () {
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
    ghostSpawnRoom = floorTiles._pickRandom()
}
function setStates () {
    changeHuntOrColorState = false
    ghostHunt = false
    win = false
    incenseState = false
    openedMenu = false
    isDifficultySetted = false
    isHouseFloorTile = false
    gameOver = false
    difficulty = 1
}
function setIncense () {
    spriteutils.setLifeImage(assets.tile`incenseNoBackground`)
    incense = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnRandomTile(incense, assets.tile`incenseBurning`)
    animation.runImageAnimation(
    incense,
    assets.animation`incienso quemado`,
    incenseDuration / 6,
    true
    )
    incense.z = -1
}
info.onLifeZero(function () {
    info.changeLifeBy(-1)
})
function setSpriteUtils () {
    setPlayerSpawnAndCam()
    setOtherSpriteUtils()
    setIncense()
    setGhost()
    setStates()
    setGhostStats()
    setGhostType()
    setPlayerStats()
    setDifficultySprite()
}
function gameOver2 () {
    color.setPalette(
    color.originalPalette
    )
    infoDisplayed = true
    gameOver = true
    immortalPlayer = true
    incenseState = true
    changeHuntOrColorState = true
    canHunt = false
    controller.moveSprite(mainCharacter, 0, 0)
    ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[ghostList.indexOf(currentGhostType)], skullList[ghostList.indexOf(currentGhostType)]), miniMenu.createMenuItem("Room", ghostSpawnRoom)])
    ghostReveal.setTitle("The Ghost was:")
    noSelectMenu()
    ghostReveal.onButtonPressed(controller.A, function (selection, selectedIndex) {
        ghostReveal.close()
        game.gameOver(win)
    })
    ghostReveal.onButtonPressed(controller.B, function (selection, selectedIndex) {
        ghostReveal.close()
        game.gameOver(win)
    })
}
function setPlayerStats () {
    playerVelocity = 100 / difficulty
    controller.moveSprite(mainCharacter, playerVelocity, playerVelocity)
    incenseCount = 1
    info.setLife(incenseCount)
    incenseDuration = 3000 / difficulty
    immunitySpawnTime = 1000 / difficulty
    timeBeforeAtkAfterLightsOff = 2000 / difficulty
    roamToHideTileChance = 10 / difficulty
}
function setOtherSpriteUtils () {
    ghostDirection = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    difficultyNPC = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
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
function setDifficultySprite () {
    animation.runImageAnimation(
    difficultyNPC,
    assets.animation`difficulty`,
    500,
    true
    )
    tiles.placeOnRandomTile(difficultyNPC, sprites.castle.tileDarkGrass2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(immortalPlayer) && !(incenseState)) {
        gameOver2()
    }
})
let lostTrail = false
let hiding = false
let randomTile = 0
let random = 0
let generatedPath = false
let difficultyNPC: Sprite = null
let ghostDirection: Sprite = null
let roamToHideTileChance = 0
let timeBeforeAtkAfterLightsOff = 0
let immunitySpawnTime = 0
let gameOver = false
let isHouseFloorTile = false
let ghostHunt = false
let changeHuntOrColorState = false
let done = false
let setDifficultyMenu: miniMenu.MenuSprite = null
let isDifficultySetted = false
let incenseDuration = 0
let incense: Sprite = null
let incenseState = false
let immortalPlayer = false
let incenseCount = 0
let playerVelocity = 0
let win = false
let currentGhostType = ""
let ghostSpawnRoom: Image = null
let canHunt = false
let skullList: Image[] = []
let ghostList: string[] = []
let inputGhostType: miniMenu.MenuSprite = null
let infoDisplayed = false
let openOtherMenu = false
let openedMenu = false
let ghostReadyToHunt = false
let minHuntTime = 0
let difficulty = 0
let ghostReveal: miniMenu.MenuSprite = null
let mainCharacter: Sprite = null
let wallList: Image[] = []
let closedDoor: Image = null
let openDoor: Image = null
let hideTiles: Image[] = []
let otherHouseTilescantSpawn: Image[] = []
let floorTiles: Image[] = []
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
let ghost: Sprite = null
let flashingGhost = 0
let currentGhostAbility = ""
setMap()
setSpriteUtils()
forever(function () {
    if (ghostReadyToHunt) {
        if (!(ghostSight)) {
            if (!(generatedPath)) {
                random = randint(0, roamToHideTileChance)
                if (random == 0) {
                    randomTile = randint(0, hideTiles.length)
                } else {
                    randomTile = randint(0, floorTiles.length)
                }
                tiles.placeOnRandomTile(ghostDirection, floorTiles[randomTile])
                generatedPath = true
            } else {
                scene.followPath(ghost, scene.aStar(tiles.locationOfSprite(ghost), tiles.locationOfSprite(ghostDirection)), ghostSpeed)
                pause(300)
                if (spriteutils.distanceBetween(ghost, ghostDirection) < 3) {
                    generatedPath = false
                }
            }
        }
    }
})
forever(function () {
    if (ghostReadyToHunt && !(incenseState)) {
        if (!(hiding) || wallHacks) {
            for (let index = 0; index < looseTrailTime / 100; index++) {
                pause(100)
                if (sight.isInSight(
                ghost,
                mainCharacter,
                sightRange,
                wallHacks
                )) {
                    lostTrail = false
                    break;
                }
            }
            if (lostTrail) {
                ghostSight = false
            } else {
                lostTrail = true
            }
        }
    } else {
        pause(incenseDuration)
    }
})
forever(function () {
    if (ghostReadyToHunt) {
        if (ghostSight && !(hiding)) {
            pause(300)
            if (spriteutils.distanceBetween(mainCharacter, ghost) < 48) {
                scene.followPath(ghost, scene.aStar(tiles.locationOfSprite(ghost), tiles.locationOfSprite(mainCharacter)), ghostCloseSpeed)
            } else {
                scene.followPath(ghost, scene.aStar(tiles.locationOfSprite(ghost), tiles.locationOfSprite(mainCharacter)), ghostSightSpeed)
            }
        }
    }
})
forever(function () {
    if (ghostReadyToHunt && !(incenseState)) {
        if (!(hiding) || wallHacks) {
            if (sight.isInSight(
            ghost,
            mainCharacter,
            sightRange,
            wallHacks
            )) {
                generatedPath = false
                ghostSight = true
            }
        }
    } else {
        pause(incenseDuration)
    }
})
forever(function () {
    if (hiding) {
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
        isDifficultySetted = true
        if (!(changeHuntOrColorState)) {
            tileUtil.replaceAllTiles(closedDoor, openDoor)
            tileUtil.setWalls(openDoor, false)
            generatedPath = false
            lostTrail = false
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
            tileUtil.replaceAllTiles(openDoor, closedDoor)
            tileUtil.setWalls(closedDoor, true)
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
    if (currentGhostType == "Mimic") {
        while (true) {
            currentGhostAbility = ghostList._pickRandom()
            if (currentGhostAbility != currentGhostType) {
                setGhostStats()
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
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`myTile3`)) {
        if (infoDisplayed) {
            infoDisplayed = false
            ghostReveal.close()
        }
        infoDisplayed = false
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Demon`)) {
        if (!(infoDisplayed)) {
            infoDisplayed = true
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[0], skullList[0]), miniMenu.createMenuItem("Attacks more frequently")])
            noSelectMenu()
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Deogen`)) {
        if (!(infoDisplayed)) {
            infoDisplayed = true
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[1], skullList[1]), miniMenu.createMenuItem("You can't hide, run!")])
            noSelectMenu()
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Mimic`)) {
        if (!(infoDisplayed)) {
            infoDisplayed = true
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[2], skullList[2]), miniMenu.createMenuItem("Mimics others abilities")])
            noSelectMenu()
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Oni`)) {
        if (!(infoDisplayed)) {
            infoDisplayed = true
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[3], skullList[3]), miniMenu.createMenuItem("Blinks more frequently")])
            noSelectMenu()
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Revenant`)) {
        if (!(infoDisplayed)) {
            infoDisplayed = true
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[4], skullList[4]), miniMenu.createMenuItem("Slow at base..."), miniMenu.createMenuItem("Fast when chasing!")])
            noSelectMenu()
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 3)
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 70)
            ghostReveal.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`Yurei`)) {
        if (!(infoDisplayed)) {
            infoDisplayed = true
            ghostReveal = miniMenu.createMenuFromArray([miniMenu.createMenuItem(ghostList[5], skullList[5]), miniMenu.createMenuItem("Can only see closely")])
            noSelectMenu()
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`info`)) {
        controller.moveSprite(mainCharacter, 0, 0)
        game.showLongText("FIND AND PURIFY THE GHOST ROOM AND GUESS THE GHOST TYPE!", DialogLayout.Bottom)
        game.showLongText("Read the ghost behavior on the corresponding skulls.", DialogLayout.Bottom)
        game.showLongText("Observe the ghost's behavior.", DialogLayout.Bottom)
        game.showLongText("Press A to open the book.", DialogLayout.Bottom)
        game.showLongText("Press A to select a ghost.", DialogLayout.Bottom)
        game.showLongText("Press B to exit the book.", DialogLayout.Bottom)
        game.showLongText("WATCH OUT, ALL GHOST BLINK!", DialogLayout.Bottom)
        controller.moveSprite(mainCharacter, playerVelocity, playerVelocity)
        done = true
        pause(2000)
        done = false
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`incenseDefault`) || tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), assets.tile`incenseBurning`)) {
        if (!(infoDisplayed)) {
            infoDisplayed = true
            ghostReveal = miniMenu.createMenuFromArray([
            miniMenu.createMenuItem("Incense", assets.tile`incenseNoBackground`),
            miniMenu.createMenuItem("Press \"B\" to use"),
            miniMenu.createMenuItem("Grants: immunity"),
            miniMenu.createMenuItem("Grants: invisibility"),
            miniMenu.createMenuItem("Duration: " + incenseDuration / 1000 + " seconds")
            ])
            noSelectMenu()
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 5)
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 90)
            ghostReveal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 150)
            ghostReveal.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
        }
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), sprites.castle.tileDarkGrass2)) {
        if (!(infoDisplayed)) {
            setDifficulty()
        }
    }
})
forever(function () {
    if (ghostReadyToHunt) {
        if (ghostSight) {
            music.play(music.createSong(assets.song`huntbBeat0`), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.createSong(assets.song`readyToHuntbBeat0`), music.PlaybackMode.UntilDone)
        }
    } else {
        if (canHunt) {
            music.play(music.createSong(assets.song`beat0`), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.createSong(assets.song`chill0`), music.PlaybackMode.UntilDone)
        }
    }
    if (ghostReadyToHunt) {
        if (ghostSight) {
            music.play(music.createSong(assets.song`huntbBeat3`), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.createSong(assets.song`readyToHuntbBeat3`), music.PlaybackMode.UntilDone)
        }
    } else {
        if (canHunt) {
            music.play(music.createSong(assets.song`beat3`), music.PlaybackMode.UntilDone)
        } else {
            music.play(music.createSong(assets.song`chill1`), music.PlaybackMode.UntilDone)
        }
    }
})
forever(function () {
    if (isDifficultySetted) {
        sprites.destroy(difficultyNPC)
    }
})
forever(function () {
    if (!(gameOver)) {
        for (let tile of floorTiles) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), tile)) {
                isHouseFloorTile = true
                hiding = false
                break;
            }
        }
        for (let tile of otherHouseTilescantSpawn) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), tile)) {
                isHouseFloorTile = true
                hiding = false
                break;
            }
        }
        for (let tile2 of hideTiles) {
            if (tiles.tileAtLocationEquals(tiles.getTileLocation(mainCharacter.x / 16, mainCharacter.y / 16), tile2)) {
                hiding = true
                ghostSight = false
                isHouseFloorTile = true
                break;
            }
        }
        if (isHouseFloorTile) {
            canHunt = true
            changeHuntOrColorState = false
        } else {
            canHunt = false
            changeHuntOrColorState = true
        }
    }
})
