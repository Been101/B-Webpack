function square(x) {
  console.log('*****square******')
  return x * x;
}

function cube(x) {
  console.log('this is cube')
  return x * x * x;
}

module.exports = {
  square,
  cube
} 