// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000001010000000000000000000000000000000100000000000000000000010100000000010000000000000000000000000000000100000000000000000000000100000001000000000000000000000000000001010000000000000000000000000000010000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16,sprites.castle.tilePath5], TileScale.Sixteen);
            case "map":
            case "nivel1":return tiles.createTilemap(hex`200020000c0202020202020202021414140e0c02020e0c0202020202020202021414140e0b08060606060606060606060d0f0b080d0f0b08060606060606060606060d0f0b091e07030707070703071d0a0f0b090a0f0b091e07070307070707071d0a0f0b090a0c07020e0c14070e090a0f0b090a0f0b090a0c02070e0c14020e090a0f0b090a0b01010f0b010115090a150b090a0f0b090a0b01010f0b010109030a150b090a0b01010f0b01010f090a0f0b090a0f0b090a0b01010f0b01010f090a0f0b090a1210101112131311090a0f0b090a0f0b090a1210101112131311090a0f0b090a0c02020e0c02020e090a0f0b090a0f0b090a0c02020e0c02020e090a0f0b090a0b01010f0b010109030a0f0b090a0f0b090a0b01010f0b01010f090a0f1709030a01010f0b01010f090a150b090a0f1709030a01010f0b01010f090a1517090a12101011121010110904060605040606050a1210101112061011090a0f1709040606060606060606051e07071d1e07071d040606060606030606050a150b1607070707070707070707180f0b090a0f0b1607070707070707070707180f12131310101013101313131313110b090a0f12131310101013101313131313110c0202020202020202020202020219090a1a020202020202020202020202020e0b08060606060606060606060606060303060606060606060606060606060d0f0b161d1e0707070707070707070707030307070707070707070707070707180f1213090a131313131313131313101c090a1b13131313131313131313131313110c02090a1402021402021414140e0b090a150c0202020202020202021414140e0b08050406060606060606060d0f0b090a150b08060606060606060606060d0f0b091e07030707070707071d0a150b090a150b091e07070707070703071d0a0f0b090a0c07020e0c14020e090a0f0b090a150b090a0c02020e0c14070e090a0f0b090a0b01010f0b010115090a150b090a150b090a0b01010f0b010115090a150b090a0b01010f0b010109030a0f0b090a150b09030a01010f0b01010f090a0f0b090a1210101112131311090a0f0b090a150b090a1210101112131311090a0f0b090a0c02020e0c02020e090a150b090a150b090a0c02020e0c02020e090a0f0b090a0b01010f0b01010f090a0f0b090a150b090a0b01010f0b01010f030a0f17090a0b01010f0b01010f090a0f0b090a1517090a0b01010f0b01010f090a1517090a1206101112100611090a0f0b09040606050a1206131112100611090a0f1709040603060606060306050a0f0b091e07071d040603060606060306050a150b160707070707070707070718150b1618150b1607070707070707070707180f1213131313131313131313131311121313111213131010101310131313131311`, img`
22222222222222222222222222222222
2............22..22............2
2............22..22............2
2..2.2222.2..22..22..22.22222..2
2..2..22..2..22..22..2..22.....2
2..2..22..2..22..22..2..22..2..2
2..22222222..22..22..22222222..2
2..22222222..22..22..22222222..2
2..2..22.....22..22..2..22..2..2
2.....22..2..22..22.....22..2..2
2..22222222..........22222.22..2
2..............................2
2............22..22............2
222222222222222..222222222222222
222222222222222..222222222222222
2..............................2
2..............................2
22..22222222222..222222222222222
22..22222222222..222222222222222
2............22..22............2
2............22..22............2
2..2.222222..22..22..222222.2..2
2..2..22..2..22..22..2..22..2..2
2..2..22.....22..22.....22..2..2
2..22222222..22..22..22222222..2
2..22222222..22..22..22222222..2
2..2..22..2..22..22..2..22..2..2
2..2..22..2..22..22..2..22..2..2
2..2.2222.2..22......2.2222.2..2
2............22................2
2............22..22............2
22222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.greenOuterNorth0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.greenOuterWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundNorthWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "pared":
            case "tile1":return tile1;
            case "pared0":
            case "tile2":return tile2;
            case "pared1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
