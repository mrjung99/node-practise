const url = new URL("https://www.example.com/p/a/t/h?query=string");

const hostName = url.hostname;
const pathName = url.pathname;
const query = url.searchParams;

console.log(`hostname : ${hostName}`);
console.log(`pathname : ${pathName}`);
console.log(`query : ${query}`);
