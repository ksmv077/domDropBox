const addDivWork = () => {
    const div = document.createElement('div')
    div.textContent = 'Работа с DOM'
    document.querySelector('body').prepend(div)
}

addDivWork()


const addDOMArticleLink = () => {

    const a = document.createElement('a');
    a.href = 'https://example.com/dom-article';
    a.textContent = 'Статья о DOM';


    const mainDiv = document.getElementById('main');


    mainDiv.appendChild(a);
}

addDOMArticleLink();


const color = (col) => {
    document.querySelector('body').style.backgroundColor = col
}

color('red')


const addList = (text) => {
const li = document.createElement('li')
li.textContent = text
document.getElementById('list').append(li)
}

addList("JS")


const deleteBlock = () => {
const copy = document.getElementById('copyright') 
 copy.remove()
}

deleteBlock()
