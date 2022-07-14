
const number1  = document.getElementById('1')
const number2  = document.getElementById('2')
const number3  = document.getElementById('3')
const number4  = document.getElementById('4')
const number5  = document.getElementById('5')
const number6  = document.getElementById('6')
const number7  = document.getElementById('7')
const number8  = document.getElementById('8')
const number9  = document.getElementById('9')
const number10 = document.getElementById('10')
const number11 = document.getElementById('11')
const number12 = document.getElementById('12')
const number13 = document.getElementById('13')
const number14 = document.getElementById('14')
const number15 = document.getElementById('15')
const blank    = document.getElementById('blank')
const btnMelanger = document.getElementById('melange')
const score = document.getElementById('score')
const GRID_SIZE = 4


number1.addEventListener('click', one)
number2.addEventListener('click', two)
number3.addEventListener('click', three)
number4.addEventListener('click', four)
number5.addEventListener('click', five)
number6.addEventListener('click', six)
number7.addEventListener('click', seven)
number8.addEventListener('click', eight)
number9.addEventListener('click', nine)
number10.addEventListener('click', ten)
number11.addEventListener('click', eleven)
number12.addEventListener('click', twelve)
number13.addEventListener('click', thirteen)
number14.addEventListener('click', fourteen)
number15.addEventListener('click', fifteen)
btnMelanger.addEventListener('click', melange)


var numberPosition = []
var numberOfSwap = 0


function melange() {
    console.log('Mélange')
    numberPosition = []
    numberOfSwap = 0
    score.textContent = numberOfSwap
    melange1()
    melange2()
    melange3()
    melange4()
    melange5()
    melange6()
    melange7()
    melange8()
    melange9()
    melange10()
    melange11()
    melange12()
    melange13()
    melange14()
    melange15()  
    melangeBlank()
}

function checkPosition(xnumber, ynumber) {
    for (let i = 0; i < numberPosition.length; i++) {
        if (numberPosition[i].x == xnumber && numberPosition[i].y == ynumber) {
            return false
        } 
    }
    return true
}

function melange1() {
    let x = getRandomGridPosition().x
    let y = getRandomGridPosition().y
        

    number1.style.gridColumnStart = x
    number1.style.gridRowStart = y
    numberPosition.push({
        x: x,
        y: y
    })
 
}
function melange2() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number2.style.gridColumnStart = x
            number2.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange3() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number3.style.gridColumnStart = x
            number3.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange4() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number4.style.gridColumnStart = x
            number4.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange5() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number5.style.gridColumnStart = x
            number5.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange6() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number6.style.gridColumnStart = x
            number6.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange7() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number7.style.gridColumnStart = x
            number7.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange8() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number8.style.gridColumnStart = x
            number8.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange9() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number9.style.gridColumnStart = x
            number9.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange10() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number10.style.gridColumnStart = x
            number10.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange11() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number11.style.gridColumnStart = x
            number11.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange12() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number12.style.gridColumnStart = x
            number12.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange13() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number13.style.gridColumnStart = x
            number13.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange14() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number14.style.gridColumnStart = x
            number14.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melange15() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            number15.style.gridColumnStart = x
            number15.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}
function melangeBlank() {
    while (true) {
        let x = getRandomGridPosition().x
        let y = getRandomGridPosition().y


        if (checkPosition(x, y)) {
            blank.style.gridColumnStart = x
            blank.style.gridRowStart = y

            numberPosition.push({
                x: x,
                y: y
            })

            break
        }
        
    }
}

