let wins = 200
let losses = 50
let victories = ranked_calc(wins, losses)
let rank


if (victories <= 10) {
    rank = "iron"
} else if (victories > 10 && victories <= 20) {
    rank = "bronze"
} else if (victories > 20 && victories <= 50) {
    rank = "silver"
} else if (victories > 50 && victories <= 80) {
    rank = "gold"
} else if (victories > 80 && victories <= 90) {
    rank = "diamond"
} else if (victories > 90 && victories <= 100) {
    rank = "legendary"
} else if (victories > 100) {
    rank = "immortal"
}

console.log("the hero has " + victories + " victories and has has achieved the " + rank + " rank")

function ranked_calc(wins, losses) {
    let result = wins - losses
    return result
}
