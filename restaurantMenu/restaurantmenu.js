const breakfastMenu=['Pancakes','Eggs Benedict','Oatmeal','Friters'];
const mainCourseMenu=['Steak','Pata','Burger','Salmon'];
const desertMenu=['Cake','IceCream','Pudding','Fruit Salad'];

const breakfastMenuItemsHTML=breakfastMenu.map((item,index)=>`<p> Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML=breakfastMenuItemsHTML;

let mainCourseItem=' ';
mainCourseMenu.forEach((item,index)=>{
    mainCourseItem+=`<p> Item ${index+1}:${item} </p>`;
});
document.getElementById('maincourseMenuItems').innerHTML=mainCourseItem;

let dessertItem =' ';
for (let i = 0; i < desertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${desertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

