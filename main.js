const form = document.querySelector("form")
const tbody = document.querySelector("tbody")
const addBtn = document.querySelector(".add")


let userData = []
let currentId = 0;

function getElemetId(param) {
    userData = userData.filter(item => item.id !== param)
    tbody.innerHTML = ''
    userData.forEach(element => {
        tr = `<tr>
            <td><span>${element.firstname}</span></td>
            <td>
                <img src = "./icons/delete1.png" class="btn btn-danger" onclick='getElemetId(${element.id})'>
            </td>
        </tr>`
        tbody.innerHTML += tr
    });
}
let result = []

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    id = ++currentId
    const data = new FormData(form)
   
    const firstname = data.get('firstname')
    userData.push({
        id: id,
        firstname: firstname,
    })
    tr = `<tr>
    <td><span>${firstname}</span></td>
    <td>
        <img src = "./icons/delete1.png"  onmouseover="hover(this);"/ onmouseout="hoverOut(this)"/ class="btn btn-danger" onclick='getElemetId(${id})'>
    </td>
</tr>`
result.push(firstname)
    tbody.innerHTML += tr
    form.reset()
    
})
function hover(img){
 img.src = "./icons/delete2.png"

}
function hoverOut(img){
    img.src = "./icons/delete1.png";
   }

// sort area
let nameSort = document.querySelector(".firstsortimage")
let namesorter =document.querySelector(".secondsortimage")
let namesotrall =document.querySelector(".sortimage")

namesorter.style.display = 'none'
namesotrall.addEventListener("click", (e) => {
e.preventDefault()

    if (nameSort.style.display === 'block') {
       nameSort.style.display = 'none'
       namesorter.style.display = 'block'

     son = result.sort((a, b) => {
          if (a<b){return 1}
    else if(a>b){return -1} 
    })
    tbody.innerHTML = ""
       son.forEach((a)=>{
          tr = `<tr>
       <td>${a}</td>
       <td>
           <img src = "./icons/delete1.png"  onmouseover="hover(this);"/ onmouseout="hoverOut(this)"/ class="btn btn-danger" onclick='getElemetId(${id})'>
       </td>
   </tr>`
   tbody.innerHTML += tr
       })
       
    } else {
        nameSort.style.display = 'block'
        namesorter.style.display = 'none'
        
      son1 = result.sort((a, b) => {
          if (a<b){return -1}
     else if(a>b){return 1}
     })
     tbody.innerHTML = ""
       son1.forEach((a)=>{
          tr = `<tr>
       <td>${a}</td>
       <td>
           <img src = "./icons/delete1.png"  onmouseover="hover(this);"/ onmouseout="hoverOut(this)"/ class="btn btn-danger" onclick='getElemetId(${id})'>
       </td>
   </tr>`
   tbody.innerHTML += tr
       })
      
    }
 })
 