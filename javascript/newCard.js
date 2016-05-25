var $newCard= document.querySelector('.newCard');
var $newCardContent = document.querySelector('.newCard-content');
var $newCardAction = document.querySelector('.newCard-Action');

$newCardContent.addEventListener('input',function(){
    var $error = document.querySelector('.error');
    if($error!=null){
        $error.remove();
    }
});

$newCard.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('click');
    if($newCardContent.value ==''){
        if(document.querySelector('.error')==null){
            var $erro = document.createElement('span');
            $erro.classList.add('error');
            $erro.textContent='Por favor, preencha o campo a baixo.';
            $newCard.insertBefore($erro, $newCardContent);
        };
}else{

            var $warpCard = document.querySelector('.toda-card');
            var $card =document.querySelector('.card');
            var $copyCard=$card.cloneNode(true);
          $copyCard.querySelector('.card-content').textContent= $newCardContent.value;
         $warpCard.insertBefore($copyCard,$card); 
        };
    });