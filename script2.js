const list = document.getElementById('list')
const btnAddArray = Array.from(document.getElementsByClassName('btn-add'))

const item = document.getElementById('add-item')
btnAddArray[0].addEventListener('click',()=>{
    let li = `
    <span>${item.value}</span>
    <button onClick = complete() >Complete</button>
    <button onClick = delete()>Delete</button>
    `
    list.insertAdjacentHTML("beforeend",li)
})
