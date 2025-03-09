let course = {
    name: 'JavaScript',
    price: 1000,
    image: 'image-address',
    children: {
        name: 'ReactJS'
    }
}

// let { name, price, image, children } = course;
// console.log(name, price, image, children);

let {name : naam} = course;
console.log(naam); // khud ka naam de skte h