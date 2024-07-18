const emoji = ['&#128507;','&#128507;','&#128508;','&#128508;','&#128509;','&#128509;','&#128510;','&#128510;','&#128511;','&#128511;','&#128512;','&#128512;','&#128513;','&#128513;','&#128514;','&#128514;'];

function shuffle(array)
{
    for(let i=array.length-1;i>=0;i--)
    {
        let j = Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];
    }
    return array;
}

var shuf_emoji = shuffle(emoji);
for(let i=0;i<shuf_emoji.length;i++)
{
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emoji[i];
    box.onclick = function(){
        this.classList.add('boxOpen');
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length>1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML){
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
    
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    if(document.querySelectorAll('.boxMatch').length == emoji.length)
                    {
                        alert("Winner");
                    }
                    
                }
                else
                {
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                }
            }
        },500)
    }
    
    document.querySelector('.game').appendChild(box);
}