const getProducts = async ()=>{
  
  const features = document.getElementsByClassName('features')[0];
  features.innerHTML = `<p>loading</p>`;
  
  
  try {
    const response = await fetch("https://mock.apidog.com/m1/583947-548649-default/products");
    const result = await response.json();
    
    let resultHTMl = `<div class="container text-center">
    <div class="row">`;
    result.products.forEach(element => {
      resultHTMl += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
        <div class="margin">
          <img src="${element.image}" >
          <h3 class="product_title">${element.name}</h3>
          <h4 class="product_title">${element.price}</h4>
        </div>
      </div>`;
    });
    resultHTMl += `</div>
  </div>`;
    features.innerHTML =  resultHTMl;
  } catch (error) {
    features.innerHTML = `<p>failed to load products</p>`;
    console.log(error);
  }
  
}

getProducts();