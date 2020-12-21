//tao mang 2 chieu
let caro = [];
for(let i=0;i<20;i++) {
    caro[i]= [];
    for (let j=0;j<20;j++) {
        caro[i][j]='';
    }
}

//tao ban co caro
function createCaro() {
    let cols,rows;
    let table="<table border='1' width='600px'>"
    for(rows=0; rows<20; rows++){
        table=table+'<tr>'
        for(cols=0;cols<20;cols++){
            table=table+'<td>' +
                '<input type = "button" ' + 'value=" ' + caro[rows][cols] +'"' +
                'style="width: 30px; height: 30px; border: none; background-color: white" onclick="play('+ rows + ',' + cols +')">'
                +'</td>';
        }
        table=table+'</tr>'
    }
    table=table+'</table>'
    // console.log(table)
    document.getElementById('Caro').innerHTML=table;
}
createCaro();

//dieu kien win
let countXO=2;
let player;
function play(row,col) {
    if (caro[row][col]) {
        alert('Mù à, đánh lại')
    } else {
        if (countXO % 2 === 0) {
            player='x';
            caro[row][col]=player;
            createCaro();
            countXO++;
        } else {
            player='o';
            caro[row][col]=player;
            createCaro();
            countXO++;
        }
        checkWin(row,col,player);
    }
}

function checkWin(row,col,player) {
    let i=1;
    let j=1;
    let CELLS=caro.length;
    let count=1;
    //check hang ngang
    while (col-i>=0 && caro[row][col-i]===caro[row][col]) {
        count++;
        i++;
    }
    while (col+j<=CELLS && caro[row][col+j]===caro[row][col]) {
        count++;
        j++;
    }
    if (count===5) {
        alert('Player ' + player +' win');
    }
    count=1;
    //check hang doc
    i=1;
    j=1;
    while (row-i>=0 && caro[row-i][col]===caro[row][col]) {
        count++;
        i++;
    }
    while (row+j<=CELLS && caro[row + j][col]===caro[row][col]) {
        count++;
        j++;
    }
    if (count===5) {
        alert('Player ' + player +' win');
    }
    count=1;
    //check hang cheo 1
    i=1;
    j=1;
    while (row-i>=0 && caro[row-i][col-i]===caro[row][col]) {
        count++;
        i++;
    }
    while (row+j<=CELLS && caro[row + j][col+j]===caro[row][col]) {
        count++;
        j++;
    }
    if (count===5) {
        alert('Player ' + player +' win');
    }
    count=1;
    //check hang cheo 2
    i=1;
    j=1;
    while (row-i>=0 && caro[row-i][col+i]===caro[row][col]) {
        count++;
        i++;
    }
    while (row+j<=CELLS && caro[row + j][col-j]===caro[row][col]) {
        count++;
        j++;
    }
    if (count===5) {
        alert('Player ' + player +' win');
    }
    count=1;
}

function reset() {
    for(let i=0;i<20;i++) {
        caro[i] = [];
        for (let j = 0; j < 20; j++) {
            caro[i][j] = '';
        }
    }
    createCaro();
}
