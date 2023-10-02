const user = {
  name: '홍길동',
  age: 30,
  email: 'test@test.com',
  address: '서울시 용산',
  food: ['김치찌개', '제육볶음'],


payment:function () {
    console.log('결제가 완료 됐습니다')
    return this.deliverystart();
},

deliverystart:function (){
  console.log('배달이 시작됐습니다.')
}
}

user.payment();
user.deliverystart();

//console.log(user.name)
//console.log(user.age)
//console.log(user)
//console.log(user.food[0])
//console.log(user.food[1])
