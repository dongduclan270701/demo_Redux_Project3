var initialState = [
    {
        id : 1,
        name : 'Iphone 7',
        image : 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 500,
        inventory : 6,
        rating : 3
    },
    {
        id : 2,
        name : 'Iphone 8',
        image : 'https://cdn.tgdd.vn/Products/Images/42/114113/iphone-8-64gb-hh-600x600.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 600,
        inventory : 7,
        rating : 4
    },
    {
        id : 3,
        name : 'Iphone X',
        image : 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg',
        description : 'Sản phẩm do apple sản xuất',
        price : 700,
        inventory : 9,
        rating : 5
    },
]

const products = ( state = initialState , action) => {
    switch (action.type){
        default : return [...state];
    }
}

export default products;