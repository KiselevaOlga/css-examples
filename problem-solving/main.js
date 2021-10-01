const people = [
    {name: 'Frank', age: 42, job: 'Taxi Driver'},
    {name: 'Sarah', age: 51, job: 'Architect'},
    {name: 'George', age: 27, job: 'Shepard'},
];

const result = ['Frank', 'Sarah', 'George'];

// const newRes = people.map(element => element.name);
// console.log(newRes);
const forRes = [] 
people.forEach((element) => forRes.push(element.name));
console.log(forRes);


let resArr = []
const newestRes = people.filter(element => element.age > 30).map(element => element.name);
console.log(newestRes);

const words = ['apple', 'banana', 'orange', 'watermelon'];
const res = words.some(fruit => fruit === 'orange');
console.log(res)

const numbers = [1, 2, 3, 4, 5];
const subsRes = numbers.reduce(((finalRes, num)=>{
    console.log('finalRes', finalRes)
    return finalRes - num
}), 1000);
console.log(subsRes);

// Starting at 1000, please return the value of 985 by subtracting each number in the array, using the reduce function

// const MyDiv = (props) => {
//     const [myClassName, setClassName] = useState("InitialName");
//     useEffect(() => {
//         setClassName("SecondClassName");
//     }, []);
//     return (
//         <div className={myClassName}>
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         </div>
//     )
// };

// export default MyDiv;