
const sectionList = document.getElementById('sectionList');
const sectionNew = document.getElementById('sectionNew');
const newLink = document.getElementById('newLink');
const listLink = document.getElementById('listLink');
const productTableBody =  document.getElementById('productTableBody');
const submitNewButton = document.getElementById('submitNewButton');
const newName =  document.getElementById('newName');


const products = ["Banan", "Mugg", "Penna"];


function createNewTr(namn){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerText = namn;
    return tr;
}

for(let i=0; i < products.length; i++ ){
    let namn = products[i];
    let tr = createNewTr(namn);
    productTableBody.appendChild(tr);
}





//loopa product - för varje 
//          skapa ett TR element
//              skapa ett TD element
//                  td:n ska ha prodyctnamnet som innertext
//          adda TR till productTableBody




console.log(newLink);

newLink.addEventListener("click", ()=>{
    newName.value = '';
    sectionList.style.display = "none";
    sectionNew.style.display = "block";
});

listLink.addEventListener("click", ()=>{
    sectionList.style.display = "block";
    sectionNew.style.display = "none";
});


submitNewButton.addEventListener("click", ()=>{
    let nyttNamn = newName.value;
    products.push(nyttNamn);

    let tr = createNewTr(nyttNamn);
    productTableBody.appendChild(tr);

    sectionList.style.display = "block";
    sectionNew.style.display = "none";
});



