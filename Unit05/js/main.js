// Create an array with 4 trees listed 
let trees = ['oak', 'Pine', 'aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

// Display the list of trees inside of the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
}

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('peartree')
    listTrees()
}

// remove trees from list
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the first tree element because there are no trees. Go find the lorax'
    }
}

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 0) {
        trees.splice(1, 1);
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the second tree element because there are no trees. Go find the lorax'
    }
}

document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop();
        listTrees()
    } else {
        errorElement.textContent = 'I cannot remove the last tree element because there are no trees. Go find the lorax'
    }
}

// Sort Lists
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

// Change to lowercase 
document.querySelector('#lowerTrees').onclick = () => {
    trees = trees.map(function(tree){ return tree.toLowerCase() })
    listTrees()
}

// display a specific tree
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        errorElement.textContent = trees[2]
        listTrees()
    } else {
        errorElement.textContent = 'I cannot display the third tree element because there are no trees. Go find the lorax'
    }
}

document.querySelector('#showName4').onclick = () => {
    if (trees.length > 2) {
        errorElement.textContent = trees[3]
        listTrees()
    } else {
        errorElement.textContent = 'I cannot display the fourth tree element because there are no trees. Go find the lorax'
    }
}