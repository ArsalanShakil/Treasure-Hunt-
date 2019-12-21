
var x = new Array(6);
      
for (var i = 0; i < x.length; i++) {
  x[i] = new Array(8);
}
      
for (var j = 0; j < 6; j++) {
  for (var z = 0; z < 8; z++) {
    x[j][z] = "e"
  }
}
var monster_counter,treasure_counter,potion_counter,sword_counter;

const cells = document.querySelectorAll('.cell');
const row_bounds = 6;
const column_bounds = 8;

// sword      
for (var sword = 0; sword < 2; sword++) {
  var randomRow = Math.floor((Math.random() * 6) + 0);
  var randomCol = Math.floor((Math.random() * 8) + 0);
  
  console.log('Random sword ' + sword + ' placement: [' + randomRow + ', ' + randomCol +  ']');
  
  if ((x[randomRow][randomCol] == "e")) {
    x[randomRow][randomCol] = "s"
  } else {
    var randomRow = Math.floor((Math.random() * 6) + 0);
    var randomCol = Math.floor((Math.random() * 8) + 0);
    
    if (x[randomRow][randomCol] == "e") {
      x[randomRow][randomCol] = "s";
    }
  }
}
      
// potion
for (var potion = 0; potion < 2; potion++) {
  var randomRow = Math.floor((Math.random() * 6) + 0);
  var randomCol = Math.floor((Math.random() * 8) + 0);
  
  console.log('Random potion ' + potion + ' placement: [' + randomRow + ', ' + randomCol +  ']');

  if ((x[randomRow][randomCol] == "e")) {
    x[randomRow][randomCol] = "p"
  } else {
    var randomRow = Math.floor((Math.random() * 6) + 0);
    var randomCol = Math.floor((Math.random() * 8) + 0);
    
    if (x[randomRow][randomCol] == "e") {
      x[randomRow][randomCol] = "p";
    }
  }
}
   
// monsters
for (var monster = 0; monster < 3; monster++) {
  var randomRow = Math.floor((Math.random() * 6) + 0);
  var randomCol = Math.floor((Math.random() * 8) + 0);
  
  console.log('Random monster ' + monster + ' placement: [' + randomRow + ', ' + randomCol +  ']');

  
  if ((x[randomRow][randomCol] == "e")) {
    x[randomRow][randomCol] = "m"
  } else {
    var randomRow = Math.floor((Math.random() * 6) + 0);
    var randomCol = Math.floor((Math.random() * 8) + 0);
    
    if (x[randomRow][randomCol] == "e") {
      x[randomRow][randomCol] = "m";
    }
  }
}
      
// treasure
for (var treasure = 0; treasure < 3; treasure++) {
  var randomRow = Math.floor((Math.random() * 6) + 0);
  var randomCol = Math.floor((Math.random() * 8) + 0);
  
  console.log('Random treasure ' + treasure + ' placement: [' + randomRow + ', ' + randomCol +  ']');
  
  if ((x[randomRow][randomCol] == "e")) {
    x[randomRow][randomCol] = "t"
  } else {
    var randomRow = Math.floor((Math.random() * 6) + 0);
    var randomCol = Math.floor((Math.random() * 8) + 0);
    if (x[randomRow][randomCol] == "e") {
      x[randomRow][randomCol] = "t";
    }
  }
}
 
// player placement
var player_position = '';
player_position = placePlayer();

console.log('Game board:');
console.log(x);
      
document.onkeydown = updatePlayerLocation;
      
function placePlayer() {
  var randomRow = Math.floor((Math.random() * 6) + 0);
  var randomCol = Math.floor((Math.random() * 8) + 0);
  
  if ((x[randomRow][randomCol] == "e")) {
    x[randomRow][randomCol] = "Player"
    console.log('Random player placement: [' + randomRow + ', ' + randomCol +  ']');


    return [randomRow, randomCol]
  } else {
    console.log('>>>> Place player again <<<<');
    placePlayer();
  }
}

