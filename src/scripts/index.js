import "../styles/index.scss";

const test = [1, 2, 3];

const filtered = [...test].filter(item => item <= 2);

console.log(filtered);
