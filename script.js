new Vue({
  el: "#shop",
  data: {
    recentlyClickedItem:0,
    cart:0,
    instruments:[{
    id:0,
    name:"Piano",
    type:"String",
    brand:"Fender",
    price:15000, 
    image:"https://media.sweetwater.com/api/i/q-82__ha-e71eee0a573a6251__hmac-266fee025c4acd5e2fe1dbba86cd67784617fdb3/images/items/750/CVP809GPE-large.jpg",
    inCart:false
  },
  {
    id:1,
    name:"Guitar",
    type:"Strings",
    brand:"Fender",
    price:100, 
    image:"https://images-na.ssl-images-amazon.com/images/I/71QWkR-IHEL._AC_SY879_.jpg",
    inCart:false
  },
  {
    id:2,
    name:"Ukelele",
    type:"Strings",
    brand:"Fender",
    price:100,
    image:"https://media.guitarcenter.com/is/image/MMGS7/Limited-Edition-Zuma-Concert-Ukulele-Surf-Green/L25286000001000-00-500x500.jpg",
    inCart:false
  },
  {
    id:3,
    name:"Drums",
    type:"Percussion",
    brand:"Yamaha",
    price:800,
    image:"https://images.static-thomann.de/pics/bdb/467182/14593933_800.jpg",
    inCart:false
  },
  {
    id:4,
    name:"Accordian",
    type:"Wind",
    brand:"Yamaha",
    price:540, 
    image:"https://i.ebayimg.com/images/g/fWcAAOSwDVVgIULa/s-l640.jpg",
    inCart:false
  },
  {
    id:5,
    name:"Recorder",
    type:"Wind",
    brand:"Yamaha",
    price:20,
image:"https://www.mollenhauer.com/media/plg_system_vmmagiczoomplus/magictoolbox_cache/80543c918ed05ba09145ba56f4b3651f/9/4/94/original/4083223247/Canta_Sopran_510fe1a49bbda.png",
    inCart:false
  },
  {
    id:6,
    name:"Banjo",
    type:"Strings",
    brand:"Maton",
    price:600,
    image:"https://www.banjoteacher.com/4913-large_default_2x/goldstar-gf-100jd-jd-crowe-model-banjo.jpg",
    inCart:false
  },
  {
    id:7,
    name:"Clarinet",
    type:"Wind",
    brand:"Maton",
    price:320,
    image:"https://www.mmimports.com/wp-content/uploads/2012/05/Buffet-Crampon-RC-Prestige-A-Clarinet.jpg",
    inCart:false
  },
  {
    id:8,
    name:"Tuba",
    type:"Brass",
    brand:"Maton",
    price:700,
    image:"https://media.musicarts.com/is/image/MMGS7/483649000998000-00-600x600.jpg",
    inCart:false
  }]},
  methods: {
    resetCart: function(){
      this.cart = 0;
      for(var i = 0; i < this.instruments.length; i++) {
        if(this.instruments[i].inCart) {
          this.instruments[i].inCart = false;
        }
      }
    },
    showProduct: function(item) {
      var popUp = document.getElementById("popUp");
      popUp.setAttribute("class", "popUp show");
      document.getElementById("imageProductDetail").src = item.image;
      document.getElementById("imageProductPara").innerHTML = "Name: " + item.name + "<br>Type: " + item.type + "<br>Brand: " + item.brand + "<br>Price: $" + item.price;
      this.recentlyClickedItem = item.id;
    },
    hideProduct: function() {
      var popUp = document.getElementById("popUp");
      popUp.setAttribute("class", "popUp hide");
    },
    addtoCart: function(id) {
      for(var i = 0; i < this.instruments.length; i++) {
        if(id === this.instruments[i].id) {
          this.instruments[i].inCart = true;
          this.cart++;
        }
      }
    },
    getRCI: function() {
      return this.recentlyClickedItem;
    },
    showAddNew: function(item) {
      var addNew = document.getElementById("addNew");
      addNew.setAttribute("class", "addNew show");
    },
    hideAddNew: function() {
      var addNew = document.getElementById("addNew");
      addNew.setAttribute("class", "addNew hide");
    },
    addNew: function() {
      var obj = {
        id:this.instruments[this.instruments.length - 1].id + 1,
        name:document.getElementById("name").value,
        type:document.getElementById("type").value,
        brand:document.getElementById("brand").value,
        price:document.getElementById("price").value, 
        image:document.getElementById("image").value,
        inCart:false
      }
      this.instruments.push(obj);
      this.hideAddNew();
    }
  }
});