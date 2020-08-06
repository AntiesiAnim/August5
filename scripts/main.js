const section = document.getElementById('section')
const btn_change = document.querySelector('#change-word')
const words= ['Hi there!','My second element appearing','Third one now','There will be more..'];
let cur_word = words.length-1;
const colors= ['red','blue','green','yellow']

section.innerHTML =  `<p> ${words[cur_word]} </p>` //Template literals
section.style.color= colors[cur_word];

// function wordChange(c) {
//     cur_word--;


//     if (cur_word===0) {
//         cur_word=words.length-1;
        
//     }else{
//         cur_word--;
//     }//     section.innerHTML = `<p> ${words[cur_word]} </p>`;
// }
// wordChange=(c)=>{
//     cur_word--;


//     if (cur_word===0) {
//         cur_word=words.length-1;
        
//     }else{
//         cur_word--;
//     }//     section.innerHTML = `<p> ${words[cur_word]} </p>`;
// }

const car = {
    speed : 20,
    color :'grey',
    brand : 'toyota',
    model : 'camry'
}
console.log(car.speed);
console.log(car.model);

car.speed +=20;
console.log('car speed now:', car.speed);

btn_change.addEventListener("click",(c)=>{
    // cur_word--;
   
    if (cur_word==0) {
        cur_word=words.length-1;
        
    }else{
        cur_word--;
    }
    section.innerHTML = `<p> ${words[cur_word]} </p>`;
    section.style.color=colors[cur_word];

})

// Array of objects
let cars =[
    {speed:30, 
     color: 'blue',
     brand: 'BMW',
     model: null
    },
    {speed:50, 
     color: 'Red',
     brand: 'Toyota',
     model: 'Corolla'
     },
    {speed:60, 
     color: 'Red',
     brand: 'Toyota',
     model: 'Corolla'
    }
]
console.log(cars[0].speed);
console.log('The brand of the second car object is:',cars[1].brand);
// decrease the speed of the third car object by 20 and log it
cars[2].speed-=20;
console.log('The decreased speed of the third car object is:',cars[2].speed);

// for (let i = 0; i < cars.length; i++) {
//   // console.log('Number',i+1,':',cars[i]);
//     console.log('Color',i+1,':',cars[i].color);
//     console.log('Speed',i+1,':',cars[i].speed);
//     console.log('Brand',i+1,':',cars[i].brand);
// }
i=0;
while (i<cars.length) {
    // console.log('Number',i+1,':',cars[i]);
   
    console.log('Color',i+1,':',cars[i].color);
    console.log('Speed',i+1,':',cars[i].speed);
    console.log('Brand',i+1,':',cars[i].brand);
    i++;
}

//  cars.map(car=>{console.log(car);})