"use strict";
// for (let i = 0; i < 3; i++) {
//   console.log('Hello World');
// }
// for (let i = 0; i < 3; i++) {
//   console.log('Hello World' + i);
// }
// pracrice
// for (let i = 0; i < 11; i++) {
//   console.log('Hello World');
// }
// for (let i = 1; i < 11; i++) {
//   console.log(i);
// }
// for (let abc = 1; abc < 11; abc++) {
//   console.log(abc);
// }
// const students = ['ali', 'naqi', 'hasni'];
// for (let i = 1; i < 11; i++) {
//   console.log(students[2]);
// }
// const students = ['syed', 'ali', 'naqi', 'hasni'];
// for (let i = 0; i <= 3; i++) {
//   console.log(`${students[i]} 😊`);
// }
// for (let i = 0; i <= 10; i++) {
//   const ans = i * 2;
//   console.log(`2 x ${i} = ${ans}`);
// }
// // nested loop
// for (let i = 0; i <= 4; i++) {
//   console.log(`parent loop ${i}`);
//   for (let j = 0; j <= 1; j++) {
//     console.log(`child loop ${i}`);
//   }
// }
// const videos = [
//   'videos1',
//   'videos2',
//   'videos3',
//   'videos5',
//   'videos6',
//   'videos7',
// ];
// for (let i = 0; i <= videos.length; i++) {
//   console.log(`video$`);
// }
// OBJECTS
const video = {
    name: 'video1',
    desc: 'loreum ipsum',
    link: 'https://lsnkdnfksndfknskdn',
    image: 'sdkjbskdn',
};
const videos = [
    {
        name: 'video1',
        desc: 'loreum ipsum',
        link: 'https://lsnkdnfksndfknskdn',
        image: 'sdkjbskdn',
    },
    {
        name: 'video2',
        desc: 'loreum ipsum',
        link: 'https://lsnkdnfksndfknskdn',
        image: 'sdkjbskdn',
    },
    {
        name: 'video3',
        desc: 'loreum ipsum',
        link: 'https://lsnkdnfksndfknskdn',
        image: 'sdkjbskdn',
    },
];
// console.log(video.desc);
for (let i = 0; i < videos.length; i++) {
    console.log(videos[i].name);
}
