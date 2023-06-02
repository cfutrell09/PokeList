let pokemonList= [
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
]

for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height >=7){
    document.write(pokemonList[i].name + pokemonList[i].height + " , He's a BIG ONE!!");
}else if (pokemonList[i].height >4 && pokemonList[i].height <=6){
    document.write(pokemonList[i].name + pokemonList[i].height + " , He's AVERAGE!!");
}else {
    document.write(pokemonList[i].name + pokemonList[i].height + ", He's a TINY ONE!!")
}
}

