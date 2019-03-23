$(document).ready(function () {

    var calc = $('.calculator');
    var calcDisplay = calc.find('.display');
    var calcOutDisplay = calc.find('.out-display');
    var calcButton = calc.find('.button');
    var calcClear = calc.find('.clear');
    var calcEqual = calc.find('.equal');
    var calcPower = calc.find('.power');
    var calcSpace = calc.find('.backspace');
    var calcOperator = calc.find('.operator');

    var summa = 0;
    var operand;
    var btnoperator = false;
    var a;
    calcClear.on('click', function (){
        calcDisplay.val('');
        calcOutDisplay.val('');
    });
    calcButton.on('click', function () {

        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
        
        console.log('LLL', calcDisplay.val())
       /* operand = Number(calcDisplay.val(s));
        if(btnoperator && operator=='+'){
           summa += operand
           console.log('btnoperator',btnoperator,operator)
        }*/
    });
    calcOperator.on('click', function () {
        btnoperator=true;
        console.log('aaaa',calcDisplay.val())
        var a=calcDisplay.val()
        var operator =$(this).attr('value')
        console.log('ass',a,operator)
        calcOutDisplay.val(calcDisplay.val()+  $(this).attr('value'));
        calcDisplay.val('');
        calcEqual.on('click', function (){
            if( operator == '*'){
                calcOutDisplay.val(a*calcDisplay.val())
                 calcDisplay.val('');
                console.log('ss',a*calcDisplay.val())
            }
            if( operator == '+'){

                var sum= 1*a+Number(calcDisplay.val())
                calcOutDisplay.val(sum)
                 calcDisplay.val('');
                console.log('ss',sum)
            }
            if( operator == '-'){
                calcOutDisplay.val(a-calcDisplay.val())
                 calcDisplay.val('');
                console.log('ss',a-calcDisplay.val())
            }
            if( operator == '/'){
                calcOutDisplay.val(a/calcDisplay.val())
                 calcDisplay.val('');
                console.log('ss',a/calcDisplay.val())
            }
            if( operator == '^'){
                calcOutDisplay.val(Math.pow(a,calcDisplay.val()))
                calcDisplay.val('');
                console.log('ss',(Math.pow(a,calcDisplay.val())))
            }
        })
        console.log('calcDisplay.val',calcDisplay.val())
        console.log('operator',operator);
        console.log(summa); 
    });
    console.log('btnoperator,',btnoperator)
    function sum(a,b) {
      return a+b;
    }
    var changeOperator
    calcClear.on('click', function () {
        calcOutDisplay.val('');
        calcDisplay.val('');
    });

    calcEqual.on('click', function (operand1,operand2,operator) {
        
    });
    calcSpace.on('click', function () {
        calcDisplay.val( calcDisplay.val().substring(0, calcDisplay.val().length-1) );
    });

});