let getRandomNumber = function (start, range) {
    let getRandom = Math.floor((Math.random() * range) + start);
    while (getRandom < range) {
        let getRandom = Math.floor((Math.random() * range) + start);
    }
    return getRandom;
}

console.log(getRandomNumber(300, 320));