async function getDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("product_id");
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(response);
    const details = response.data;
    console.log(details);
    document.querySelector(".title").textContent = details.title;
    document.querySelector("img").src = details.thumbnail;
    
    document.querySelector(".price").textContent = details.price + "$";
    
    document.querySelector(".description").textContent = details.description;
}
  getDetails();