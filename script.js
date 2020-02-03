const btnAddArray = Array.from(document.getElementsByClassName('btn-add'))
const item = document.getElementById('add-item')
const list = document.getElementById('list')
let do_item_list, do_item_list1, x
let index = 0

btnAddArray[0].addEventListener('click', () => {

    if (item.value != '') {
        do_item_list = document.createElement('div')
        do_item_list.setAttribute('class', 'item_list')
        x = document.createElement('i')
        x.setAttribute('class', 'far fa-circle')
        x.setAttribute('id', index)
        x.setAttribute('onclick', `checkClicked(${index})`)
        x.style.marginRight = '15px'
        do_item_list.appendChild(x)
        x = document.createTextNode(item.value)
        do_item_list.appendChild(x)
        do_item_list1 = document.createElement('div')
        do_item_list1.setAttribute('class', 'item_list_g')
        do_item_list1.appendChild(do_item_list)
        x = document.createElement('i')
        x.setAttribute('class', 'far fa-trash-alt')
        x.setAttribute('onclick',`removeItem(${index})`)
        do_item_list1.appendChild(x)
        item.value = ''
        if (list.querySelector('.item_list_g') == null)
            list.appendChild(do_item_list1)
        else
            list.insertBefore(do_item_list1, list.querySelector('.item_list_g'))
        index++
    }
              
               
})
const checkClicked = (index) => {
    if (document.getElementById(index).className == 'far fa-circle') {
        document.getElementById(index).parentElement.style.color = '#84443abd'
        document.getElementById(index).className = 'far fa-check-circle'
        console.log('true')
    }
    else {
        document.getElementById(index).parentElement.style.color = 'white'
        document.getElementById(index).className = 'far fa-circle'
        console.log('false')
    }



}



const removeItem = index => {

    console.log('document.getElementById(index).parentElement', document.getElementById(index).parentElement)
    document.getElementById(index).parentElement.parentElement.remove()
}




