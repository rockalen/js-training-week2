var obj = {
    data: {
      uuid: '1e46f421-bbae-4212-8539-55ea1c5329cf',
      products: [],
    },
    getData: function() {
      var vm = this;
      var url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;
  
      axios.get(url)
        .then(function (response) {
        vm.data.products = response.data.data;
        vm.render();
      })
    },
    render: function() {
      var app = document.getElementById('app');
      var products = this.data.products;
      var str = '';
      products.forEach(function(item) {
        str += `
        <div class="card">
        <img src="${ item.imageUrl[0] }" class="card-img-top">
        <div class="card-body">
        <h5 class="card-title">${ item.title }</h5>
        <p class="card-text">${ item.content }</p>
        </div>
        </div>`;
      });
      app.innerHTML = str;
    }
  }
  
  obj.getData();