const box=document.querySelectorAll('.box');
const playertext=document.getElementById('playertext');
let firstPlayer='X';
let Over=false;
let winner;


function startgame(){
    playertext.textContent=`${firstPlayer}'ın sırası`;
    box.forEach(boxs=>boxs.addEventListener('click',() => choosebox(boxs)));

    }
   

    function choosebox(boxs){
        if(boxs.textContent===''){
            boxs.textContent=firstPlayer;
            changeplayer()
        }
        controlWin()
        controlDraw()

        if(Over){
            playertext.textContent=`${winner} kazandı`
            document.querySelector('.box-container').style.display='none';
            document.getElementById('btn').style.display='block'
        }
    }

    function changeplayer(){
        if(firstPlayer==='X'){
            firstPlayer='O';
            playertext.textContent=`${firstPlayer}'ın sırası`
            return
        }
        else if(firstPlayer==='O'){

            firstPlayer='X';
            playertext.textContent=`${firstPlayer}'ın sırası`
        }
    }
    function controlWin(){
        controlrow();
        controlcolumn();
        controlX();
    }
    function controlrow(){
        let row1= box[0].textContent===box[1].textContent&&box[0].textContent===box[2].textContent&&box[0].textContent!=='';
        let row2= box[3].textContent===box[4].textContent&&box[3].textContent===box[5].textContent&&box[3].textContent!=='';
        let row3= box[6].textContent===box[7].textContent&&box[6].textContent===box[8].textContent&&box[6].textContent!=='';
        if(row1||row2||row3){
            Over=true
          
        }
        if (row1) return winner = box[0].textContent
        if (row2) return winner = box[3].textContent
        if (row3) return winner = box[6].textContent
    }
    function controlcolumn(){
        let col1= box[0].textContent===box[3].textContent&&box[0].textContent===box[6].textContent&&box[0].textContent!=='';
        let col2= box[1].textContent===box[4].textContent&&box[1].textContent===box[7].textContent&&box[1].textContent!=='';
        let col3= box[2].textContent===box[5].textContent&&box[2].textContent===box[7].textContent&&box[2].textContent!=='';
        if(col1||col2||col3){
            Over=true
        }
      
        if (col1) return winner = box[0].textContent
        if (col2) return winner = box[1].textContent
        if (col3) return winner = box[2].textContent
    }
    function controlX(){
        let cross1= box[0].textContent===box[4].textContent&&box[0].textContent===box[8].textContent&&box[0].textContent!=='';
        let cross2= box[2].textContent===box[4].textContent&&box[2].textContent===box[6].textContent&&box[2].textContent!=='';
        if(cross1||cross2){
            Over=true
        }
        if (cross1) return winner = box[0].textContent
        if (cross2) return winner = box[2].textContent
    }
    function controlDraw(){
        if(box[0].textContent!==""&&box[1].textContent!==""&&box[2].textContent!==""&&box[3].textContent!==""&&box[4].textContent!==""&&box[5].textContent!==""&&box[6].textContent!==""&&box[7].textContent!==""&&box[8].textContent!==""){
            playertext.textContent='Berabere'
            document.querySelector('.box-container').style.display='none';
            document.getElementById('btn').style.display='block'
        }
    }
startgame();