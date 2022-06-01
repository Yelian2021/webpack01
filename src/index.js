var s = 10;

function matsuA(s){
    return s + 10
}

console.log(matsuA(20));

//jquery
import $ from 'jquery';

import './css/style.css';
import './css/header.css';
import './css/footer.css';

$('body').css('background-color','#666');
$('.box').css({
    'width':'300px',
    'height':'300px',
    'background-color':'black',
    'margin' : '0 auto', 
    'transition':'.5s',
    'font-size':'16px',
    'z-index':'3',
});
