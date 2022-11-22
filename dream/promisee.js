'use strict';
const promise = new Promise((resolve, reject) =>{
    console.log('doing something...');
    setTimeout(() => {
            //resolve(1+6);// 정상 수행시
            reject(new Error('no network')); // 오류 발생시


    }, 2000);
});
    // 생성즉시 실행
promise //
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(()=>{
        console.log('끝나면 실행');
    });

    //3. promise chaining
    const fetchNumber = new Promise((resolve, reject) =>{
        setTimeout(() => resolve(1), 1000);
    });

    fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

    // 4. Error handling

    const getHen = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => resolve('사랑'), 1000);
        });
    const getEgg = hen =>
        new Promise ((resolve, reject) => {
            setTimeout(() => reject(new Error(`error! ${hen} => 행복`)), 1000);
         });
    const cook = egg =>
         new Promise((resolve, reject) => {
            setTimeout(() => resolve(`${egg} => 기적`), 1000);
         });


 getHen()
 .then(getEgg)
 .catch(error => {
    return '신뢰';
 })
 .then(cook)
 .then(console.log)
 .catch(console.log);


 
         /*
getHen()
 .then(hen => getEgg(hen))
 .catch(error => {
    return '신뢰';
 })
 .then(egg => cook(egg))
 .then(meal => console.log(meal))
 .catch(error => {
    console.log(error);
 });
*/

