const chicken = document.querySelector('p')
chicken.innerText="양념치킨"

const classcheck = document.querySelector('.content')
classcheck.innerHTML += '<h2>올해 최고의 치킨</h2>'

const all = document.querySelectorAll('p')
console.log(all);

all.forEach(param => {
    param.innerText +=' 양념치킨'
});

const alphabets = ['A', 'B', 'C']
alphabets.forEach(val =>{
  classcheck.innerHTML += `<p>${val}</p>`
})

const a1 = 'a'
const a2 = 'b'
const a3 = 'c'

const result = a1 + a2 + a3;

const result1 = '선생님' + a3;
const result2 = `선생님 ${a3}`

//function NormalFUnc(test){
 //   console.log(NormalFunc)
//}

//NormalFUnc = (test) => {

//}