const isCap = (fname) => {
   return fname.split(" ").filter(el => el[0].toUpperCase() == el[0]).length == fname.split(" ").length;
}


const term = (fullName) => { 
   return fullName.split(" ").length === 2 || fullName.split(" ").length === 3;
}
console.log(term("Wesrm"))
 const checkLastname = (fname) => {
     return fname.split(" ")[fname.split(" ").length - 1].length >= 2;
 }
 console.log(checkLastname("w"))

 const checkinitials = (fname) => {
     return fname.includes(".") ? fname.split(" ").filter(el => el.includes(".")).every(el => el.length == 2 && el[1] == "." && el[0] != ".") :true
 }
console.log(checkinitials("aagii d. baagii"))

const isCorrectThreeWords = () => {
    return fname.split(" ").length == 3 && fname.split(" "[0].includes(" ")) ? fname.split(" ")[1].includes(".") :true
}