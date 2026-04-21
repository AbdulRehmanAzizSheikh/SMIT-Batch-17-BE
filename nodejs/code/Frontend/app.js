let parent = document.getElementById("parent")
console.log(parent)

async function getData (limit = 5, skip = 0){

    let apiRes = await fetch(`http://localhost:8500/api/user?limit=${limit}&skip=${skip}&sort=-age`)
    let result = await apiRes.json()

    cardHTMLUpdate(result)
  
}

getData()



function cardHTMLUpdate ({data}){
 
   let returnHTML =  data.map((item) => `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item?.userName}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${item?.email}</h6>
    
    <a href="#" class="card-link">${item?.age}</a>
  </div>
</div>`
    )
     
     parent.innerHTML = returnHTML.join(" ")
}