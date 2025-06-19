// const mul = (a, b) => {
//     return a * b;
// }
// console.log(mul(2, 3));


//const object = {
//    name: "John",
//    age: 30,
//    message: function() {
//   let name = this.name;
//     return `Hello I am ${name}`;
//  }   
//}
//console.log(object.name);
//console.log(object.message());

const numbers=[1,3,4,88,21,-35,-26]
const mappednum=numbers.map((n)=>n*3)
console.log(mappednum);

const posNum=numbers.filter((n)=>n>0)
console.log(posNum);


const oddNum=numbers.filter((n)=>n%2!==0)
console.log(oddNum);

const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);

const product=[
    {name:"tv",price:8000},
    {name:"phone",price:20000},
    {name:"laptop",price:50000},
    {name:"tablet",price:1500},
    {name:"watch",price:2500},
    {name:"headphone",price:3000},
    {name:'ac',price:9500}
]
const totalPrice=product.reduce((sum,n)=>sum+n.price,0)
console.log(totalPrice);


const price=product.filter((n)=>n.price>5000,0)
console.log(price);

const user={name:'CR7',password:'1234'}
const {name,password}=user
console.log(name);
console.log(password);

//destructuring array
const arr=[1,2,3,4,5]
const [first,second,third]=arr
console.log(first);
console.log(second);
console.log(third);

//spread operator
const arr1=[1,2,3]
const arr2=[4,5,6]
const copyArr=[...arr1,...arr2,7]
console.log(copyArr);

//async function
async function fetchUsers() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');
        const data=await response.json();
        //console.log(data);
        data.map((a)=>console.log(a.title));
    }
    catch{
        console.log('ERROR');
    }
    
}
fetchUsers();npx create-vite@latest
