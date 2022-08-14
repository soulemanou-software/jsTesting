const elemtDisplay = document.getElementById('names');
const data = [
    {
        id:1,
        name:'my name is emma',
        remove:'Remove',
    },
    {
        id:2,
        name:'my name is soul',
        remove:'Remove',
    },
    {
        id:3,
        name:'my name is issa',
        remove:'Remove',
    },
    {
        id:4,
        name:'my name is john',
        remove:'Remove',
    },
    {
        id:5,
        name:'my name is alondou',
        remove:'Remove',
    },
    {
        id:6,
        name:'my name is max',
        remove:'Remove',
    },
];
console.log(data);

for( let i = 0; i<=data.length; ++i ){

    elemtDisplay.innerHTML=`<li class="item"><span class="name">${ data[i].name }</span><button class="btnremove">${ data[i].remove }</button></li>`;
};

// elemtDisplay.innerHTML=` <li class="item"><span class="name">my name is babanou</span><button class="btnremove">Remove</button></li>
// <li class="item"><span class="name">my name is emma</span><button class="btnremove">Remove</button></li>
// <li class="item"><span class="name">my name is Kem</span><button class="btnremove">Remove</button></li>
// <li class="item"><span class="name">my name is issa</span><button class="btnremove">Remove</button></li>
// <li class="item"><span class="name">my name is soulemanou</span><button class="btnremove">Remove</button></li>
// <li class="item"><span class="name">my name is abdoul</span><button class="btnremove">Remove</button></li>`;


// const lia =document.createElement('li');
// lia.classList='item';
// const span =document.createElement('span');
// span.classList='name';
// span.innerText='my name is emma';
// const btnRev = document.createElement('button');
// btnRev.innerText='Remove';
// btnRev.classList ='btnremove';
// lia.appendChild(span);
// lia.appendChild(btnRev);
// span.innerText='my name is emma';
// elemtDisplay.appendChild(lia);
// //===========================
// const lib =document.createElement('li');
// lib.classList='item';
// const spanb =document.createElement('span');
// spanb.classList='name';
// spanb.innerText='my name is emma';
// const btnRevb = document.createElement('button');
// btnRevb.innerText='Remove';
// btnRevb.classList ='btnremove';
// lib.appendChild(spanb);
// lib.appendChild(btnRevb);
// spanb.innerText='my name is Kem';
// elemtDisplay.appendChild(lib);



// //=========================================
// const lia =document.createElement('li');
// lia.classList='item';
// const span =document.createElement('span');
// span.classList='name';
// span.innerText='my name is emma';
// const btnRev = document.createElement('button');
// btnRev.innerText='Remove';
// btnRev.classList ='btnremove';
// lia.appendChild(span);
// lia.appendChild(btnRev);
// span.innerText='my name is Kem';
// elemtDisplay.appendChild(lia);
// //==========================================
// const lia =document.createElement('li');
// lia.classList='item';
// const span =document.createElement('span');
// span.classList='name';
// span.innerText='my name is emma';
// const btnRev = document.createElement('button');
// btnRev.innerText='Remove';
// btnRev.classList ='btnremove';
// lia.appendChild(span);
// lia.appendChild(btnRev);
// span.innerText='my name is Kem';
// elemtDisplay.appendChild(lia);
// //==========================================
// const lia =document.createElement('li');
// lia.classList='item';
// const span =document.createElement('span');
// span.classList='name';
// span.innerText='my name is emma';
// const btnRev = document.createElement('button');
// btnRev.innerText='Remove';
// btnRev.classList ='btnremove';
// lia.appendChild(span);
// lia.appendChild(btnRev);
// span.innerText='my name is Kem';
// elemtDisplay.appendChild(lia);
// //=================================================
// const lia =document.createElement('li');
// lia.classList='item';
// const span =document.createElement('span');
// span.classList='name';
// span.innerText='my name is emma';
// const btnRev = document.createElement('button');
// btnRev.innerText='Remove';
// btnRev.classList ='btnremove';
// lia.appendChild(span);
// lia.appendChild(btnRev);
// span.innerText='my name is Kem';
// elemtDisplay.appendChild(lia);

const names = document.querySelectorAll('.item');
const removeBtn = document.querySelectorAll('.btnremove');
 removeBtn.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        event.target.parentNode.style.display = 'none';
    });
 });
console.log(removeBtn);