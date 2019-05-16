var znak_user = 'X';
var znak_comp = 'O';

var score_user = '0';
var score_comp = '0';

/**
 * Инициализация
 * @returns {void}
 */
$(document).ready(function(){
    /*
     * Увеличение на 130%
     */
    document.body.style.zoom = "130%";

    var exit_flag = false;
    var win_user_array = ['123','456','789','147','258','369','159','357'];
         
    /**
    *Определяем победу игрока
    *
    *@param {integer} znak - знак Х
    *@return {integer} +1 к счёту игрока
    */
    function check3user(znak){
        for (var i = 0; i < 8; i++) {
         
            var first = 'kletka' + win_user_array[i].substr(0,1);
            var second = 'kletka' + win_user_array[i].substr(1,1);
            var third = 'kletka' + win_user_array[i].substr(2,1);
             
             /**
             * Проверка выигрыша игрока
             */ 
            if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == znak ){
                $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').css("background-color", "#FFF");
                $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
                $('.result').text('Вы выиграли!');
                $('.MAIN_DIV .div').unbind('click');
                score_user++;
                Score();
                exit_flag = true;
            }    
        }
    }
     
     /**
    *Определяем возможность победы компьютера
    *
    *@param {integer} znak - знак О
    *@return {integer} +1 к счёту компьютера
    */
    function check2comp(znak){
        for (var i = 0; i < 8; i++) {
         
            var first = 'kletka' + win_user_array[i].substr(0,1);
            var second = 'kletka' + win_user_array[i].substr(1,1);
            var third = 'kletka' + win_user_array[i].substr(2,1);
             
             /**
             * Проверка выигрыша коспьютера
             */ 
            if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == '' && exit_flag == false ){
                $('.'+third).text(znak);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.MAIN_DIV .div').unbind('click');
                score_comp++;
                Score();
                exit_flag = true;
            }    
             
            if( $('.'+first).text() == znak && $('.'+second).text() == '' && $('.'+third).text() == znak && exit_flag == false ){
                $('.'+second).text(znak);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.MAIN_DIV .div').unbind('click');
                score_comp++;
                Score();
                exit_flag = true;
            }    
             
            if( $('.'+first).text() == '' && $('.'+second).text() == znak && $('.'+third).text() == znak && exit_flag == false ){
                $('.'+first).text(znak);
                $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
                $('.result').text('Вы проиграли!');
                $('.MAIN_DIV .div').unbind('click');
                score_comp++;
                Score();
                exit_flag = true;
            }    
        }
    }
     
    /**
    *Определяем ход компьютера
    *
    *@param {integer} znak - знак О
    */
    function check2user(znak){
 
        for (var i = 0; i < 8; i++) {
         
            var first = 'kletka' + win_user_array[i].substr(0,1);
            var second = 'kletka' + win_user_array[i].substr(1,1);
            var third = 'kletka' + win_user_array[i].substr(2,1);
 
             
            if( exit_flag == false ){
                if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == '' ){
                    $('.'+third).text(znak_comp);
                    exit_flag = true;
                }
            }
                         
            if( exit_flag == false ){
                if( $('.'+first).text() == znak && $('.'+second).text() == '' && $('.'+third).text() == znak ){
                    $('.'+second).text(znak_comp);
                    exit_flag = true;
                }    
            }    
             
            if( $('.'+first).text() == '' && $('.'+second).text() == znak && $('.'+third).text() == znak ){
                $('.'+first).text(znak_comp);
                exit_flag = true;
            }
            
            if(exit_flag) break;
        }
    }
     
    /**
    * Обработка клика ☺ + ☻™ = ♥♥♥
    */  
    $('.MAIN_DIV .div').click(function(){
        //Если клетка пустая
        if( $(this).text() == '' ){
            $(this).text(znak_user); 
            check();   
            check3user(znak_user);
            check2comp(znak_comp);
            check2user(znak_user);
            if( exit_flag == false ){
                for (var i = 1; i < 10; i++) {    
                    if( $('.kletka'+i).text() == '' ){
                        $('.kletka'+i).text(znak_comp);
                        break;
                    }    
                }
            }else exit_flag = false;
        }
    });
});

/**
*Перезагрузка игры
*/
function restart(){
    $('.result').text('Ваш ход!');
    $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').text('');
    $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').css("background-color", "#FFF");
    $( ".MAIN_DIV .div" ).bind("click", function (){
 
        /**
        * Если клетка пустая
        */ 
        if( $(this).text() == '' ){
            $(this).text(znak_user);    
            check3user(znak_user);
            check2comp(znak_comp);
            check2user(znak_user);
             
            if( exit_flag == false ){
                for (var i = 1; i < 10; i++) {    
                    if( $('.kletka'+i).text() == '' ){
                        $('.kletka'+i).text(znak_comp);
                        break;
                    }    
                }
            }else exit_flag = false;
        }
    });
} 

