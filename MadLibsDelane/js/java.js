console.log("test");

document.getElementById('formtwo').style.display = 'none';
document.getElementById('formthree').style.display = 'none';
document.getElementById('formfour').style.display = 'none';
document.getElementById('formfive').style.display = 'none';
document.getElementById('formsix').style.display = 'none';
document.getElementById('ending').style.display = 'none';

function writeOne(){
    console.log("Write 1 function - Functional");

    var name = document.getElementById('name').value;
    console.log(name);

    var poss = document.getElementById('possession').value;
    console.log(poss);

    document.getElementById('outputone').innerHTML = name+" is stranded within a dense sprawling jungle with nothing but the clothes on thier back and their closest possesion, a "+poss+". This "+poss+" is worth more to them than anything. Will they be able to survive within this hostile and unfamiliar environment and keep their only possesion close? Not knowing what could be out there, "+name+" begins exploring the jungle, looking for something to defend themselves. What could they hope to find in this jungle and what would be the next priority?";

    document.getElementById('formtwo').style.display ='';
}

function writeTwo(){
    console.log("Write 2 function - Functional");

    var name = document.getElementById('name').value;
    console.log(name);

    var poss = document.getElementById('possession').value;
    console.log(poss);

    var weap = document.getElementById('weapon').value;
    console.log(weap);

    var res = document.getElementById('resource').value;
    console.log(res);
    
    document.getElementById('outputtwo').innerHTML =name+" searches and searhes eventually finding a "+weap+". This should work great to defend from anything lurking within the dense jungle. With their mind calmed with the assurance of securing a weapon, "+name+" heads deeper in to the trees to search for some "+res+"."+" Finding any amout of "+res+" would be of great importance for "+name+". In order to survive until they can figure out where they are and more importantly how to get back to where they came from. Food is the next thing that "+name+" must find. There must be a way to find some sign of life within this jungle to hunt down for food.";

    document.getElementById('formthree').style.display ='';
}

function writeThree(){
    console.log("Write 3 function - Functional");

    var name = document.getElementById('name').value;
    console.log(name);

    var poss = document.getElementById('possession').value;
    console.log(poss);

    var weap = document.getElementById('weapon').value;
    console.log(weap);

    var res = document.getElementById('resource').value;
    console.log(res);

    var plant = document.getElementById('plant').value;
    console.log(plant);

    var animal = document.getElementById('animal').value;
    console.log(animal);
    
    document.getElementById('outputthree').innerHTML = name+" notices many "+plant+" nearby are slightly eaten. They follow the trail knowing that a "+animal+"'s main source of food is this "+plant+". They eventually come to a small clearing with a little pond. They notice the "+animal+" drinking from the water and slowly creep up, being careful not to make a sound. "+name+" then takes the "+weap+" they aquired earlier and strikes the "+animal+". It drops to the ground and "+name+" has aquired food in order to satiate themselves on their journey deeper through the jungle. With the energy gained from a meal, "+name+" continues travelling through the jungle in search of any signs of civilization or a way out.";

    document.getElementById('formfour').style.display ='';
}

function writeFour(){
    console.log("Write 4 function - Functional");

    var name = document.getElementById('name').value;
    console.log(name);

    var poss = document.getElementById('possession').value;
    console.log(poss);

    var weap = document.getElementById('weapon').value;
    console.log(weap);

    var res = document.getElementById('resource').value;
    console.log(res);

    var plant = document.getElementById('plant').value;
    console.log(plant);

    var animal = document.getElementById('animal').value;
    console.log(animal);

    var structure = document.getElementById('structure').value;
    console.log(structure);

    var nametwo = document.getElementById('nametwo').value;
    console.log(nametwo);
    
    document.getElementById('outputfour').innerHTML = "Travelling deeper and deeper through the thick vegetation "+name+" comes across a peculiarily placed "+structure+". It stands alone, very out of place within all the vast jungle. Almost as if it came from somewhere else. "+name+" heads towards the "+structure+" and enters through the entrance searching through the dimly lit entryway. Within a second of entering the door they hear a low groggled moan, someone is within this "+structure+". "+name+' calls out. "Hello are you ok?" The other person within the room replies sparcely "Food...food p-please." '+name+" takes some of the leftover "+animal+' that they had hunted earlier in the day and gives it to the stranger. They gobble down the much needed food and slowly start to hobble up from the ground. "What is your name? '+name+' asks. The stranger replies, "my name is '+nametwo+'." With introductions out of the way and '+name+" having saved "+nametwo+"'s life, they both decide to try to escape this dreaded jungle together to better their odds.";

    document.getElementById('formfive').style.display ='';
}

