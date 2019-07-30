$(document).ready(function(){             //jQuery
    $("#btn1").click(function(){
        $.ajax({                        //AJAX format
            type:"GET",                 //type mentions the method to be used 
            url :"mydata.json"          
        });
    });
});