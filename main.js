async function getProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const response = await axios.get(`https://dummyjson.com/products`);
  const product = response.data.products;
  console.log(response);
  const result = product
    .map(function (ele) {
      return `
      <div class="row">
      <div class=mainImg> 
      <img src="${ele.thumbnail}" alt="${ele.title}">
      
      <div class=titleDetails>
      <h2 class=title>${ele.title}</h2>
      <button class=details><a href="details.html?product_id=${ele.id}">Details</a></button>
      
      
      </div>
      
      </div> </div>
      `;
    })
    .join(" ");

  document.querySelector(".products .product").innerHTML = result;
}

getProduct();
