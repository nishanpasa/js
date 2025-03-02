// colorArray = [0,1,2,3,4,5,6,7,8,9, 'A', B , C,D,E];

let colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


function changeColor() {
    let hexValue = '#';
    for (let i = 0; i < 6; i++) {

        colorIndex = Math.random(colorArray) * colorArray.length;
        colorIndex = Math.floor(colorIndex);
        color = colorArray[colorIndex];
        hexValue += color ;
    }
   document.querySelector('#changeColorBtn').style.backgroundColor = `${hexValue}`;

}


// function changeColor() {
//     let hexValue = [];
//     for (let i = 0; i < 6; i++) {

//         colorIndex = Math.random(colorArray) * colorArray.length;
//         colorIndex = Math.floor(colorIndex);
//         hexValue.push(colorArray[colorIndex]);
//     }
//     hexValue = hexValue.join('');  
//     document.querySelector('#changeColorBtn').style.backgroundColor = `#${hexValue}`;

// }


