//window.onload = function(){
window.addEventListener("load", function(){
    var btnPrint = document.getElementById("btn-print");

    var add = function(x, y){
        return x + y;
    };

    btnPrint.onclick = function () {               

        var x = prompt("x 값을 입력하세요", 0);
        var y = prompt("y 값을 입력하세요", 0);
        
        x = parseInt(x);
        y = parseInt(y);            
        btnPrint.value = x+y;            
    };
});