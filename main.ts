let ask_for_number = game.askForNumber("get a number for this loop")
let starting_number = game.askForNumber("get the number to start with")
game.splash(starting_number)
let current_point_in_loop = 1
for (let index = 0; index < ask_for_number; index++) {
    starting_number = starting_number + starting_number
    current_point_in_loop = current_point_in_loop + 1
    game.splash("number " + starting_number, "point in loop is: " + current_point_in_loop)
}
if (game.ask("reset?")) {
    game.reset()
} else {
    game.over(true, effects.confetti)
}
