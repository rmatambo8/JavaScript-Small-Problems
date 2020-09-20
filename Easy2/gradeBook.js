function getGrade(first, second, third) {
  return letterGrade((first + second + third) / 3)
}

function letterGrade(average) {
  if (average >= 90) return "A"
  if (average >= 80) return "B"
  if (average >= 70) return "C"
  if (average >= 60) return "D"
  return 'F'
}
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"