const info={
    name: "MinhHuy",
    age: 23,
    address: "Hà Nội"
}
console.log(Object.keys(info));

const a = Object.values(info);
for(let i=0;i<a.length;i++){
    console.log(a[i]);
}