

let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-itmes-list");

function addKitchenItem() {
  let kitchenInputdata = kitchenInput.value;
  let li = document.createElement("li");
  spanEl = document.createElement("span");
  li.appendChild( spanEl );
  spanEl.innerText = kitchenInputdata;
  kitchenItemsList.appendChild(li);
  kitchenInput.value = "";
  kitchenInput.focus();

  let trashBtn = document.createElement("i");
  trashBtn.classList.add("fas", "fa-trash");
  li.appendChild(trashBtn);

  let editBtn = document.createElement("i");
  editBtn.classList.add('fas', 'fa-edit');
  li.appendChild(editBtn);
}



window.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    addKitchenItem();
  }
});


function deleteKitchenItem(event) {
  if(event.target.classList[1]==="fa-trash"){
    let item = event.target.parentElement;
    item.classList.add("slide-out");
    item.addEventListener("transitionend", function(){
      item.remove();
    })
    
  }
}


function editKitchenItem(event) {
  if(event.target.classList[1] ==="fa-edit"){
    let editedValue = prompt("Enter new value");
    let item = event.target.parentElement;
    let spanEl = item.querySelector("span");
    spanEl.innerText = editedValue;
  }
}

addBtn.addEventListener("click", addKitchenItem);
kitchenItemsList.addEventListener("click", deleteKitchenItem);
kitchenItemsList.addEventListener("click", editKitchenItem);



