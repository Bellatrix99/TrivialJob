// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     while(true){
//       yield curr;
//       [prev, curr] = [curr, prev + curr];
//     }
//   }

//   for (let n of fibonacci()) {
//     if (n > 1000) break;
//     console.log(n);
//   }


function* g() {
    yield 1;
    console.log('throwing an exception');
    yield 2;
    yield 3;
}

let gg = g();
console.log(gg.next());
console.log(gg.next());
// console.log(gg.next());

