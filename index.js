let list=[];

function Prayut(){
    alert("You choose M44 of Prayut Chan-o-cha")
    list[0]="You choose M44 of Prayut Chan-o-cha";
}
function Prawit(){
    alert("You choose Ring and Watch of Prawit Wongsuwan")
    list[0]="You choose Ring and Watch of Prawit Wongsuwan";
}
function Thaksin(){
    alert("You choose Thaicom of Thaksin Shinawatra")
    list[0]="You choose Thaicom of Thaksin Shinawatra";
}
function Continue() {
    if (document.getElementById('g1').checked) {
    list[2] = document.getElementById('g1').value;
  } else if (document.getElementById('g2').checked) {
    list[2] = document.getElementById('g2').value;
  } else if (document.getElementById('g3').checked) {
    list[2] = document.getElementById('g3').value;
  }
    list[3] = document.getElementById('namecard').value;
    list[4] = document.getElementById('numbercard').value;
  
    if (list[0] === undefined) {
      alert("Please check Poster choice")
      wait(2000);
    } else if (list[2] === undefined) {
      alert("Please check your card type");
      wait(2000);
    } else if (list[3] === "") {
      alert("Please check name of card");
      wait(2000);
    } else if (list[4] === ""){
      alert("Please check number of card");
      wait(2000);
    }
  
    if (confirm("Are you want to buy?")===true) {
      document.getElementById("c").innerHTML = list[0]+"<br>"+" by "
            +list[2]+" Name of Card is : "+list[3]
            +" ,Number of Card is : "+list[4];
    }
  
  }