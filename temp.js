var count =0;
var array=[];
var se =0;
var arr=[[" "," "," "],[" "," "," "],[" "," "," "]];
var set=false;
var setttt=false;
var put =false;
var seo=Math.random();
seo=seo*2;
seo=Math.floor(seo);
console.log(seo);
for (let index = 0; index < 9; index++) {
    array[index]=" ";
}
var array1=[];
var select = Math
{
$("#refer").click(function (e) { 
  seo=Math.random();
seo=seo*2;
seo=Math.floor(seo);
     set=false;
     se=0;
     put=false;
    for (let index = 0; index < 9; index++) {
        array[index]=" ";
        initialise();
    }
     count =0;
     $(".board").text("");
     $(".chance").text("chance of O");
     $(".board").removeClass("draw");
     
     for (let index = 0; index <document.querySelectorAll(".board").length; index++) {
        if (document.querySelectorAll(".board")[index].classList.contains("red")) {
         document.querySelectorAll(".board")[index].classList.remove("red");
        }
     }
     for (let index = 0; index <document.querySelectorAll(".board").length; index++) {
        if (document.querySelectorAll(".board")[index].classList.contains("blue")) {
         document.querySelectorAll(".board")[index].classList.remove("blue");
        }
     }
});

$("#first").click(function (e) { 
    console.log("click");
    if (!put) {
        console.log("called here");
        count=-1;
   tapbtn();
    }
    put=true;
});

 $(".board").click(function (e) { 
  
    if ($(this).text()!="") {
        alert("select other box");
    }else{
        if (gameover(arr)&&set==false) {
            setTimeout(() => {
                var aud =new Audio("over.wav");
                aud.play();
            }, 300);
            set=true;
            console.log("refreshimg..");
          setTimeout(() => {
            $("#refer").click();
          }, 2000);
      
          return;
        } 
      if (count%2==0) {
        $(this).text("O");
        $(".chance").text("Chance of X");
       var o= $(this).attr("id");
        array[o]="O";
        var Aud=new Audio("tap.wav");
        Aud.play();
        count++;
      }
      else{
        $(this).text("X");
        $(".chance").text("Chance of O");
        var o= $(this).attr("id");
        array[o]="X";
        var Aud=new Audio("x.mp3");
        Aud.play();
        count++;
      }
      initialise();
        if (count%2!=0) {
        if (!arrayfull()&&!gameover(arr)) {
          tapbtn();
          return;
        }
        }
        if (arrayfull()&&set==false) {
            $(".board").addClass("draw");
            $(".chance").text("draw");
            var aud =new Audio("draw.mp3");
            set=true;
            setTimeout(() => {
              $("#refer").click();
            }, 2000);
            return;
        }
    }
    gameover(arr);
    });

function arrayfull(params) {
    for (let index = 0; index < array.length; index++) {
       if (array[index]==" ") {
          return false;
       }
    }
    return true;
}
function initialise(params) {
    var t=0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        arr[i][j]=array[t];
         t++;
      }
    }
}
function empty( n ) { 
    if (array[n]==" ") {
       return true;
    }
    return false;
}
function gameover(array) {
   
    if (array[0][0]=="X"&&array[1][1]=="X"&&array[2][2]=="X")
    {
        document.querySelector(".chance").innerHTML="Xwins  ";
        console.log("oprty");
        document.querySelectorAll(".board")[0].classList.add("red");
        document.querySelectorAll(".board")[4].classList.add("red");
        document.querySelectorAll(".board")[8].classList.add("red");
        audplay("x");
        return true;
    } 
 if (array[0][2]=="X"&&array[1][1]=="X"&&array[2][0]=="X")
    {
       
        document.querySelector(".chance").innerHTML="Xwins";
        document.querySelectorAll(".board")[2].classList.add("red");
        document.querySelectorAll(".board")[4].classList.add("red");
        document.querySelectorAll(".board")[6].classList.add("red");
        audplay("x");
        return true;
    } 

// rows check
    for(let i=0;i<3;i++) { 
var f =1;
for(let j=0;j<3;j++) {
if (array[i][j]=="O"|| array[i][j]==" ") {
        f=0;
    }   
}
 if (f==1) {
    document.querySelector(".chance").innerHTML="Xwins";
  for (let p=i*3;p<(i*3)+3;p++){
    document.querySelectorAll(".board")[p].classList.add("red");
  }
  audplay("x");
return true;
}
}
//column check    
    for(let i=0;i<3;i++) { 
var f =1;
for(let j=0;j<3;j++) {
if (array[j][i]=="O"|| array[j][i]==" ") {
        f=0;
    }   
}
 if (f==1) {
    document.querySelector(".chance").innerHTML="Xwins";
  for (let p=0;p<3;p++){
    document.querySelectorAll(".board")[i].classList.add("red");
    i=i+3;
  }
  audplay("x");
return true;
}
}

// for o
if (array[0][0]=="O"&&array[1][1]=="O"&&array[2][2]=="O")
{
document.querySelector(".chance").innerHTML="Owins  ";

document.querySelectorAll(".board")[0].classList.add("blue");
document.querySelectorAll(".board")[4].classList.add("blue");
document.querySelectorAll(".board")[8].classList.add("blue");
audplay("o");
return true;
} 
if (array[0][2]=="O"&&array[1][1]=="O"&&array[2][0]=="O")
{
document.querySelector(".chance").innerHTML="Owins";
document.querySelectorAll(".board")[2].classList.add("blue");
document.querySelectorAll(".board")[4].classList.add("blue");
document.querySelectorAll(".board")[6].classList.add("blue");
audplay("o");
return true;
} 


for(let i=0;i<3;i++) { 
var f =1;
for(let j=0;j<3;j++) {
if (array[i][j]=="X"|| array[i][j]==" ") {
        f=0;
    }   
}
 if (f==1) {
    document.querySelector(".chance").innerHTML="Owins";
  for (let p=i*3;p<(i*3)+3;p++){
    document.querySelectorAll(".board")[p].classList.add("blue");
  }audplay("o");
return true;
}
}
//column check    
    for(let i=0;i<3;i++) { 
var f =1;
for(let j=0;j<3;j++) {
if (array[j][i]=="X"|| array[j][i]==" ") {
        f=0;
    }   
}
 if (f==1) {
    document.querySelector(".chance").innerHTML="Owins";
  for (let p=0;p<3;p++){
    document.querySelectorAll(".board")[i].classList.add("blue");
    i=i+3;
  }audplay("o");
return true;
}
}

  return false;
}

