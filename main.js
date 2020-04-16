
function divisible(max) {
  let output = [];
  let count = 1;

  while(count <= max) {

  if(count % 2 === 0 && count % 3 === 0 && count % 5 === 0 ) {
    output.push(`Yu-gi-oh`)
  } else if (count % 2 === 0 && count % 3 === 0) {
    output.push(`Yu-gi`)
  } else if(count % 2  === 0 && count % 5 === 0) {
    output.push(`Yu-oh`)
  } else if(count % 3 === 0 && count % 5 === 0) {
    output.push(`Gi-oh`)
  } else if (count % 2 === 0) {
    output.push(`Yu`)
  } else if(count % 3 === 0) {
    output.push(`Gi`)
  } else if (count % 5 === 0) {
    output.push(`Oh`)
  } else {
    output.push(count)
  }
    count++;
  }

  console.log(output)
}

console.log(divisible(100));