let cardParent = document.getElementById("cardParent")

console.log(cardParent)


const getUsers = async () => {
 let apiRes = await fetch("http://127.0.0.1:8000/users")

let data = await apiRes.json()


let returnMap = data.data.map((item) => {
    return `<div class="card" style="width: 18rem">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${item.username}</h5>
          <p class="card-text">
           ${item.firstName} ${item.lastName}
          </p>
          <a href="#" class="btn btn-primary">${item.jobType}</a>
        </div>
      </div>`
})

cardParent.innerHTML = returnMap.join(",")
// console.log(returnMap)
}

getUsers()

