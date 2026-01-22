controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.left.isPressed()) {
        if (controller.up.isPressed()) {
            if (controller.up.isPressed()) {
                animation.runImageAnimation(
                nena,
                assets.animation`nena-animation-left0`,
                100,
                true
                )
            }
        } else if (controller.down.isPressed()) {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-down`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-left0`,
            100,
            true
            )
        }
    } else if (controller.up.isPressed()) {
        if (controller.down.isPressed()) {
            animation.runImageAnimation(
            nena,
            [img`
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 e f f . 
                . f f 4 4 f b f 4 4 e f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f 4 d d d d f . . . 
                . . . f e e 4 4 4 e f . . . 
                . . . 4 d d e 3 3 3 f . . . 
                . . . e d d e 3 3 3 f . . . 
                . . . f e e f 6 6 6 f . . . 
                . . . . f f f f f f . . . . 
                . . . . . f f f . . . . . . 
                `],
            0,
            false
            )
        } else {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-up`,
            100,
            true
            )
        }
    } else if (controller.down.isPressed()) {
        animation.runImageAnimation(
        nena,
        assets.animation`nena-animation-down`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        nena,
        [img`
            . f f f . f f f f f . . . . 
            f f f f f c c c c f f . . . 
            f f f f b c c c c c c f . . 
            f f f c 3 c c c c c c f . . 
            . f 3 3 c c c c c c c c f . 
            . f f f c c c c c 4 c c f . 
            . f f f f c c c 4 4 e f f . 
            . f f 4 4 f b f 4 4 e f f . 
            . . f 4 d 4 1 f d d f f . . 
            . . f f f 4 d d d d f . . . 
            . . . f e e 4 4 4 e f . . . 
            . . . 4 d d e 3 3 3 f . . . 
            . . . e d d e 3 3 3 f . . . 
            . . . f e e f 6 6 6 f . . . 
            . . . . f f f f f f . . . . 
            . . . . . f f f . . . . . . 
            `],
        0,
        false
        )
    }
})
function setWalls () {
    tileUtil.setWalls(sprites.dungeon.greenOuterNorth0, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterNorth1, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterEast0, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterEast1, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterWest0, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterWest1, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterSouth1, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterSouth0, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterNorthWest, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterNorthEast, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterSouthWest, true)
    tileUtil.setWalls(sprites.dungeon.greenOuterSouthEast, true)
    tileUtil.setWalls(sprites.dungeon.greenInnerNorthWest, true)
    tileUtil.setWalls(sprites.dungeon.greenInnerNorthEast, true)
    tileUtil.setWalls(sprites.dungeon.greenInnerSouthEast, true)
    tileUtil.setWalls(sprites.dungeon.greenInnerSouthWest, true)
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.right.isPressed()) {
        if (controller.down.isPressed()) {
            if (controller.up.isPressed()) {
                animation.runImageAnimation(
                nena,
                assets.animation`nena-animation-right`,
                100,
                true
                )
            }
        } else if (controller.up.isPressed()) {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-up`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-right`,
            100,
            true
            )
        }
    } else if (controller.up.isPressed()) {
        if (controller.down.isPressed()) {
            animation.runImageAnimation(
            nena,
            [img`
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f e 4 4 c c c f f f f . 
                . f f e 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e e f . . . 
                . . . f 3 3 3 e d d 4 . . . 
                . . . f 3 3 3 e d d e . . . 
                . . . f 6 6 6 f e e f . . . 
                . . . . f f f f f f . . . . 
                . . . . . . f f f . . . . . 
                `],
            0,
            false
            )
        } else {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-up`,
            100,
            true
            )
        }
    } else if (controller.down.isPressed()) {
        animation.runImageAnimation(
        nena,
        assets.animation`nena-animation-down`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        nena,
        [img`
            . . . . f f f f f . f f f . 
            . . . f f c c c c f f f f f 
            . . f c c c c c c b f f f f 
            . . f c c c c c c 3 c f f f 
            . f c c c c c c c c 3 3 f . 
            . f c c 4 c c c c c f f f . 
            . f f e 4 4 c c c f f f f . 
            . f f e 4 4 f b f 4 4 f f . 
            . . f f d d f 1 4 d 4 f . . 
            . . . f d d d d 4 f f f . . 
            . . . f e 4 4 4 e e f . . . 
            . . . f 3 3 3 e d d 4 . . . 
            . . . f 3 3 3 e d d e . . . 
            . . . f 6 6 6 f e e f . . . 
            . . . . f f f f f f . . . . 
            . . . . . . f f f . . . . . 
            `],
        0,
        false
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        if (controller.left.isPressed()) {
            if (controller.right.isPressed()) {
                animation.runImageAnimation(
                nena,
                [img`
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c 4 4 c c c c f . 
                    . f f c c 4 4 4 4 c c f f . 
                    . f f f b f 4 4 f b f f f . 
                    . f f 4 1 f d d f 1 4 f f . 
                    . . f f d d d d d d f f . . 
                    . . e f e 4 4 4 4 e f e . . 
                    . e 4 f b 3 3 3 3 b f 4 e . 
                    . 4 d f 3 3 3 3 3 3 c d 4 . 
                    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                    . . . . f f f f f f . . . . 
                    . . . . f f . . f f . . . . 
                    `],
                0,
                false
                )
            } else {
                animation.runImageAnimation(
                nena,
                assets.animation`nena-animation-left0`,
                100,
                true
                )
            }
        } else if (controller.right.isPressed()) {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-right`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            nena,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `],
            0,
            false
            )
        }
    } else {
        animation.runImageAnimation(
        nena,
        assets.animation`nena-animation-down`,
        100,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.left.isPressed()) {
        if (controller.down.isPressed()) {
            if (controller.up.isPressed()) {
                animation.runImageAnimation(
                nena,
                [img`
                    . f f f . f f f f f . . . . 
                    f f f f f c c c c f f . . . 
                    f f f f b c c c c c c f . . 
                    f f f c 3 c c c c c c f . . 
                    . f 3 3 c c c c c c c c f . 
                    . f f f c c c c c 4 c c f . 
                    . f f f f c c c 4 4 e f f . 
                    . f f 4 4 f b f 4 4 e f f . 
                    . . f 4 d 4 1 f d d f f . . 
                    . . f f f 4 d d d d f . . . 
                    . . . f e e 4 4 4 e f . . . 
                    . . . 4 d d e 3 3 3 f . . . 
                    . . . e d d e 3 3 3 f . . . 
                    . . . f e e f 6 6 6 f . . . 
                    . . . . f f f f f f . . . . 
                    . . . . . f f f . . . . . . 
                    `],
                0,
                false
                )
            } else {
                animation.runImageAnimation(
                nena,
                assets.animation`nena-animation-up`,
                100,
                true
                )
            }
        } else if (controller.down.isPressed()) {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-down`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            nena,
            [img`
                . . . . f f f f f . f f f . 
                . . . f f c c c c f f f f f 
                . . f c c c c c c b f f f f 
                . . f c c c c c c 3 c f f f 
                . f c c c c c c c c 3 3 f . 
                . f c c 4 c c c c c f f f . 
                . f f e 4 4 c c c f f f f . 
                . f f e 4 4 f b f 4 4 f f . 
                . . f f d d f 1 4 d 4 f . . 
                . . . f d d d d 4 f f f . . 
                . . . f e 4 4 4 e e f . . . 
                . . . f 3 3 3 e d d 4 . . . 
                . . . f 3 3 3 e d d e . . . 
                . . . f 6 6 6 f e e f . . . 
                . . . . f f f f f f . . . . 
                . . . . . . f f f . . . . . 
                `],
            0,
            false
            )
        }
    } else {
        animation.runImageAnimation(
        nena,
        assets.animation`nena-animation-right`,
        100,
        true
        )
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.right.isPressed()) {
        if (controller.up.isPressed()) {
            if (controller.down.isPressed()) {
                animation.runImageAnimation(
                nena,
                [img`
                    . . . . f f f f f . f f f . 
                    . . . f f c c c c f f f f f 
                    . . f c c c c c c b f f f f 
                    . . f c c c c c c 3 c f f f 
                    . f c c c c c c c c 3 3 f . 
                    . f c c 4 c c c c c f f f . 
                    . f f e 4 4 c c c f f f f . 
                    . f f e 4 4 f b f 4 4 f f . 
                    . . f f d d f 1 4 d 4 f . . 
                    . . . f d d d d 4 f f f . . 
                    . . . f e 4 4 4 e e f . . . 
                    . . . f 3 3 3 e d d 4 . . . 
                    . . . f 3 3 3 e d d e . . . 
                    . . . f 6 6 6 f e e f . . . 
                    . . . . f f f f f f . . . . 
                    . . . . . . f f f . . . . . 
                    `],
                0,
                false
                )
            } else {
                animation.runImageAnimation(
                nena,
                assets.animation`nena-animation-up`,
                100,
                true
                )
            }
        } else if (controller.down.isPressed()) {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-down`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            nena,
            [img`
                . f f f . f f f f f . . . . 
                f f f f f c c c c f f . . . 
                f f f f b c c c c c c f . . 
                f f f c 3 c c c c c c f . . 
                . f 3 3 c c c c c c c c f . 
                . f f f c c c c c 4 c c f . 
                . f f f f c c c 4 4 e f f . 
                . f f 4 4 f b f 4 4 e f f . 
                . . f 4 d 4 1 f d d f f . . 
                . . f f f 4 d d d d f . . . 
                . . . f e e 4 4 4 e f . . . 
                . . . 4 d d e 3 3 3 f . . . 
                . . . e d d e 3 3 3 f . . . 
                . . . f e e f 6 6 6 f . . . 
                . . . . f f f f f f . . . . 
                . . . . . f f f . . . . . . 
                `],
            0,
            false
            )
        }
    } else {
        animation.runImageAnimation(
        nena,
        assets.animation`nena-animation-left0`,
        100,
        true
        )
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.down.isPressed()) {
        if (controller.left.isPressed()) {
            if (controller.right.isPressed()) {
                animation.runImageAnimation(
                nena,
                [img`
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c c c c c c c f . 
                    . f f c c c c c c c c f f . 
                    . f f f c c c c c c f f f . 
                    . f f f f f f f f f f f f . 
                    . . f f f f f f f f f f . . 
                    . . e f f f f f f f f e . . 
                    . e 4 f f f f f f f f 4 e . 
                    . 4 d f 3 3 3 3 3 3 c d 4 . 
                    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                    . . . . f f f f f f . . . . 
                    . . . . f f . . f f . . . . 
                    `],
                0,
                false
                )
            } else {
                animation.runImageAnimation(
                nena,
                assets.animation`nena-animation-left0`,
                100,
                true
                )
            }
        } else if (controller.right.isPressed()) {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-right`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            nena,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `],
            0,
            true
            )
        }
    } else {
        animation.runImageAnimation(
        nena,
        assets.animation`nena-animation-up`,
        100,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.up.isPressed()) {
        if (controller.left.isPressed()) {
            if (controller.right.isPressed()) {
                animation.runImageAnimation(
                nena,
                assets.animation`nena-animation-up`,
                100,
                true
                )
            }
        } else if (controller.right.isPressed()) {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-right`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-up`,
            100,
            true
            )
        }
    } else if (controller.left.isPressed()) {
        if (controller.right.isPressed()) {
            animation.runImageAnimation(
            nena,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `],
            0,
            false
            )
        } else {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-left0`,
            100,
            true
            )
        }
    } else if (controller.right.isPressed()) {
        animation.runImageAnimation(
        nena,
        assets.animation`nena-animation-right`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        nena,
        [img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c 4 4 c c c c f . 
            . f f c c 4 4 4 4 c c f f . 
            . f f f b f 4 4 f b f f f . 
            . f f 4 1 f d d f 1 4 f f . 
            . . f f d d d d d d f f . . 
            . . e f e 4 4 4 4 e f e . . 
            . e 4 f b 3 3 3 3 b f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `],
        0,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.down.isPressed()) {
        if (controller.left.isPressed()) {
            if (controller.right.isPressed()) {
                animation.runImageAnimation(
                nena,
                [img`
                    . f f f . f f f f . f f f . 
                    f f f f f c c c c f f f f f 
                    f f f f b c c c c b f f f f 
                    f f f c 3 c c c c 3 c f f f 
                    . f 3 3 c c c c c c 3 3 f . 
                    . f c c c c 4 4 c c c c f . 
                    . f f c c 4 4 4 4 c c f f . 
                    . f f f b f 4 4 f b f f f . 
                    . f f 4 1 f d d f 1 4 f f . 
                    . . f f d d d d d d f f . . 
                    . . e f e 4 4 4 4 e f e . . 
                    . e 4 f b 3 3 3 3 b f 4 e . 
                    . 4 d f 3 3 3 3 3 3 c d 4 . 
                    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                    . . . . f f f f f f . . . . 
                    . . . . f f . . f f . . . . 
                    `],
                0,
                true
                )
            }
        } else if (controller.right.isPressed()) {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-right`,
            100,
            true
            )
        } else {
            animation.runImageAnimation(
            nena,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c 4 4 c c c c f . 
                . f f c c 4 4 4 4 c c f f . 
                . f f f b f 4 4 f b f f f . 
                . f f 4 1 f d d f 1 4 f f . 
                . . f f d d d d d d f f . . 
                . . e f e 4 4 4 4 e f e . . 
                . e 4 f b 3 3 3 3 b f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `],
            0,
            true
            )
        }
    } else if (controller.left.isPressed()) {
        if (controller.right.isPressed()) {
            animation.runImageAnimation(
            nena,
            [img`
                . f f f . f f f f . f f f . 
                f f f f f c c c c f f f f f 
                f f f f b c c c c b f f f f 
                f f f c 3 c c c c 3 c f f f 
                . f 3 3 c c c c c c 3 3 f . 
                . f c c c c c c c c c c f . 
                . f f c c c c c c c c f f . 
                . f f f c c c c c c f f f . 
                . f f f f f f f f f f f f . 
                . . f f f f f f f f f f . . 
                . . e f f f f f f f f e . . 
                . e 4 f f f f f f f f 4 e . 
                . 4 d f 3 3 3 3 3 3 c d 4 . 
                . 4 4 f 6 6 6 6 6 6 f 4 4 . 
                . . . . f f f f f f . . . . 
                . . . . f f . . f f . . . . 
                `],
            0,
            false
            )
        } else {
            animation.runImageAnimation(
            nena,
            assets.animation`nena-animation-left0`,
            100,
            true
            )
        }
    } else if (controller.right.isPressed()) {
        animation.runImageAnimation(
        nena,
        assets.animation`nena-animation-right`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        nena,
        [img`
            . f f f . f f f f . f f f . 
            f f f f f c c c c f f f f f 
            f f f f b c c c c b f f f f 
            f f f c 3 c c c c 3 c f f f 
            . f 3 3 c c c c c c 3 3 f . 
            . f c c c c c c c c c c f . 
            . f f c c c c c c c c f f . 
            . f f f c c c c c c f f f . 
            . f f f f f f f f f f f f . 
            . . f f f f f f f f f f . . 
            . . e f f f f f f f f e . . 
            . e 4 f f f f f f f f 4 e . 
            . 4 d f 3 3 3 3 3 3 c d 4 . 
            . 4 4 f 6 6 6 6 6 6 f 4 4 . 
            . . . . f f f f f f . . . . 
            . . . . f f . . f f . . . . 
            `],
        0,
        false
        )
    }
})
let ghotSleepTime = 0
let nena: Sprite = null
music.play(music.createSong(assets.song`white_space`), music.PlaybackMode.LoopingInBackground)
music.setVolume(32)
nena = sprites.create(assets.image`nena-front`, SpriteKind.Player)
nena.setPosition(255, 255)
controller.moveSprite(nena)
scene.cameraFollowSprite(nena)
tiles.setTilemap(tilemap`map`)
tiles.setTilemap(tilemap`nivel2`)
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
game.showLongText("ENCUENTRA AL FANTASMA Y PURIFICA EL HOTEL!", DialogLayout.Bottom)
let ghost = sprites.create(img`
    . 2 2 2 2 2 f f f f 2 2 2 2 2 . 
    2 2 2 2 f f 1 1 1 1 f f 2 2 2 2 
    2 2 2 f b 1 1 1 1 1 1 b f 2 2 2 
    2 2 2 f 1 1 1 1 1 1 1 1 f 2 2 2 
    2 2 f d 1 1 1 1 1 1 1 1 d f 2 2 
    2 2 f d 1 1 1 1 1 1 1 1 d f 2 2 
    2 2 f d d d 1 1 1 1 d d d f 2 2 
    2 2 f b d b f d d f b d b f 2 2 
    2 2 f c d c f 1 1 f c d c f 2 2 
    2 2 2 f b 1 1 1 1 1 1 b f 2 2 2 
    2 2 f f f c d b 1 b d f f f f 2 
    f c 1 1 1 c b f b f c 1 1 1 c f 
    f 1 b 1 b 1 f f f f 1 b 1 b 1 f 
    f b f b f f f f f f b f b f b f 
    2 2 2 2 2 f f f f f f 2 2 2 2 2 
    . 2 2 2 2 2 2 f f f 2 2 2 2 2 . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(ghost, assets.tile`pared`)
let spawn_x = ghost.x
let spawn_y = ghost.y
spawn_x = 270
spawn_y = 255
setWalls()
let ghostHunt = 0
forever(function () {
    ghostHunt = 0
    ghost.setScale(0, ScaleAnchor.Middle)
    ghotSleepTime = randint(1000, 1001)
    pause(ghotSleepTime)
    ghost.setPosition(spawn_x, spawn_y)
    ghostHunt += 1
    ghost.changeScale(1, ScaleAnchor.Middle)
    ghotSleepTime = randint(100000, 100001)
    pause(ghotSleepTime)
})
forever(function () {
    if (scene.spriteIsFollowingPath(ghost)) {
    	
    } else {
        ghost.setPosition(spawn_x, spawn_y)
    }
})
game.onUpdateInterval(200, function () {
    if (ghostHunt == 1) {
        scene.followPath(ghost, scene.aStar(tiles.locationOfSprite(ghost), tiles.locationOfSprite(nena)), 100)
    } else {
        ghost.setPosition(spawn_x, spawn_y)
    }
})
