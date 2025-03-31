input.onButtonPressed(Button.A, function () {
    basic.showString("Reactie spel!")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Klaar?")
    basic.clearScreen()
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    // Laat de lampjes even aan voor 1 seconde
    basic.pause(randint(1000, 5000))
    // Zet de lampjes uit
    basic.clearScreen()
    // Start de timer zodra de lampjes uitgaan
    startTime = input.runningTime()
    input.onButtonPressed(Button.B, function on_button_pressed_b() {



        endTime = input.runningTime()

        reactionTime = (endTime - startTime) / 1000

        //  Reactietijd in seconden

        basic.showNumber(reactionTime)

    })
})
let endTime = 0
let reactionTime = 0
let startTime = 0
