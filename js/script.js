
const a = ["pavi", 123, true, null, undefined, { a: 10, b: 20, c: 30 }, function () { console.log("hi hello") }, [1, 2, 3]];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6].b);
a[6]()
console.log(a[7][1]);

console.log("-------------------------");



const b = {
    name: "pavi",
    age: 22,
    clg_pass: true,
    class_end: null,
    mark: undefined,
    obj: { a: 10, b: 20, c: 30 },
    fn: function () { console.log("hi hello")},
    arr: [1, 2, 3]
}

console.log(  b.name  )
console.log( b.age )
console.log( b.clg_pass )
console.log( b.class_end )
console.log( b.mark )
console.log(  b.obj )
console.log(  b.fn )
console.log(  b.arr )
b.fn()