function writeFive(){
    console.log("Write 5 function - Functional");

    var name = document.getElementById('name').value;
    console.log(name);

    var poss = document.getElementById('possession').value;
    console.log(poss);

    var weap = document.getElementById('weapon').value;
    console.log(weap);

    var res = document.getElementById('resource').value;
    console.log(res);

    var plant = document.getElementById('plant').value;
    console.log(plant);

    var animal = document.getElementById('animal').value;
    console.log(animal);

    var structure = document.getElementById('structure').value;
    console.log(structure);

    var nametwo = document.getElementById('nametwo').value;
    console.log(nametwo);

    var shelter = document.getElementById('shelter').value;
    console.log(shelter);
    
    var predator = document.getElementById('predator').value;
    console.log(predator);

    document.getElementById('outputfive').innerHTML = "Both "+name+" and "+nametwo+" travel through the jungle covering a lot of ground but as nightfall draws closer and closer they seek out some form of shelter. Eventually they stumble upon a "+shelter+". They quickly head inside and huddle for warmth to try and get some form of sleep despite the perilous situation. "+name+" is awoken by a loud unkown sound. Their eyes dart back and forth searching for the cause. All of a sudden a "+predator+" pounces from the bushes, knocking them to the ground and pinning them down. "+name+" is locked in a fight for there life struggling to push the "+predator+" off. Just as their strength was almost fading, "+nametwo+" appears behind the "+predator+" with the "+weap+" that was left within the "+shelter+". They strike the "+predator+" sending it reeling back and it dissapears back into the darkness of the night. With another traumatic experience and now evenly having saved eachother, both "+name+" and "+nametwo+" go back to their camp and sleep for the night. They had been all over the jungle and can feel they have been getting closer and closer to an exit. Tomorrow they will have to choose a path and hope they can put this whole journey behind them. When they awake in the morning they decide to choose from three paths; the densest part of the jungle, some suspicious footprints, or the sound of rushing water.";

    document.getElementById('formsix').style.display ='';
}

function writeSix(){
    console.log("Write 6 function - Functional");

    var name = document.getElementById('name').value;
    console.log(name);

    var poss = document.getElementById('possession').value;
    console.log(poss);

    var weap = document.getElementById('weapon').value;
    console.log(weap);

    var res = document.getElementById('resource').value;
    console.log(res);

    var plant = document.getElementById('plant').value;
    console.log(plant);

    var animal = document.getElementById('animal').value;
    console.log(animal);

    var structure = document.getElementById('structure').value;
    console.log(structure);

    var nametwo = document.getElementById('nametwo').value;
    console.log(nametwo);

    var shelter = document.getElementById('shelter').value;
    console.log(shelter);
    
    var predator = document.getElementById('predator').value;
    console.log(predator);

    var path = document.querySelector('input[name="path"]:checked').value;
    console.log(path);

    var pathMessage;
    if(path=="dense"){
        pathMessage = "They decide to keep on going through the dense vegetation in hopes it will eventually end and lead to somewhere. Both "+name+" and "+nametwo+" walk while carefully slipping through the dense jungle for what seems like ages. Eventually they come to a clearing where the jungle seems to abruptly end. There is instead a vast sprawling flatland and hills far in the distance. "+nametwo+" recognizes these hills as the ones that were near her villages and so they both head across the field. Within a day they reach said village. The treacherous journey was finally behind them and "+name+" had survived the jungle along with their prized "+poss+" and the new friend they made along the way."

        document.getElementById('finalimg').src = 'images/dense.jpg';

    }else if(path=="footprints"){
        pathMessage = "They both decide to follow the footprints in hopes it will lead to any civilization where they can get some help. After following these footsteps for a long time they come to an end in what seems to be a wall of trees with one opening. "+name+" suggests only one of them check it out, so "+name+" gives their "+poss+" to "+nametwo+" in order to keep it safe and heads into the opening. Within is a tribal village and when "+name+" 's pressence becomes known the locals were not welcoming. They charged at "+name+" so "+name+" takes their "+weap+" and starts to fight off the tribe. "+name+" yells back to "+nametwo+', "run i will hold them off." '+nametwo+" runs and runs not looking back. They run for ages and keep running until eventually stoping and looking around. They are out of the jungle it was finally over. But the new friend they had made that saved their life not once but two times now, was not so lucky. "+nametwo+ " continued to walk as far away from the jungle as they could holding "+name+"'s "+poss+" close as it's the only thing they have left to remember the new friend they lost."

        document.getElementById('finalimg').src = 'images/tribalvillage.jpg';

    }else if(path=="water"){
        pathMessage = "Deciding to follow the sound of rushing water to try to follow it to civilization, both "+name+" and "+nametwo+" depart. They come to an opening with a wide, fast flowing river. Both of them follow along the river for what feels like days, until eventually chancing upon a campsite on the other side of the river. This was there chance a campsite must mean civilization or someone who could help. The only problem being crossing the river. They decide it is worth the risk, setting out across the river. They hold hands to keep with eachother and slowly make it farther and farther across the river until they reach the mid point. The current is much stronger here, both of them are barely able to keep their footing. "+nametwo+" is exhausted they have been out in the wilderness far too long without the proper nutrition. Their legs give out and they quickly start getting pulled by the current. "+name+" holds them tightlty but is struggling to keep balance they try their hardest to hold on but eventually their hand slips and "+nametwo+ " is pulled under and away by the current. "+name+ ", devasted but not giving up continues to cross the river and makes it to the other side and heads over to the campsite. They are met with some campers who despite completely ignorant of the situation took "+name+ " in and nursed them back to health. "+name+" had finally escaped that wretched jungle but lost their new companion along the way."

        document.getElementById('finalimg').src = 'images/river.jpg';    

    };
    console.log(pathMessage);

    document.getElementById('outputsix').innerHTML = pathMessage+" The end...";

    document.getElementById('ending').style.display ='';
}

function refresh(){
    location.reload();
    console.log("Refresh");
}
