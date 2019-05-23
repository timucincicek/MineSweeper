//X variable is for cell count of the table
var x=25,integer,amount,cell,score=0,numbers=[];
//function to give a prompt to user
function showConfirm() {
    amount = prompt("Please enter amount of mine:");
    if (amount<=25&&amount>=1) {
    gameStarts();
  } 
  else {
    alert("Amount of mine should be number between 1 and 25");
      showConfirm();
  }
}
//if condition is not correct call the function infinitely until its true.
showConfirm();
function gameStarts(){
//random numbers for locations of random mines and pushing into array
while(numbers.length < amount){
    var r = Math.floor(Math.random()*(x-1)) + 1;
    if(numbers.indexOf(r) === -1) numbers.push(r);
}
//refresh the page to play the game again when game is over.
document.getElementById("refresh").addEventListener("click", function(){
    document.location.reload(true);
  });
//Query to add click on each cell of table
$('td:not(.td2)').click(tableClick);
function tableClick()
{
    //gets id which cell clicked
    var clickedCell=$(this).attr('id');
    cell=$(this);
    //convert string id to int
    integer = parseInt(clickedCell, 10);
    //if clicked to mine
    if(numbers.includes(integer)==true)
    {      
        //make onclick function false for all cells
       $('td:not(.td2)').off('click');
       //change the text
       document.getElementById("score").innerHTML = "GAME OVER";
       document.getElementById("para").innerHTML = "";
       //make appear .endgame css class and give it a text
       document.querySelector(".endgame").style.display = "block";
       document.querySelector(".endgame .text").innerText = "Your Total Score is:"+(score*amount);
       //loop to place mine image which cells those mine located randomly
       for(var i=0;i<numbers.length;i++)
       {
        var str1 = "#";
        var str2 = numbers[i].toString();
        $(str1.concat(str2)).empty().append("<img src='Mine2.ico'  width='50px'  height='50px'/>");
       }
       //change backgroundcolor to red
       document.getElementById('table1').style.backgroundColor = "#ff0000";
    }
    else
    {
        //make onclick function false for already clicked cell.
        cell.off('click');
        //increase score on each correct press and print
        score+=10;
        document.getElementById("para").innerHTML = score;
        //place flag image when user presses to cells where mines not located.
        cell.append("<img src='Flag.ico'  width='50px'  height='50px'/>");
    }
}
}
