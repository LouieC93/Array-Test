"use strict";
const times = 699999;
function a1() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(i % 2 ? i : i);
    }
}
function a2() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(i % 2 ? i : { count: i });
    }
}
function a3() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(i % 2 ? i : { count: `${i}` });
    }
}
function a4() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(i % 2 ? i : `${i}`);
    }
}
function a5() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(i % 2 ? '1' : true);
    }
}
function b1() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(i);
    }
}
function b2() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(`${i}`);
    }
}
function b3() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(123456);
    }
}
function b4() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push('1');
    }
}
function b5() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push(false);
    }
}
function b6() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push([]);
    }
}
function b7() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push({});
    }
}
function b8() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push({ count: i });
    }
}
function b9() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        ary1.push({ count: i, id: i });
    }
}
function c1() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        if (i % 2) {
            ary1.push(i);
        }
        else {
            ary1.push(i);
        }
    }
}
function c2() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        if (i % 2) {
            ary1.push(i);
        }
        else {
            ary1.push(`${i}`);
        }
    }
}
function c3() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        let i2 = `${i}`;
        if (i % 2) {
            ary1.push(i2);
        }
        else {
            ary1.push(i2);
        }
    }
}
function c4() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        if (i % 2) {
            ary1.push(`${i}`);
        }
        else {
            ary1.push(`${i}`);
        }
    }
}
function c5() {
    let ary1 = [];
    for (let i = 0; i < times; i++) {
        if (i % 2) {
            ary1.push(i);
        }
        else {
            ary1.push({ count: i });
        }
    }
}
function c6() {
    let ary1 = [];
    let ary2 = [];
    for (let i = 0; i < times; i++) {
        if (i % 2) {
            ary1.push(i);
        }
        else {
            ary2.push(i);
        }
    }
}
// A
console.group('Push different type param using ternary operator');
console.time('Function A1');
a1();
console.timeEnd('Function A1');
console.time('Function A2');
a2();
console.timeEnd('Function A2');
console.time('Function A3');
a3();
console.timeEnd('Function A3');
console.time('Function A4');
a4();
console.timeEnd('Function A4');
console.time('Function A5');
a5();
console.timeEnd('Function A5');
console.groupEnd();
// B
// console.group('Push different type param');
// console.time('Function B1');
// b1();
// console.timeEnd('Function B1');
// console.time('Function B2');
// b2();
// console.timeEnd('Function B2');
// console.time('Function B3');
// b3();
// console.timeEnd('Function B3');
// console.time('Function B4');
// b4();
// console.timeEnd('Function B4');
// console.time('Function B5');
// b5();
// console.timeEnd('Function B5');
// console.time('Function B6');
// b6();
// console.timeEnd('Function B6');
// console.time('Function B7');
// b7();
// console.timeEnd('Function B7');
// console.time('Function B8');
// b8();
// console.timeEnd('Function B8');
// console.time('Function B9');
// b9();
// console.timeEnd('Function B9');
// console.groupEnd();
// C
// console.group('Push different type param using if else');
// console.time('Function C1');
// c1();
// console.timeEnd('Function C1');
// console.time('Function C2');
// c2();
// console.timeEnd('Function C2');
// console.time('Function C3');
// c3();
// console.timeEnd('Function C3');
// console.time('Function C4');
// c4();
// console.timeEnd('Function C4');
// console.time('Function C5');
// c5();
// console.timeEnd('Function C5');
// console.time('Function C6');
// c6();
// console.timeEnd('Function C6');
// console.groupEnd();
