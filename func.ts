const calculateMyAge = (birthYear:number) :number => {
    return new Date(Date.now()).getFullYear() - birthYear;
}

const myAge : number = calculateMyAge(2000);
console.log(myAge)
