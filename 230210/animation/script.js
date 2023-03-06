
// function practice(){
//   for(i=1; i<=10; i++){
//     for(j=0; j<=i; j++){
//       document.write(i +'*'+j+'<br>')
//     }
//   }
// }

// practice();

// let jaja = '동해물과백두산이'

// process.stdout.write(jaja);


// let imim = document.querySelector('img');
// imim.style.animation('translateY' , '')

function answer(x, y) {
  let result = [];
  // 코드 구현 

  let min = nums[0];
  for (let item of nums) {
    min = item < min ? item : min;
  }
  nums.forEach((item, index) => {
    if (item == min) result.push(index);
  });





  return result;
}








let input = [
    [3, 7],
    [8, 3],
    [12, 10],
];

for (let i = 0; i < input.length; i++) {
 console.log((`#${i + 1} `));
  console.log(answer(input[i][0], input[i][1]));
}