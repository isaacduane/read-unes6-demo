var arrayLike ={
    0:'a',
    1:'b',
    length:2,
    *[Symbol.iterator](){
        yield this[1];
        yield this[0];
    },
};

console.log(Array.from(arrayLike));
