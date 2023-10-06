type user = {
    name: string;
    age: number;
    isMarried: boolean;
    hubbies: string[];
} 


const newUser : user = {
    name: "John Doe",
    age: 28,
    isMarried: false,
    hubbies: ["Playing Football", "Watching Movies"]
}

console.log(newUser);