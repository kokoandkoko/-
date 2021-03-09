let generation = prompt("Enter your year");
let year = parseInt(generation);
function myGen(year,ILY){
        if(year>2000 && year<=2020){
            alert(`${year} is generation Xs ${ILY}`)
            console.log(`${year} is generation Xs ${ILY}`);
            document.getElementById("hContent").innerHTML=(`${year} is generation Xs ${ILY}`);
        }
        else if(year>2021 && year<=2040){
            alert(`${year} is generation Is ${ILY}`)
            console.log(`${year} is generation Is ${ILY}`);
            document.getElementById("hContent").innerHTML=(`${year} is generation Is ${ILY}`);
        }else{
            alert(`No generation`)
            console.log(`No generation`);
            document.getElementById("hContent").innerHTML=(`No generation`);
        }
    }
myGen(year,"I LOVE YOU");