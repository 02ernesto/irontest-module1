//new array
const rym = [
    
    {
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male"
    },

   { name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male"},

    {name: "Summer Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female"},

    {name: "Beth Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Female"},

   { name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male"},

    {name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    type: "",
    gender: "Female"},

   { name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    type: "Genetic experiment",
    gender: "Male"},

    {name: "Adjudicator Rick",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male"},

    {name: "Agency Director",
    status: "Dead",
    species: "Human",
    type: "",
    gender: "Male"},

    {name: "Alan Rails",
    status: "Dead",
    species: "Human",
    type: "Superhuman (Ghost trains summoner)",
    gender: "Male"}
]


//Get the first three elements of the Array without altering the original Array
getFirtsThreeElements=()=>{
    //...write your code here
    var rick = rym.slice(0,3);
    console.log('The first three',+rick);
}
//Find all the characters whose species is Aliens nad return in new array
getAliens=()=>{
    //...write your code here
    console.log('the alien is:',/** here your new answer*/)
}
//create a new character and add it to the matrix and add consecutive identifiers (1,2, ... n) to all characters
newCharacter=()=>{
    //...write your code here
    var nuevo = {name: "Nuevo",
    status: "Dead",
    species: "Human",
    type: "Reptiliano",
    gender: "Male"}

    rick.push(nuevo);
    console.log('New Charanter and id to all:'+ rick)
}
//find the family smith (Morty, Beth, Summer, Jerry, Rick)  in a new Array called familySmith
getFamilySmith=()=>{
    //...write your code here

    console.log('Family Smith:',/** here your new answer*/)
}
//Jerry and Beth have divorced, remove Jerry from the Array Smith Family, and get a random family member and print all their values
familyBroken=()=>{
    //...write your code here
    
    console.log('Family without Jerry',/** here your new answer*/)
    console.log('Random member name:, status:, species:, type:, gender:')
}
//The Final test, Rick needs to have more order, the original Array creates a new object, in which you group by status, without altering the original
orderArray=()=>{
     //...write your code here

    console.log('new order',/** here your new answer*/)
}


//In this part we execute our functions
