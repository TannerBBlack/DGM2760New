function duplicateMenu() {
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    let newList = document.createElement('ul')

    topList.forEach(menuItem => {
        let  newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.textContent = menuItem.textContent;
        newLink.setAttribute('href', menuItem.getAttribute('href'))
        newLI.setAttribute('li', menuItem.getAttribute('li'))
        document.querySelector('#smallNavArea').appendChild(newList)
        newList.appendChild(newLI)
        newLI.appendChild(newLink)
        
    })
}

duplicateMenu()