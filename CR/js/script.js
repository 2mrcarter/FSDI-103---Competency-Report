function Select(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
}
//character constrcutor
class Character {
    constructor(id, name, energy){
        this.id = id;
        this.name = name;
        this.energy = energy;
    }
    //display
    display = function(){
        document.getElementById("info-"+this.id).innerHTML  = `
        <p>
            <h3> Name:    ${this.name} </h3>
            <h3> Energy:  ${this.energy} </h3>
        </p>
        `;
    }
        

     
    attack = function(opponent, item){
        let newEnergy = opponent.energy - item.iDmg;
        opponent.energy = newEnergy;
        opponent.display();
        document.getElementById("console").innerHTML = `
        <p style="color: white; font-size: 36px;">
             <b>${this.name}</b> 
             attacked <b>${opponent.name}</b> with a ${item.iName}. <img class="item" src="${item.iImg}"> 
        `;
        if (c1.energy <= 0){
            document.getElementById("console").innerHTML = ``;
            document.getElementById("lionOBtn").disabled = true;
            document.getElementById("mumRaBtn").disabled = true;
            document.getElementById("bye").innerHTML = `
            <h1>Later <u>LION-O</u>...<img src="img/casketdance.gif"> <u>MUMM-RA</u> wins! <p><img src="img/mumRasolo.jpg"></p></h1>
            `;
        } else if (c2.energy <= 0){       
            document.getElementById("console").innerHTML = ``;
            document.getElementById("mumRaBtn").disabled = true;
            document.getElementById("lionOBtn").disabled = true;
            document.getElementById("bye").innerHTML = `
            <h1>Bye <u>MUMM-RA</u><img src="img/casketdance.gif"> <u>LION-O</u> wins! <p><img src="img/tceverybody.jpeg"></p></h1>
            `;
        }
    }
}

const c1 = new Character('c1','Lion-O',100);
const c2 = new Character('c2','MumRa',100);
c1.display();
c2.display();

class Item {
    constructor(iName,iDmg,iImg){
        this.iName = iName,
        this.iDmg = iDmg,
        this.iImg = iImg;
    }
}

const item1 = new Item("Uppercut",10,"img/blam.jpeg");
const item2 = new Item("Super Special Ultra Mega Move",20,"img/reallybeatup.png");
const item3 = new Item("2-piece combo",30,"img/whamblam2.png");

let items =[item1,item2,item3];