var exit_flag = false;
var win_user_array = ['123','456','789','147','258','369','159','357'];
     
/**
*Определяем победу игрока
*
*@param {integer} znak - знак Х
*@return {integer} +1 к счёту игрока
*/
function check3user(znak){
    for (var i = 0; i < 8; i++) {
        check();
        var first = 'kletka' + win_user_array[i].substr(0,1);
        var second = 'kletka' + win_user_array[i].substr(1,1);
        var third = 'kletka' + win_user_array[i].substr(2,1);
         
         /**
         * Проверка выигрыша игрока
         */ 
        if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == znak ){
            $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').css("background-color", "#FFF");
            $('.'+first+',.'+second+',.'+third).css("background-color", "#83e2c3");
            $('.result').text('Вы выиграли!');
            $('.MAIN_DIV .div').unbind('click');
            score_user++;
            Score();
            exit_flag = true;
        }     
    }
}
 
/**
*Определяем возможность победы компьютера
*
*@param {integer} znak - знак О
*@return {integer} +1 к счёту компьютера
*/
function check2comp(znak){
    for (var i = 0; i < 8; i++) {
     
        var first = 'kletka' + win_user_array[i].substr(0,1);
        var second = 'kletka' + win_user_array[i].substr(1,1);
        var third = 'kletka' + win_user_array[i].substr(2,1);
         
        /**
        * Проверка выигрыша коспьютера
        */ 
        if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == '' && exit_flag == false ){
            $('.'+third).text(znak);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Вы проиграли!');
            $('.MAIN_DIV .div').unbind('click');
            score_user++;
            Score();
            exit_flag = true;
        }    
         
        if( $('.'+first).text() == znak && $('.'+second).text() == '' && $('.'+third).text() == znak && exit_flag == false ){
            $('.'+second).text(znak);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Вы проиграли!');
            $('.MAIN_DIV .div').unbind('click');
            score_user++;
            Score();
            exit_flag = true;
        }    
         
        if( $('.'+first).text() == '' && $('.'+second).text() == znak && $('.'+third).text() == znak && exit_flag == false ){
            $('.'+first).text(znak);
            $('.'+first+',.'+second+',.'+third).css("background-color", "#EF7C7C");
            $('.result').text('Вы проиграли!');
            $('.MAIN_DIV .div').unbind('click');
            score_user++;
            Score();
            exit_flag = true;
        }    
    }
}
 
/**
*Определяем ход компьютера
*
*@param {integer} znak - знак О
*/
function check2user(znak){

    for (var i = 0; i < 8; i++) {
     
        var first = 'kletka' + win_user_array[i].substr(0,1);
        var second = 'kletka' + win_user_array[i].substr(1,1);
        var third = 'kletka' + win_user_array[i].substr(2,1);

         
        if( exit_flag == false ){
            if( $('.'+first).text() == znak && $('.'+second).text() == znak && $('.'+third).text() == '' ){
                $('.'+third).text(znak_comp);
                exit_flag = true;
            }
        }
                     
        if( exit_flag == false ){
            if( $('.'+first).text() == znak && $('.'+second).text() == '' && $('.'+third).text() == znak ){
                $('.'+second).text(znak_comp);
                exit_flag = true;
            }    
        }    
         
        if( $('.'+first).text() == '' && $('.'+second).text() == znak && $('.'+third).text() == znak ){
            $('.'+first).text(znak_comp);
            exit_flag = true;
        }
        if(exit_flag) break;
    }
}

/**
*Обработка клика ☺ + ☻™ = ♥♥♥
*/ 
$('.MAIN_DIV .div').click(function(){
    if( $(this).text() == '' ){
        $(this).text(znak_user); 
        check();   
        check3user(znak_user);
        check2comp(znak_comp);
        check2user(znak_user);  
        if( exit_flag == false ){
            for (var i = 1; i < 10; i++) {    
                if( $('.kletka'+i).text() == '' ){
                    $('.kletka'+i).text(znak_comp);
                    break;
                }
            }
        }else exit_flag = false;
    }
});

/**
*Подсветка желтым цветом поля, если ничья
*/
function check() {
    if ($('.kletka1').text() != '' && $('.kletka2').text() != '' && $('.kletka3').text() != '' && $('.kletka4').text() != '' && $('.kletka5').text() != '' && $('.kletka6').text() != '' && $('.kletka7').text() != '' && $('.kletka8').text() != '' && $('.kletka9').text() != ''){
        $('.result').text("Ничья"); 
        $('.kletka1, .kletka2, .kletka3, .kletka4, .kletka5, .kletka6, .kletka7, .kletka8, .kletka9').css("background-color", "#FFE097");  
    }
}

/**
*Генерация счёта игры
*
*@return {integer} счёт
*/
function score(){
    $('.score').text(score_user + " : " + score_comp); 
}