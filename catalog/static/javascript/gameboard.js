//5
//3
//5
//3 
//5

// each letter is an javascript element in an array
// each word has an event listener that listens for a click and then prints the letters in the word to the console

// word 1 [h,e,l,l,o]

// word 2 [w,o,r,l,d]

const answerkey =
{
    row1_5: ['m', 'u', 'n', 'c', 'h'],
    row2_3: ['o', '!', 'i', '!', 'u'],
    row3_5: ['c', 'a', 'n', 'o', 'n'],
    row4_3: ['h', '!', 'j', '!', 'c'],
    row5_5: ['a', 'w', 'a', 's', 'h']

}

// randomizes answer key and prints it to the console
const start_gameboard =
{
    row1_5: ['', '', '', '', ''],
    row2_3: ['', '!', '', '!', ''],
    row3_5: ['', '', '', '', ''],
    row4_3: ['', '!', '', '!', ''],
    row5_5: ['', '', '', '', '']
}

function scramble_start_gameboard() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            start_gameboard[`row${i + 1}_${j + 1}`][j] = answerkey[`row${i + 1}_${j + 1}`][j];
        }
    }

    return start_gameboard;
}

function show_start_gameboard() {
    console.log(start_gameboard);
    return start_gameboard;
}


// goes into switch letter function and checks if the 
//letter is in the answer key and if it is in the correct 
//position and then prints the result to the console
function check_accuracy() {
    if (start_gameboard == answerkey) {
        return "";
    } else {
        for (let row = 0; row < start_gameboard.length; row++) {
            for (let row = 0; row < start_gameboard.length; row++) {
                n()


            }
        } return "";
    }
}

function check_position() {
    return "";
}