function audplay(params) {
    var aud =new Audio(params+" wins.mp3");
    aud.play();
}

}

function tapbtn(params) {

    console.log("tapbth");
    var aud =new Audio("tap.wav");
    aud.play();
    initialise();
    
    if (tactic2()) {
      return true;
   }
   if (tactic3()) {
    return true;
 }
    if (twoinarowforc()) {
      return true;
    }
    if (diagonalbyc()) {
      return true;
    }
    if (reversetwoinarowbyc()) {
      return true;
    }
    if (middlevertbyc()) {
      return true;
    }
    if (twoincolbyc()) {
      return true;
    }
    if (reversevertbyc()) {
      return true;
    }
    if (middlehoribyc()) {
      return true;
    }  
    if (middlehori()) {
      return true;
    }
    if (reversevert()) {
      return true;
    }
    if (twoincol()) {
      return true;
    }
    if (middlevert()) {
      return true;
    }
    if (twoinarow()) {
      return true;
    }
    if (reversetwoinarow()) {
       return true;
    }
    if (diagonal()) {
      return true;
    }
    if (tactic()) {
      return true
    }
    if (strate1()) {
      return true;
    }
 
  
    console.log("called randint")
    randint();
    return true;
}

{
function randint(params) {
   var i =Math.random();
   i=i*3;
   i=Math.floor(i);
   
   var j =Math.random();
   j=j*3;
   j=Math.floor(j);
   if (arr[i][j]==" ") {
     var num =(i*3)+j;
      $("#"+num).click();
    initialise();
     return true;
   }
    randint();
}
function tactic(params) {
  if (arr[1][1]==" ") {
     num=4;
      $("#"+num).click();
     initialise();
    return true;
    }
  if (arr[0][0]==" "&&se==0) {
    num=0;
      $("#"+num).click();
    se=1; initialise();
     return true;
  }
  if (arr[0][2]==" "&&se==0) {
    num=2;
       $("#"+num).click();
      se=1; initialise();
     return true;
  }
  if (arr[0][2]==" "&&se==0) {
    num=6;
      $("#"+num).click();
     se=1; initialise();
     return true;
  }
  if (arr[2][0]==" "&&se==0) {
    num=8;
    $("#"+num).click();
    se=1; initialise();
     return true;
  }
  return false;
}
function diagonal(params) {
  if (arr[0][0]=="O"&&arr[1][1]=="O") {
     var num = 8;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[2][2]=="O"&&arr[1][1]=="O") {
     var num = 0;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[2][2]=="O"&&arr[0][0]=="O") {
     var num = 5;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[2][0]=="O"&&arr[0][2]=="O") {
     var num = 5;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[0][2]=="O"&&arr[1][1]=="O") {
     var num = 6;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[2][0]=="O"&&arr[1][1]=="O") {
     var num = 2;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }

  return false;
}
function diagonalbyc(params) {
  if (arr[0][0]=="X"&&arr[1][1]=="X") {
     var num = 8;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[2][2]=="X"&&arr[1][1]=="X") {
     var num = 0;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[2][2]=="X"&&arr[0][0]=="X") {
     var num = 5;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[2][0]=="X"&&arr[0][2]=="X") {
     var num = 5;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[0][2]=="X"&&arr[1][1]=="X") {
     var num = 6;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }
  if (arr[2][0]=="X"&&arr[1][1]=="X") {
     var num = 2;
       if (empty(num)) { 
         $("#"+num).click();
         return true;
    }
  }

  return false;
}
function twoinarow(params) {
   for(let i=0;i<3;i++){
    let j=0;  
    if (arr[i][j]=="O"&&arr[i][j+1]=="O") {
           var num = (i*3)+(j+2);
           if (empty(num)) {
             $("#"+num).click();  
                return true;
           }
       }
    
   }
   return false;
}
function twoinarowforc(params) {
   for(let i=0;i<3;i++){
    let j=0;  
    if (arr[i][j]=="X"&&arr[i][j+1]=="X") {
           var num = (i*3)+(j+2);
           if (empty(num)) {
             $("#"+num).click();  
                return true;
           }
       }
   }
   return false;
}
function  reversetwoinarow(params) {
  for(let i=0;i<3;i++){
    let j=0;  
    if (arr[i][j+2]=="O"&&arr[i][j+1]=="O") {
           var num = (i*3)+(j);

           if (empty(num)) {
            console.log("reverse two in a raw ");
             $("#"+num).click();  
                return true;
           }
       }
   }
   return false;
}
function  reversetwoinarowbyc(params) {
  for(let i=0;i<3;i++){
    let j=0;  
    if (arr[i][j+2]=="X"&&arr[i][j+1]=="X") {
           var num = (i*3)+(j);
           if (empty(num)) {
            console.log("reverse two in a raw by c");
             $("#"+num).click();  
                return true;
           }
       }
   }
   return false;
}
function middlehori(params) {
  for(let i=0;i<3;i++) { 
    if (arr[i][0]=="O"&&arr[i][2]=="O"){
    num=(i*3)+1;
    if (empty(num)) { 
      $("#"+num).click();
      console.log("called middle hori success");
      return true;
 }
 }
}
return false;
}
function middlehoribyc(params) {
  for(let i=0;i<3;i++) { 
    if (arr[i][0]=="X"&&arr[i][2]=="X"){
      num=(i*3)+1;
    if (empty(num)) { 
      $("#"+num).click();
      console.log("called middle hori by c ");
      return true;
 }
 }
}
return false;
}
function twoincol(params) {
  for(let j=0;j<3;j++){
    i=0;
    if (arr[i][j]=="O"&&arr[i+1][j]=="O") {
      console.log("run col");
           var num = ((i+2)*3)+j;
           if (empty(num)) {
            console.log("two in vert");
             $("#"+num).click();  
               return true;
           }
       }
    
   }
   return false;
}
function twoincolbyc(params) {
  for(let i=0;i<2;i++){
    for(let j=0;j<3;j++) { 
       if (arr[i][j]=="X"&&arr[i+1][j]=="X") {
           var num = ((i+2)*3)+j;
           if (empty(num)) {
             $("#"+num).click();  
               return true;
           }
       }
    }
   }
   return false;
}
function reversevert(params) {
  for(let j=0;j<3;j++){
  i=0;
    if (arr[i+2][j]=="O"&&arr[i+1][j]=="O") {
           var num = ((i)*3)+j;
           if (empty(num)) {
            console.log("two in reverse vert");
             $("#"+num).click();  
               return true;
           }
       }
    
   }
   return false;
}
function reversevertbyc(params) {
  for(let j=0;j<3;j++){
    i=0;
      if (arr[i+2][j]=="X"&&arr[i+1][j]=="X") {
             var num = ((i)*3)+j;
             if (empty(num)) {
              console.log("two in reverse vert");
               $("#"+num).click();  
                 return true;
             }
         }
      
     }
     return false;
}
function middlevert(params) {
  for(let i=0;i<3;i++) { 
      if (arr[0][i]=="O"&&arr[2][i]=="O"){
      num=i+3;
      if (empty(num)) { 
        $("#"+num).click();
        console.log("called middle vert ");
        return true;
   }
   }
  }
  return false;
}
function middlevertbyc(params) {
  initialise();
  for(let i=0;i<3;i++) { 
   if (arr[0][i]=="X"&&arr[2][i]=="X"){
      num=i+3;
      if (empty(num)) { 
        $("#"+num).click();
        console.log("called middle vert by c");
        console.log(array[0]+" "+array[6]);
        console.log(arr[i][0]+" "+arr[i][2]);
        return true;
   }
   }
  }
  return false;
}
function tactic2(params) {
   if (arr[1][1]=="O"&&arr[2][2]=="O"&&count==3) {
      $("#2").click();
      return true;
   }
   return false;
}
function tactic3 () { 
  if (arr[1][2]=="O"&&arr[2][0]=="O"&&arr[0][2]==" ") {
    console.log("run");
     $("#2").click();
     return true;
  }
  if (arr[0][0]=="O"&&arr[2][1]=="O"&&arr[2][0]==" ") {
     $("#6").click();
     return true;
  }
  if (arr[0][2]=="O"&&arr[2][1]=="O"&&arr[2][2]==" ") {
     $("#8").click();
     return true;
  }
  if (arr[1][2]=="O"&&arr[2][1]=="O"&&arr[2][0]==" ") {
     $("#8").click();
     return true;
  }

  return false;
}
}
function strate1(params) {
   if (put=true&&(arr[2][1]=="O"||arr[1][2]=="O"||arr[1][0]=="O"||arr[0][1]=="O")) {
    
    if (arr[0][2]==" ") {
      $("#2").click();
      return true;
    }

   }
   return false;
}
function strat2(params) {
   var strand =Math.random();
   strand=strand*4;
   strand=Math.floor(strand);

   var i ;
    var j;
    switch (strand) {
      case 0:
        
        break;
    
      default:
        break;
    } 
}
