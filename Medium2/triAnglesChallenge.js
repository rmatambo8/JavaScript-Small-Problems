let sum = (args) => args.reduce((acc, element) => acc + element);
function triangle(...angles) {
  if (angles.some(angle => angle <= 0) || sum(angles) !== 180 ) return 'invalid';
  if (angles.includes(90)) return 'right';
  if (angles.some((angle) => angle > 90)) return 'obtuse';
  return 'acute';
}
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"