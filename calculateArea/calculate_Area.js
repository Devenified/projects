let length;
let width;
let groc1;
let groc2;
let groc3;
function calculateArea()
{
    length=parseFloat(document.getElementById('length').value);
    width=parseFloat(document.getElementById('width').value);

    let area=length*width;
document.getElementById('result').innerText=`The area of rectangle is : ${area}`;
}
function calcamt()
{
    groc1=parseFloat(document.getElementById('grocery1').value);
    groc2=parseFloat(document.getElementById('grocery2').value);
    groc3=parseFloat(document.getElementById('grocery3').value);
    let ans= groc1+groc2+ groc3;
    document.getElementById('grocresult').innerText=`The total amount is:$ ${ans}`;
}

