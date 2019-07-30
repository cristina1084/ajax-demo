$(document).ready(function(){             //jQuery
    $("#btn1").click(function(){
        $.ajax({                        //AJAX format
            type:"GET",
            url :"mydata.json"
        });
    });
});