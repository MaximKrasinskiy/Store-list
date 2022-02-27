console.log(Stores);
console.log("hi");

let stor = document.querySelector(".sidebar__list");
let aside = document.querySelector('aside');
let rightPage = document.querySelector(".store__details");
let headerContact = document.querySelector('.header__top-details');
let liTag = document.querySelectorAll('.sidebar__item')
console.log(liTag)
let tbody = document.querySelector("tbody");

const addStor = () => {
  stor.innerHTML = Stores.map((elem) => {
    return `<li data-store-id="${elem.id}" class="sidebar__item">
        <div class="item__name">
            <div class="item__fullname">${elem.Name}</div>
            <div class="item__number">
                <p class="number">${elem.FloorArea}</p>
                <p class="second-p">sq.m</p>
            </div>
        </div>
        <div class="item__address">${elem.Address}</div>
    </li>
    `;
  }).join("");
};
addStor();



aside.addEventListener('click', () => {
    rightPage.classList.add('visible')
})

stor.addEventListener("click", function (e) {
  const liTag = e.target.closest("li");
  console.log(liTag.dataset.storeId);
  const storeId = liTag.dataset.storeId;
  let separateStore = Stores.find(store => store.id === +storeId);
  console.log(separateStore); 

  const renderDetails = () => {
    let count = 1;
  tbody.innerHTML =  separateStore.rel_Products.map(elem => {

          return ` <tr  data-detail-id="${elem.id}">
          <td> <span class="span-name">${elem.Name}</span>
          <p class="count">${count++}</p>
          </td>
          <td><span class="span-number">${elem.Price}</span><span>USD</span></td>
          <td>${elem.Specs}</td>
          <td><p class='suplier-info'>${elem.SupplierInfo}</p></td>
          <td><p class='made-in'>${elem.MadeIn}</p></td>
          <td>${elem.ProductionCompanyName}</td>
          <td>
          <img src="./images/${elem.Rating > 0 ? "star-rating.png" : "emptystar-rating.png" }" alt= "rating">
          <img src="./images/${elem.Rating > 1 ? "star-rating.png" : "emptystar-rating.png" }" alt= "rating">
          <img src="./images/${elem.Rating > 2 ? "star-rating.png" : "emptystar-rating.png" }" alt= "rating">
          <img src="./images/${elem.Rating > 3 ? "star-rating.png" : "emptystar-rating.png" }" alt= "rating">
          <img src="./images/${elem.Rating > 4 ? "star-rating.png" : "emptystar-rating.png" }" alt= "rating">
          </td>
      </tr>`
        }).join('');
  }
  renderDetails();
});

let btnSearch = document.querySelector('.btn__search');
let input = document.querySelector('#store__search');

btnSearch.addEventListener('click', ()=> {
    aside
let max = Stores.find(elem =>{
     if(input.value == elem.FloorArea || input.value == elem.Name || input.value == elem.Address){
         return   stor.innerHTML = `<li data-store-id="${elem.id}" class="sidebar__item">
         <div class="item__name">
             <div class="item__fullname">${elem.Name}</div>
             <div class="item__number">
                 <p class="number">${elem.FloorArea}</p>
                 <p class="second-p">sq.m</p>
             </div>
         </div>
         <div class="item__address">${elem.Address}</div>
       </li>`
     }
  })
console.log(max)
})
 
Stores.find(element => {
  if(element.id === 1){
    console.log(element)
  }
})


  