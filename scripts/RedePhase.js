/*************** NOT FINISHED -- PREVIEW *************** *
*                                                        *
* Redesky Avtivoid by cancer:                            *
******************************************************** */

(script = registerScript({
    name: "RedePhase",
    authors: ["Enoughdv", "cancernameu"],
    version: "1.0"
})).import("Core.lib");

var i = 0, f = 0;
var C06PacketPlayerPosLook = Java.type('net.minecraft.network.play.client.C03PacketPlayer.C06PacketPlayerPosLook');
var BlockPos = Java.type("net.minecraft.util.BlockPos");
var Strafe = moduleManager.getModule('Strafe');

module = {
    category: "Redesky",
    description: "Redesky get-out-of-box-omat",
    onUpdate: function () {
      if(mc.thePlayer.ticksExisted < 200 && mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY-2, mc.thePlayer.posZ)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY-1, mc.thePlayer.posZ)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX+1, mc.thePlayer.posY, mc.thePlayer.posZ)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX-1, mc.thePlayer.posY, mc.thePlayer.posZ)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ+1)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY, mc.thePlayer.posZ-1)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY+1, mc.thePlayer.posZ+1)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX, mc.thePlayer.posY+1, mc.thePlayer.posZ-1)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX+1, mc.thePlayer.posY+1, mc.thePlayer.posZ)) && !mc.theWorld.isAirBlock(new BlockPos(mc.thePlayer.posX-1, mc.thePlayer.posY+1, mc.thePlayer.posZ))) {
        mc.gameSettings.keyBindForward.pressed = true;
        if(mc.thePlayer.isCollidedHorizontally) {
        mc.thePlayer.motionY = -1;
        mc.thePlayer.sendQueue.addToSendQueue(new C06PacketPlayerPosLook(mc.thePlayer.posX, mc.thePlayer.posY - 0.00000001, mc.thePlayer.posZ, mc.thePlayer.rotationYaw, mc.thePlayer.rotationPitch, false));
        mc.thePlayer.sendQueue.addToSendQueue(new C06PacketPlayerPosLook(mc.thePlayer.posX, mc.thePlayer.posY - 0.000001, mc.thePlayer.posZ, mc.thePlayer.rotationYaw, mc.thePlayer.rotationPitch, false));
        f = 1;
        }

      }
        else f--;
        if(f == 0) mc.gameSettings.keyBindForward.pressed = false;
    },
    onDisable: function () {
        mc.timer.timerSpeed = 1;
    }
}