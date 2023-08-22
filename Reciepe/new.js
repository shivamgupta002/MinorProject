// api-> https://api.spoonacular.com/recipes/random?number=10&apiKey=bcdd22855b594b22be2720d676a8c9cd 

const API_KEY = 'bcdd22855b594b22be2720d676a8c9cd';
const box = document.querySelector('.box')

window.addEventListener('DOMContentLoaded',()=>{
    getData()
})
async function getData(){
    const url = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)
    const json = await url.json()
    console.log(json)
    setData(json?.recipes)
}

function setData(data){
    data.map(item=>{
        const div = document.createElement('div')
        div.className = 'card'
        const img = document.createElement('img')
        img.src = item.image
        const info = document.createElement('div')
        info.className = 'info'
        const title = document.createElement('h2')
        title.textContent = item.title
        const ins = document.createElement('p')
        ins.textContent = item.extendedIngredients.map(pro=>{
         return pro.original
        }).join(' , ')
        const btn = document.createElement('button')
        btn.textContent = 'View recipe'
        btn.className = 'readBtn'
        const a = document.createElement('a')
        a.href = item.sourceUrl
        a.target = '_blank'
        box.append(div)
        div.append(img)
        div.append(info)
        info.append(title)
        info.append(ins)
        a.append(btn)
        info.append(a)
    }) 
}
