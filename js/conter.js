export default function Conter($conter, max_number=0){
    
    const $less = $conter.querySelector('.less')
    const $conter_num = $conter.querySelector('.conter_num')
    const $more = $conter.querySelector('.more')

    $less.addEventListener('click', function(e){
        if($conter_num.value<=0){
            return false
        }
        $conter_num.value = parseInt($conter_num.value) - 1
        
    })
    $more.addEventListener('click', function(e){
        
        if(max_number && $conter_num.value>=max_number){
            return false
        }
        $conter_num.value = parseInt($conter_num.value) + 1
    })
}

