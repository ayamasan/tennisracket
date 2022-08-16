input.onButtonPressed(Button.A, function () {
    A0 = pins.analogReadPin(AnalogPin.P0)
    B0 = pins.analogReadPin(AnalogPin.P1)
})
let B0 = 0
let A0 = 0
bluetooth.startUartService()
let A = 0
let B = 0
A0 = 1023
B0 = 1023
let ボリュームA = pins.analogReadPin(AnalogPin.P0)
let ボリュームB = pins.analogReadPin(AnalogPin.P1)
let ラケットA = game.createSprite(0, A)
let ラケットB = game.createSprite(4, B)
basic.forever(function () {
    ボリュームA = pins.analogReadPin(AnalogPin.P0)
    ボリュームB = pins.analogReadPin(AnalogPin.P1)
    A = Math.round(Math.map(ボリュームA, 0, A0, 0, 4))
    B = Math.round(Math.map(ボリュームB, 0, B0, 0, 4))
    ラケットA.set(LedSpriteProperty.Y, A)
    ラケットB.set(LedSpriteProperty.Y, B)
    bluetooth.uartWriteString("" + convertToText(A) + "," + convertToText(B))
    basic.pause(100)
})
