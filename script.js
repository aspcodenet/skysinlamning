
const sectionList = document.getElementById('sectionList');
const sectionNew = document.getElementById('sectionNew');
const sectionEdit = document.getElementById('sectionEdit');

const newLink = document.getElementById('newLink');
const listLink = document.getElementById('listLink');
const productTableBody =  document.getElementById('productTableBody');
const submitNewButton = document.getElementById('submitNewButton');
const newName =  document.getElementById('newName');
const editName =  document.getElementById('editName');
const submitEditButton = document.getElementById('submitEditButton');


class Product {
    constructor(namn, price, category) {
      this.namn = namn;
      this.price = price;
      this.category = category;
    }
  }

var product1 = new Product("Banan",12,"Frukt");
var product2 = new Product("Äpple",13,"Frukt");
var product3 = new Product("Mugg",11,"Köksartiklar");

product3.hej = "1234";
console.log(product3);

// Vi måste säkerställa att när man skapar objekt
// av viss "typ" så ska alla objekt ha samma properties

const products = [product1, product2, product3];



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
        editName.value = product.namn;
        sectionEdit.style.display = "block";
        sectionList.style.display = "none";
        sectionNew.style.display = "none";
    });

    return tr;
}


products.forEach( (item)=>{
     let tr = createNewTr(item);
     productTableBody.appendChild(tr);
}  );

// for(let i=0; i < products.length; i++ ){
//     let namn = products[i];
//     let tr = createNewTr(namn);
//     productTableBody.appendChild(tr);
// }





//loopa product - för varje 
//          skapa ett TR element
//              skapa ett TD element
//                  td:n ska ha prodyctnamnet som innertext
//          adda TR till productTableBody




console.log(newLink);

newLink.addEventListener("click", ()=>{
    newName.value = '';
    sectionList.style.display = "none";
    sectionEdit.style.display = "none";
    sectionNew.style.display = "block";
});

listLink.addEventListener("click", ()=>{
    sectionEdit.style.display = "none";
    sectionList.style.display = "block";
    sectionNew.style.display = "none";
});

// addEventListener("click", ()=>{
//     sectionEdit.style.display = "block";
//     sectionList.style.display = "none";
//     sectionNew.style.display = "none";
// });



submitNewButton.addEventListener("click", ()=>{
    let nyttNamn = newName.value;

    let prod = new Product(nyttNamn,122,"1yellow");    

    products.push(prod);

    let tr = createNewTr(prod);
    productTableBody.appendChild(tr);

    sectionList.style.display = "block";
    sectionNew.style.display = "none";
    sectionEdit.style.display = "none";
});



