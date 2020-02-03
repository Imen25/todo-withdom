const btnAddArray = Array.from(document.getElementsByClassName('btn-add'))
const item = document.getElementById('add-item')
const list = document.getElementById('list')
let do_item_list, do_item_list1, x, btnUndoElement, btnCompleteElement
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

    /*****do */
    /*let btnCompleteElement = Array.from(document.getElementsByClassName('fa-circle'))
    let btnUndoElement = Array.from(document.getElementsByClassName('fa-check-circle'))
    for (let index in btnCompleteElement) {
        btnCompleteElement[index].addEventListener('click', () => {
               

                btnCompleteElement[index].parentElement.style.color = '#84443abd '
                btnCompleteElement[index].className = 'far fa-check-circle'
                btnCompleteElement = Array.from(document.getElementsByClassName('fa-circle'))
                console.log(index,btnCompleteElement[index].className,btnCompleteElement)
                btnUndoElement = Array.from(document.getElementsByClassName('fa-check-circle'))
                console.log(btnUndoElement)
           
            
        })
        
        
    }
    btnUndoElement = Array.from(document.getElementsByClassName('fa-check-circle'))
    for (let index in btnUndoElement) {
        btnUndoElement[index].addEventListener('click', () => {
               
                btnUndoElement[index].parentElement.style.color = 'white '
                btnUndoElement[index].className = 'far fa-circle'
                btnCompleteElement = Array.from(document.getElementsByClassName('fa-circle'))
               // btnUndoElement = Array.from(document.getElementsByClassName('fa-check-circle'))
                console.log(index,btnUndoElement[index].className,btnUndoElement)
            
        })
    }*/
    //let btnUndoElement = Array.from(document.getElementsByClassName('fa-check-circle'))
    //console.log(btnUndoElement)
    //  btnCompleteElement = Array.from(document.getElementsByClassName('far'))
})
const checkClicked = (index) => {

    if (document.getElementById(index).className == 'far fa-circle') {
        document.getElementById(index).parentElement.style.color = '#84443abd'
        document.getElementById(index).className = 'far fa-check-circle'

    }
    if (document.getElementById(index).className == 'far fa-check-circle') {
        document.getElementById(index).parentElement.style.color = 'white'
        document.getElementById(index).className = 'far fa-circle'
    }




    // })

}


// }}
// })

const removeItem = index => {

    console.log('document.getElementById(index).parentElement', document.getElementById(index).parentElement)
    document.getElementById(index).parentElement.parentElement.remove()
}




