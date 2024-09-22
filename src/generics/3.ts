function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const objA = { name: "ObjectA", age: 30 };
const objB = { job: "Developer", skills: ["TypeScript", "React"] };

const mergedObject = merge(objA, objB);
console.log(mergedObject); 