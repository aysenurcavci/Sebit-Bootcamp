//ilk yöntem kendi ismi ile
//const button = document.querySelector('button');

//ikinci yöntem id ile
//const button = document.querySelector('#buttonId');

//üçüncü yöntem class ile
//const button = document.querySelector('.buttonClass');

//const button = document.getElementById('buttonId');

//const button = document.getElementsByClassName('buttonClass')[0];


// event ilk yöntem
/*
const button = document.getElementById('buttonId');
button.addEventListener('click',() => (
    console.log("tıklandı")
))
*/

//evet ikinci yöntem
// function add(){
//     console.log("tıklandı")
// }

//console.log(button)

const liElemanları = document.querySelectorAll('li');

//console.log(liElemanları);

// liElemanları.forEach(eleman =>{
//     eleman.addEventListener('click', e =>{
//         // console.log("tıklandı");
//         //console.log(e.target);
//         e.target.style.color='blue';
//     })
// })


//const ulDegerlerim = document.querySelector('ul');
//console.log(ulDegerlerim);

//ulDegerlerim.remove();

liElemanları.forEach(eleman =>{
    eleman.addEventListener('click', e =>{
        e.target.remove();
    })
})

// const liElemanım = document.createElement('li');
// liElemanım.textContent = 'Javascript';

//append sona eleman ekleme
//pre başa eleman ekleme

const button = document.getElementById('buttonId');

const ulDegerlerim = document.querySelector('ul');


button.addEventListener('click',() => {
    const liElemanım = document.createElement('li');
    liElemanım.textContent = 'Javascript';
    ulDegerlerim.append(liElemanım)
})