function one() {
    console.log('1')
    if (checkBlank(1)) {
        swap(1)
    }
    checkWin()
}
function two() {
    console.log('2')
    if (checkBlank(2)) {
        swap(2)
    }
    checkWin()
}
function three() {
    console.log('3')
    if (checkBlank(3)) {
        swap(3)
    }
    checkWin()
}
function four() {
    console.log('4')
    if (checkBlank(4)) {
        swap(4)
    }
    checkWin()
}
function five() {
    console.log('5')
    if (checkBlank(5)) {
        swap(5)
    }
    checkWin()
}
function six() {
    console.log('6')
    if (checkBlank(6)) {
        swap(6)
    }
    checkWin()
}
function seven() {
    console.log('7')
    if (checkBlank(7)) {
        swap(7)
    }
    checkWin()
}
function eight() {
    console.log('8')
    if (checkBlank(8)) {
        swap(8)
    }
    checkWin()
}
function nine() {
    console.log('9')
    if (checkBlank(9)) {
        swap(9)
    }
    checkWin()
}
function ten() {
    console.log('10')
    if (checkBlank(10)) {
        swap(10)
    }
    checkWin()
}
function eleven() {
    console.log('11')
    if (checkBlank(11)) {
        swap(11)
    }
    checkWin()
}
function twelve() {
    console.log('12')
    if (checkBlank(12)) {
        swap(12)
    }
    checkWin()
}
function thirteen() {
    console.log('13')
    if (checkBlank(13)) {
        swap(13)
    }
    checkWin()
}
function fourteen() {
    console.log('14')
    if (checkBlank(14)) {
        swap(14)
    }
    checkWin()
}
function fifteen() {
    console.log('15')
    if (checkBlank(15)) {
        swap(15)
    }
    checkWin()
}
function swap(numberToSwap) {

    let blankPosition = {
        x: numberPosition[15].x, 
        y: numberPosition[15].y
    }

    let numberToSwapPosition = {
        x: numberPosition[numberToSwap - 1].x, 
        y: numberPosition[numberToSwap - 1].y
    }

    numberPosition[15] = {
        x: numberToSwapPosition.x,
        y: numberToSwapPosition.y
    }
    numberPosition[numberToSwap - 1] = {
        x: blankPosition.x,
        y: blankPosition.y
    }

    if (numberToSwap == 1) {
        number1.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number1.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 2) {
        number2.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number2.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 3) {
        number3.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number3.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 4) {
        number4.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number4.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 5) {
        number5.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number5.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 6) {
        number6.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number6.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 7) {
        number7.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number7.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 8) {
        number8.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number8.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 9) {
        number9.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number9.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 10) {
        number10.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number10.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 11) {
        number11.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number11.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 12) {
        number12.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number12.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 13) {
        number13.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number13.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 14) {
        number14.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number14.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } else if (numberToSwap == 15) {
        number15.style.gridColumnStart = numberPosition[numberToSwap - 1].x
        number15.style.gridRowStart = numberPosition[numberToSwap - 1].y
    } 

    blank.style.gridColumnStart = numberPosition[15].x
    blank.style.gridRowStart = numberPosition[15].y

    numberOfSwap += 1
    score.textContent = numberOfSwap
}

function checkBlank(numberToCheck) {
    if (
        (numberPosition[numberToCheck - 1].x == numberPosition[15].x &&
        numberPosition[numberToCheck - 1].y - 1 == numberPosition[15].y)
        ||
        (numberPosition[numberToCheck - 1].x + 1 == numberPosition[15].x &&
            numberPosition[numberToCheck - 1].y == numberPosition[15].y)
        ||
        (numberPosition[numberToCheck - 1].x == numberPosition[15].x &&
            numberPosition[numberToCheck - 1].y + 1 == numberPosition[15].y)
        ||
        (numberPosition[numberToCheck - 1].x - 1 == numberPosition[15].x &&
            numberPosition[numberToCheck - 1].y == numberPosition[15].y)
    ) {
        return true
    } else {
        return false
    }
}

function getRandomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

function checkWin() {
    if (
        numberPosition[0].x == 1 && numberPosition[0].y == 1 &&
        numberPosition[1].x == 2 && numberPosition[1].y == 1 &&
        numberPosition[2].x == 3 && numberPosition[2].y == 1 &&
        numberPosition[3].x == 4 && numberPosition[3].y == 1 &&
        numberPosition[4].x == 1 && numberPosition[4].y == 2 &&
        numberPosition[5].x == 2 && numberPosition[5].y == 2 &&
        numberPosition[6].x == 3 && numberPosition[6].y == 2 &&
        numberPosition[7].x == 4 && numberPosition[7].y == 2 &&
        numberPosition[8].x == 1 && numberPosition[8].y == 3 &&
        numberPosition[9].x == 2 && numberPosition[9].y == 3 &&
        numberPosition[10].x == 3 && numberPosition[10].y == 3 &&
        numberPosition[11].x == 4 && numberPosition[11].y == 3 &&
        numberPosition[12].x == 1 && numberPosition[12].y == 4 &&
        numberPosition[13].x == 2 && numberPosition[13].y == 4 &&
        numberPosition[14].x == 3 && numberPosition[14].y == 4 &&
        numberPosition[15].x == 4 && numberPosition[15].y == 4 
    ) {
        console.log('You WIN !')
        let rematch = confirm('Vous avez gagné en ' + numberOfSwap.toString() + ' swap.' + '\nVoulez-vous recommancer ?')
        if (rematch) {
            numberOfSwap = 0
            score.textContent = numberOfSwap
            melange()
        } else {
            alert('Aurevoir !')
        }
    }
}