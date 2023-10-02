const addForm = document.querySelector('.add')
const list = document.querySelector('')
const alertmsg = document.getElementById('alertmsg')

const saveMemo = memoText => {
  const html = `<li
        class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${memoText}</span>
          <i class="far fa-trash-alt delete"></i>
          </li>`
}

addForm.addEventListener('submit', e => {

})


else {
  alertmsg.classList.remove('hidden')
}

});

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')){
      e.target.parentElement.remvoe();
  }
})

search.addEventListener('keyup', e=>{
    const searchText = search.value;
    console.log(searchText);
})