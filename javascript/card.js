var $todaCard = document.querySelector('.toda-card');
var $cardColors=document.querySelectorAll('.card-options');

    $todaCard.addEventListener('click',function(event){
        var $this =event.target;
        var $card = $this.parentNode.parentNode.parentNode;
        var $cardContent = $card.querySelector('.card-content');
        if($this.dataset.color){

            $card.dataset.color = $this.dataset.color;

            for(var p=0; p<$cardColors.length;p++){
                $cardColors[p].classList.remove('isActive');  
            };
            $this.classList.add('isActive');
        };

        if($this.classList.contains('card_delete')){
            $card.remove();  
        };

        if($this.classList.contains('card_edit')){
            if($cardContent.getAttribute('contenteditable')=='false'){
                $cardContent.setAttribute('contenteditable','true');
                $cardContent.focus();
                $this.classList.add('isActive');
            }else{
                $cardContent.setAttribute('contenteditable','false');
                $cardContent.blur();
                $this.classList.remove('isActive');
            };

        };
    });





