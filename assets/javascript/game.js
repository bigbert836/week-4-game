var characters = [];

	characters[0] = {
		name : "Darth Vader",
		attack : 3,
		counterAttack : 25,
		hp : 180,
		image : "'assets/images/Darthvader.png'"
	};

	characters[1] = {
		name : "Chewbacca",
		attack : 10,
		counterAttack : 10,
		hp : 120,
		image : "'assets/images/Chewbacca.png'"
	};

	characters[2] = {
		name : "Boba Fett",
		attack : 4,
		counterAttack : 30,
		hp : 150,
		image : "'assets/images/Bobafett.png'"
	};

	characters[3] = {
		name : "Mace Windu",
		attack : 11,
		counterAttack : 15,
		hp : 100,
		image : "'assets/images/Macewindu.png'"
	};

	var myCharacter
	var enemy1
	var enemy2
	var enemy3
	var defender = false;
	var countAttack = 0;
	var countCounterAttack = 0;
	var countPlayerHP = 0;
	var countDefenderHP = 0;
	var chosenCharacterName;
	var chosenDefenderName;
	var defenderCount = 3;


	var reset = function(){

	$(".characterSelection .characterBox").show();
	$("#character1").html("<div class='characterName'>"+characters[0].name+"</div><img src="+characters[0].image+"/><div class='characterHP'>"+characters[0].hp+"</div>");
	$("#character2").html("<div class='characterName'>"+characters[1].name+"</div><img src="+characters[1].image+"/><div class='characterHP'>"+characters[1].hp+"</div>");
	$("#character3").html("<div class='characterName'>"+characters[2].name+"</div><img src="+characters[2].image+"/><div class='characterHP'>"+characters[2].hp+"</div>");
	$("#character4").html("<div class='characterName'>"+characters[3].name+"</div><img src="+characters[3].image+"/><div class='characterHP'>"+characters[3].hp+"</div>");
	$("#yourCharacter").html("");
	$("#enemy1").html("");
	$("#enemy1").show();
	$("#enemy2").html("");
	$("#enemy2").show();
	$("#enemy3").html("");
	$("#enemy3").show();
	$("#defender").html("");
	defender = false;
	countAttack = 0;
	countCounterAttack = 0;
	countPlayerHP = 0;
	countDefenderHP = 0;
	$("#reset").hide();
	defenderCount = 3;
	$("h3").html("");
	};

	function getCharacter(playerName,playerImage,playerHP,playerAttack,enemy1Name,enemy1Image,enemy1HP,enemy2Name,enemy2Image,enemy2HP,enemy3Name,enemy3Image,enemy3HP){
		countAttack = playerAttack;
		countPlayerHP = playerHP;
		chosenCharacterName = playerName;
		$("#yourCharacter").html("<div class='characterBox'><div class='characterName'>"+playerName+"</div><img src="+playerImage+"/><div id= 'yourCharacterHP' class='characterHP'>"+countPlayerHP+"</div></div>");
		$("#enemy1").html("<div class='characterBox'><div class='characterName'>"+enemy1Name+"</div><img src="+enemy1Image+"/><div class='characterHP'>"+enemy1HP+"</div></div>");
		$("#enemy2").html("<div class='characterBox'><div class='characterName'>"+enemy2Name+"</div><img src="+enemy2Image+"/><div class='characterHP'>"+enemy2HP+"</div></div>");
		$("#enemy3").html("<div class='characterBox'><div class='characterName'>"+enemy3Name+"</div><img src="+enemy3Image+"/><div class='characterHP'>"+enemy3HP+"</div></div>");
	};

	function getDefender(defenderName,defenderImage,defenderHP,defenderCounterAttack){
		countCounterAttack = defenderCounterAttack;
		countDefenderHP = defenderHP;
		chosenDefenderName = defenderName;
		$("#defender").html("<div class='characterBox'><div class='characterName'>"+defenderName+"</div><img src="+defenderImage+"/><div id='youDefenderHP' class='characterHP'>"+countDefenderHP+"</div></div>");
		defenderCount--;
	}


	$("#character1").click(function(){
		myCharacter = characters[0];
		enemy1 = characters[1];
		enemy2 = characters[2];
		enemy3 = characters[3];
		getCharacter(myCharacter.name,myCharacter.image,myCharacter.hp,myCharacter.attack,enemy1.name,enemy1.image,enemy1.hp,enemy2.name,enemy2.image,enemy2.hp,enemy3.name,enemy3.image,enemy3.hp);
		$(".characterSelection .characterBox").hide();
	});
	
	$("#character2").click(function(){
		myCharacter = characters[1];
		enemy1 = characters[0];
		enemy2 = characters[2];
		enemy3 = characters[3];
		getCharacter(myCharacter.name,myCharacter.image,myCharacter.hp,myCharacter.attack,enemy1.name,enemy1.image,enemy1.hp,enemy2.name,enemy2.image,enemy2.hp,enemy3.name,enemy3.image,enemy3.hp);
		$(".characterSelection .characterBox").hide();
	});

	$("#character3").click(function(){
		myCharacter = characters[2];
		enemy1 = characters[0];
		enemy2 = characters[1];
		enemy3 = characters[3];
		getCharacter(myCharacter.name,myCharacter.image,myCharacter.hp,myCharacter.attack,enemy1.name,enemy1.image,enemy1.hp,enemy2.name,enemy2.image,enemy2.hp,enemy3.name,enemy3.image,enemy3.hp);
		$(".characterSelection .characterBox").hide();
	});

	$("#character4").click(function(){
		myCharacter = characters[3];
		enemy1 = characters[0];
		enemy2 = characters[1];
		enemy3 = characters[2];
		getCharacter(myCharacter.name,myCharacter.image,myCharacter.hp,myCharacter.attack,enemy1.name,enemy1.image,enemy1.hp,enemy2.name,enemy2.image,enemy2.hp,enemy3.name,enemy3.image,enemy3.hp);
		$(".characterSelection .characterBox").hide();
	});

	$("#enemy1").click(function(){
		if(defender === false){
			$("#enemy1").hide();
			getDefender(enemy1.name,enemy1.image,enemy1.hp,enemy1.counterAttack);
			defender = true;
			$("#comments").html("");
		}
	});

	$("#enemy2").click(function(){
		if(defender === false){
			$("#enemy2").hide();
			getDefender(enemy2.name,enemy2.image,enemy2.hp,enemy2.counterAttack);
			defender = true;
			$("#comments").html("");
		}
	});

	$("#enemy3").click(function(){
		if(defender === false){
			$("#enemy3").hide();
			getDefender(enemy3.name,enemy3.image,enemy3.hp,enemy3.counterAttack);
			defender = true;
			$("#comments").html("");
		}
	});

	reset()

	$("#reset").click(reset);

	$("#attack").click(function(){
		if(defender === true && countPlayerHP > 0 && countDefenderHP > 0){
			countDefenderHP = countDefenderHP - countAttack;
			countPlayerHP = countPlayerHP - countCounterAttack;
			$("#yourCharacterHP").html(countPlayerHP);
			$("#youDefenderHP").html(countDefenderHP);
			$("#comments").html("You attacked " + chosenDefenderName + " for " + countAttack + " damage.<br>" + chosenDefenderName + " attacked you back for " + countCounterAttack + " damage.<br>");
			countAttack = countAttack * 2;
		}
		if(countPlayerHP <= 0){
			$("#comments").html("You attacked " + chosenDefenderName + " for " + countAttack + " damage.<br>" + chosenDefenderName + " attacked you back for " + countCounterAttack + " damage.<br>You Lose!");
			$("#reset").show();
		}
		else if(countDefenderHP <= 0 && defenderCount === 0){
			$("#comments").html("You attacked " + chosenDefenderName + " for " + countAttack + " damage.<br>" + chosenDefenderName + " attacked you back for " + countCounterAttack + " damage.<br>You Win!");
			$("#reset").show();
		}
		else if(countDefenderHP <= 0){
			$("#comments").html("You attacked " + chosenDefenderName + " for " + countAttack + " damage.<br>" + chosenDefenderName + " attacked you back for " + countCounterAttack + " damage.<br>Choose another defender.");
			defender = false;
		}

	});



	

	

	