function updatePlayerLocation(e) {
    // up arrow or 'u' letter
    if (e.keyCode == '38'|| e.keyCode == '85') {
        // up arrow
      console.log('up pressed ');
      
      if (isMoveValid(player_position[0], 'up')) {
        var old_player_position = player_position;
        
        // update player position
        player_position = [player_position[0] - 1, player_position[1]];
        
        // update board
        x = movePlayer(x, old_player_position, [player_position[0], player_position[1]]);
      }
    // down arrow or 'd' letter
    } else if (e.keyCode == '40' || e.keyCode == '68') {
       console.log('down pressed ');
        // down arrow
      if(isMoveValid(player_position[0], 'down')) {
        var old_player_position = player_position;
        
        // update player position
        player_position = [player_position[0] + 1, player_position[1]];
        
        // update board
        x = movePlayer(x, old_player_position, [player_position[0], player_position[1]]);
      }
    } else if (e.keyCode == '37') {
      console.log('left pressed ');
       // left arrow
      if(isMoveValid(player_position[1], 'left')) {
        var old_player_position = player_position;
        
        // update player position
        player_position = [player_position[0], player_position[1] - 1];
        
        // update board
        x = movePlayer(x, old_player_position, [player_position[0], player_position[1]]);
        
      }
    } else if (e.keyCode == '39') {
    	console.log('right pressed ');
       // right arrow
       if(isMoveValid(player_position[1], 'right')) {
        var old_player_position = player_position;
        
        // update player position
        player_position = [player_position[0], player_position[1] + 1];
        
        // update board
        x = movePlayer(x, old_player_position, [player_position[0], player_position[1]]);
        
      }
    }
}
      
function isMoveValid(player_position, direction) {
  if (direction == 'up') {
    if (player_position != 0) {
      console.log('valid');
      return true
    } else {
      console.log('invalid');
      console.log(player_position);
      
      return false
    }
  } else if (direction == 'down') {
    if (player_position != (row_bounds - 1)) {
        console.log('valid');
        return true
    } else {
        console.log('invalid');
      return false
    }
  } else if (direction == 'left' ) {
    if (player_position != 0 ) {
      	console.log('valid');
      	return true
  	} else {
      	console.log('invalid');
      	console.log(player_position);
    	return false
  	}
  } else if (direction == 'right') {
    if (player_position != (column_bounds - 1)) {
        console.log('valid');
        return true
    } else {
        console.log('invalid');
      return false
	}
  }
}

function movePlayer(board, old_player_position, new_player_position) {
  var old_row = old_player_position[0];
  var old_col = old_player_position[1];
  var new_row = new_player_position[0];
  var new_col = new_player_position[1];
  
    if (board[new_row][new_col] == 'p') {
    	console.log('moved to potion') 
    	potion_counter = potion_counter + 1;
    	console.log('number of potions' + potion_counter)
    }
    else if (board[new_row][new_col] == 's') {
    	console.log('moved to sword') 
    	sword_counter = sword_counter + 1;
    	console.log('number of sword' + sword_counter)
  } else if (board[new_row][new_col] == 'e') {
    	console.log('moved to empty') 
  } else if (board[new_row][new_col] == 't') {
    	console.log('moved to treasure')
    	treasure_counter = treasure_counter +1;
    	console.log('number of treasures collected' + treasure_counter)
    	if (treasure_counter == 3) {
    		console.log('game won')
    		alert('game won, start over')
    } 
  } else if (board[new_row][new_col] == 'm') {
    console.log('moved to monster')
    if(sword_counter>0){
    	sword_counter--;
    	console.log('swords left' + sword_counter)
    }
    else if(potion_counter > 0){
    	potion_counter--;
    	console.log('potions left' + potion_counter)
    } else{
    	console.log('GAME OVER')
    	alert('GAME OVER, START AGAIN')
    }

  board[old_row][old_col] = "e";
  board[new_row][new_col] = "Player";
  
  console.log(board);
  return board
	}
}