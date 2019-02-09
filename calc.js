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
    calcButton.on('click', function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
        operand = Number(calcDisplay.val());
        if(btnoperator && operator=='+'){
           summa += operand
           console.log('btnoperator',btnoperator,operator)
        }
    });

    calcOperator.on('click', function () {
        calcDisplay.val('');
        btnoperator = true;
        var operator =$(this).attr('value')
        calcOutDisplay.val(operand + $(this).attr('value'));

        console.log(operand);
        console.log(summa); 
    });
    
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