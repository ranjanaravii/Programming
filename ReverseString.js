
function reverseString(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Invalid Input';
    }

    const reversedArray = [];
    const totalItems = str.length - 1;
    for (let i = totalItems; i >= 0; i--) {
        reversedArray.push(str[i]);
    }

    return reversedArray.join('');
}

const reverse2 = str => [...str].reverse().join('');

console.log(reverseString('Hello')); // olleH