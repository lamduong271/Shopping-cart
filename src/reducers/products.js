var initialState=[
    {
        id:1,
        name:"iphone 7",
        img:"https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/plus/iphone7-plus-black-select-2016?wid=470&hei=556&fmt=png-alpha&qlt=95&.v=1472430090682",
        description:"apple",
        price:700,
        inventory:10,
        rating:4

    },
    {
        id:2,
        name:"iphone 8",
        img:"https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus2-1-400x460.png",
        description:"apple",
        price:900,
        inventory:6,
        rating:3

    },
    {
        id:3,
        name:"iphone x",
        img:"https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png",
        description:"apple",
        price:1200,
        inventory:5,
        rating:5

    }
];
const products=(state=initialState,action)=>{
switch(action.type){
    default:
    return [...state];
}
}
export default products;