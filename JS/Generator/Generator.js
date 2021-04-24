function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (; ;) {
        yield curr;
        [prev, cur] = [curr, prev + curr]
    }
}

for (let n of fibonacci()) {
    if (n > 1000) break;
    console.log(n);
}