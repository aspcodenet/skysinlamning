
const sectionList = document.getElementById('sectionList');
const sectionNew = document.getElementById('sectionNew');
const sectionEdit = document.getElementById('sectionEdit');

const newLink = document.getElementById('newLink');
const listLink = document.getElementById('listLink');
const productTableBody =  document.getElementById('productTableBody');
const submitNewButton = document.getElementById('submitNewButton');
const newName =  document.getElementById('newName');
const newPrice =  document.getElementById('newPrice');
const newCategory =  document.getElementById('newCategory');
const editName =  document.getElementById('editName');
const editPrice =  document.getElementById('editPrice');
const editCategory =  document.getElementById('editCategory');
const submitEditButton = document.getElementById('submitEditButton');


class Product {
    constructor(id, namn, price, category) {
      this.id = id;
      this.namn = namn;
      this.price = price;
      this.category = category;
    }
  }


const products = [];

function fetchAll()
{
    const request = {
        headers: {
            'Content-Type': 'application/json' 
          },
          method: 'GET',
    }
    
    fetch('https://jsonplaceholder.typicode.com/todos', request )
        .then(response => response.json())
        .then(data => {
            data.forEach((item) => {
                const p = new Product(item.id, 
                    item.title, 
                    item.userId,
                     "Hejsan");
                products.push(p)
            });
            console.log(products);
            refreshItems(products);
        }
        );
    
    }

//


let currentlyEditingProduct = null;

function createNewTr(product){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerText = product.namn;

    let td11 = document.createElement('td');
    tr.appendChild(td11);
    td11.innerText = product.price;

    let  td111 = document.createElement('td');
    tr.appendChild(td111);
    td111.innerText = product.category;



    let td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.innerHTML = '<i class="bi bi-pencil-square"></i>'

    td2.addEventListener("click", ()=>{
        currentlyEditingProduct = product;
        editName.value = product.namn;
        editPrice.value = product.price;
        editCategory.value = product.category;
        sectionEdit.style.display = "block";
        sectionList.style.display = "none";
        sectionNew.style.display = "none";
    });

    return tr;
}

function refreshItems(items){
    productTableBody.innerHTML='';
    items.forEach( (item)=>{
        let tr = createNewTr(item);
        productTableBody.appendChild(tr);
   }  );
}

fetchAll();

newLink.addEventListener("click", ()=>{
    newName.value = '';
    sectionList.style.display = "none";
    sectionEdit.style.display = "none";
    sectionNew.style.display = "block";
});

submitEditButton.addEventListener("click",()=>{
    // mappa inputs editName, editprice -> objektet
    currentlyEditingProduct.namn = editName.value;
    currentlyEditingProduct.price = editPrice.value;
    currentlyEditingProduct.category = editCategory.value;


    const request =  {
        method: 'PUT',
        body: JSON.stringify({
          id: currentlyEditingProduct.id,
          title: editName.value,
          userId: editPrice.value,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };

    fetch('https://jsonplaceholder.typicode.com/posts/'
            + currentlyEditingProduct.id, request    )
        .then((response) => response.json())
        .then((json) => console.log(json))    

    //refreshitems
    refreshItems(products);
    sectionList.style.display = "block";
    sectionEdit.style.display = "none";
    sectionNew.style.display = "none";

});

listLink.addEventListener("click", ()=>{
    sectionEdit.style.display = "none";
    sectionList.style.display = "block";
    sectionNew.style.display = "none";
});


submitNewButton.addEventListener("click", ()=>{
    const nyaObjektet = {
        title: newName.value,
        userId: newPrice.value,
      };

    const request = {
        method: 'POST',
        body: JSON.stringify(nyaObjektet),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };

    fetch('https://jsonplaceholder.typicode.com/todos', request)
        .then((response) => response.json())
        .then((json) => fetchAll());    





        sectionList.style.display = "block";
        sectionNew.style.display = "none";
        sectionEdit.style.display = "none";
});



