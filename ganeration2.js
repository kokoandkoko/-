let generation = prompt("Enter your year");
let year = parseInt(generation);
function myGen(year,ILY){
    let gen = {
        gen1 :'x',
        gen2 :'i',
        gen3 :'o',
    }
        if(year>2000 && year<=2020){
            alert(`${year} is generation ${gen.gen1} ${ILY}`)
            console.log(`${year} is generation ${gen.gen1} ${ILY}`);
            document.getElementById("hContent").innerHTML=(`${year} is generation ${gen.gen1} ${ILY}`);
        }
        else if(year>2021 && year<=2040){
            alert(`${year} is generation ${gen.gen2} ${ILY}`)
            console.log(`${year} is generation ${gen.gen2} ${ILY}`);
            document.getElementById("hContent").innerHTML=(`${year} is generation ${gen.gen2} ${ILY}`);
        }else{
            alert(`No generation`)
            console.log(`No generation`);
            document.getElementById("hContent").innerHTML=(`No generation`);
        }
    }
myGen(year,"I LOVE YOU");