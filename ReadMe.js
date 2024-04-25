"hellow world"

const scores = [85, 92, 60, 72, 45, 88, 70, 95, 68];


const highScores = scores.filter(score => score >= 70);

console.log("Scores greater than or equal to 70:", highScores);
