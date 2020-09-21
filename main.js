// localStorage.name = "nikola";

let accounts = [
    {
        name: "ivan"
    },
    {
        name: "ana"
    }
]

localStorage.accounts = JSON.stringify(accounts); // !!! mora da bude string inace ne moze da ga local stroage procita
console.log(JSON.parse(localStorage.accounts)); // !! da se dobije niz umesto stringa