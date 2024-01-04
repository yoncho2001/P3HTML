/*Planar coordinates.
The input will consist of an array containing twelve values
Line 1, Point 1 X
Line 1, Point 1 Y
Line 1, Point 2 X
Line 1, Point 2 Y
Line 2, Point 1 X

and check if the line segments can form a triangle.
*/


function coordinates(arr) {
    let lines = []; 
    let result = "";

    for (let i = 0; i < arr.length; i++) 
    {
        let x1 = parseFloat(arr[i]);
        let y1 = parseFloat(arr[i + 1]);
        let x2 = parseFloat(arr[i + 2]);
        let y2 = parseFloat(arr[i + 3]);
        
        let line = parseFloat(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)).toFixed(2));

        lines.push(line);

        result += line + '\n';
        i+=3;
    }

    let sum = 0;

    for (let i = 0; i < lines.length; i++)
    {
        sum += lines[i];  
    }

    if (sum - Math.max(...lines)> Math.max(...lines)) 
    {
        result +="Triangle can be built";
    } 
    else 
    {
        result +="Triangle can not be built";
    }

    return result
}

let arr = [
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
  ];
  
console.log(coordinates(arr)); 