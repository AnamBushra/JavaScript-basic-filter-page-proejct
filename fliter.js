const data=[
    {
        id:1,
        name:"Daniel Wellington Pink",
        img:"./img/watch1.jpg",
        price:1250,
        cat:"Dress",
    },
    {
        id:2,
        name:"Titan Silver",
        img:"./img/watch2.jpg",
        price:899,
        cat:"Casual",
    },
    {
        id:3,
        name:"Baby Girl Pink",
        img:"./img/watch3.jpg",
        price:1250,
        cat:"Sports",
    },
    {
        id:4,
        name:"Oleev's watch",
        img:"./img/watch4.jpg",
        price:3550,
        cat:"Luxury",
    },
    {
        id:5,
        name:"Red Titan",
        img:"./img/watch5.jpg",
        price:560,
        cat:"Sports",
    },
    {
        id:6,
        name:"Oleev's watch blue",
        img:"./img/watch6.jpeg",
        price:4000,
        cat:"Luxury",
    },
    {
        id:7,
        name:"Ajanta green",
        img:"./img/watch7.jpg",
        price:1700,
        cat:"Dress",
    }
    ,
    {
        id:8,
        name:"Bracelet watch",
        img:"./img/watch8.jpg",
        price:1100,
        cat:"Casual",
    },
    {
        id:9,
        name:"Aesthetic",
        img:"./img/watch9.jpg",
        price:1499,
        cat:"Dress",
    },
];

const productsContainer=document.querySelector(".products")
const searchInput=document.querySelector(".search")
const catsContainer=document.querySelector(".cats")
const priceRange=document.querySelector(".priceRange")
const priceValue=document.querySelector(".priceValue")

const showProducts=(filteredProducts)=>{
    productsContainer.innerHTML=filteredProducts.map((product)=>
    `
    <div class="product">
                    <img src=${product.img} alt="">
                    <span class="name">${product.name}</span>
                    <span class="priceText">${product.price}</span>
                </div>`).join("");
};
showProducts(data);

searchInput.addEventListener("keyup",(e)=>{
    const value=e.target.value.toLowerCase();
    if(value){
        showProducts(
            data.filter((item)=> item.name.toLowerCase().indexOf(value)!==-1));
    }
    else{
        showProducts(data);
    }
});

const setCategories=()=>{
    const allCats=data.map((item)=>item.cat);
    const categories=[
        "All",
        ...allCats.filter((item,i)=>{
            return allCats.indexOf(item)===i;
        }),
    ];
    catsContainer.innerHTML=categories.map((cat) =>
        `
        <span class="cat">${cat}</span>
        `
        ).join("");

        catsContainer.addEventListener("click",(e)=>{
            const selectedCat=e.target.textContent;
            selectedCat==="All"? showProducts(data): showProducts(data.filter((item)=>item.cat===selectedCat));
        })
};

const setPrices=()=>{
    const priceList=data.map((item)=>item.price);
    const minPrice=Math.min(...priceList)
    const maxPrice=Math.max(...priceList)
    priceRange.min=minPrice
    priceRange.max=maxPrice
    priceValue.value=maxPrice
    priceValue.textContent="Rs." + maxPrice

    priceRange.addEventListener("input",(e)=>{
        priceValue.textContent="Rs." + e.target.value;
        showProducts(data.filter((item)=>item.price<=e.target.value));
    })
};
setCategories();
setPrices();