type user = {
    name: string;
    age: number;
    isMarried: boolean;
    hubbies: string[];
    gender ?: string;
} 


const userFirst : user = {
    name: "John Doe",
    age: 28,
    isMarried: false,
    hubbies: ["Playing Football", "Watching Movies"]
}

console.log(userFirst);

const userSecond : user = {
    name: "John Doe",
    age: 28,
    isMarried: false,
    hubbies: ["Playing Football", "Watching Movies"],
    gender : "Male"
}