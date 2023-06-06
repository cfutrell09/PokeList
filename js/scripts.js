//IIFE Function
let pokemonRepository = (function () {
    let pokemonList = [
        {
            name: "balbasaure", 
            type: "grass", "poison"
            height: 7
        }

        {
            name: "charmander", 
            type: "fire",
            height: 6
        }
    
        {
            name: "pikachu", 
            type: "lightning",
            height: 4
        }
    
        {
            name: "squirtle", 
            type: "water",
            height: 5
        }

        {
            name: "caterpie", 
            type: "bug",
            height: 3
        }
    
        {
            name: "clefairy", 
            type: "fairy",
            height: 6
        }
        
        {
            name: "jifflypuff", 
            type: "fairy", "normal"
            height: 5
        }
        
        {
            name: "diglett", 
            type: "ground",
            height: 2
        }
    ]
    funtion add (pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
}) ();

pokemonRepository.getAll.forEach(poke);


// code that was here from previous exercises that I didnt know if I needed to delete LOL

//function printArrayDetails(list){
    //for (let i = 0; i < list.length; i++){
        //document.write("<p>" + list[i].name + "</p>")
       // console.log(list[i].name);
    //}
//}
//for (let i = 0; i < pokemonList.length; i++) {
    //if (pokemonList[i].height >=7){
    //document.write(pokemonList[i].name + pokemonList[i].height + " , He's a BIG ONE!!");
//}else if (pokemonList[i].height >4 && pokemonList[i].height <=6){
    //document.write(pokemonList[i].name + pokemonList[i].height + " , He's AVERAGE!!");
//}else {
    //document.write(pokemonList[i].name + pokemonList[i].height + ", He's a TINY ONE!!")
//}
//}

//printArrayDetails(pokemonList);


//forEach function





