let li=[];

function Prayut(){
    alert("You choose M44 of Prayut Chan-o-cha")
    li[0]="M44 of Prayut Chan-o-cha";
}
function Prawit(){
    alert("You choose Ring and Watch of Prawit Wongsuwan")
    li[0]="Ring and Watch of Prawit Wongsuwan";
}
function Thaksin(){
    alert("You choose Thaicom of Thaksin Shinawatra")
    li[0]="Thaicom of Thaksin Shinawatra";
}
function Gg() {
    if (document.getElementById('g1').checked) {
    li[2] = document.getElementById('g1').value;
  } else if (document.getElementById('g2').checked) {
    li[2] = document.getElementById('g2').value;
  } else if (document.getElementById('g3').checked) {
    li[2] = document.getElementById('g3').value;
  }
    li[3] = document.getElementById('namecard').value;
    li[4] = document.getElementById('numbercard').value;
  
    if (li[0] === undefined) {
      alert("Please check Item choice")
      wait(2000);
    } else if (li[2] === undefined) {
      alert("Please check your Cryptocurrency type");
      wait(2000);
    } else if (li[3] === "") {
      alert("Please check Name of account");
      wait(2000);
    } else if (li[4] === ""){
      alert("Please check Pubile key number");
      wait(2000);
    }
  
    if (confirm("Are you want to buy?")===true) {
      document.getElementById("j").innerHTML ="Buy "+li[0]+"<br>"+" by "
            +li[2]+" Name of account is : "+li[3]
            +" ,Pubile key number is: "+li[4];
    }
  
  }