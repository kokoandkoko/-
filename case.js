let generation = prompt("Enter born of year");
let year = parseInt(generation);

function myGen(year,ILY){
    let gen = {
        gen1 :'x',
        gen2 :'i',
        gen3 :'o',
    }
    switch(year){
        case ((year>2000 && year<=2020)?year:-1):
            alert(`${year} is generation ${gen.gen1} ${ILY}`)
            console.log(`${year} is generation ${gen.gen1} ${ILY}`);
            document.getElementById("hContent").innerHTML=(`${year} is generation ${gen.gen1} ${ILY}`);
        break;
        case ((year>2021 && year<=2040)?year:-1):
            alert(`${year} is generation ${gen.gen2} ${ILY}`)
            console.log(`${year} is generation ${gen.gen2} ${ILY}`);
            document.getElementById("hContent").innerHTML=(`${year} is generation ${gen.gen2} ${ILY}`);
        break;
    default:
  }
}
myGen(year,"I LOVE YOU");