$(document).ready(function(){             //jQuery
    $("#btn1").click(function(){
        $.ajax({                        //AJAX format
            type:"GET",                 //type mentions the method to be used 
            url :"mydata.json",
            success : function(data){
                //console.log(data);
                var table = "<table class='table table-bordered'> <thead> <tr> <th> NAME </th> <th> DOB </th> <th> COLLEGE </th> <th> MOBILE </th> </thead>";
                for (var i in data){  //Array traversal
                    table+= "<tr> <td>" + data[i].name + "</td>";
                    table+= "<td>" + data[i].dob + "</td>";
                    table+= "<td>" + data[i].college + "</td>";
                    table+= "<td>" + data[i].mobile + "</td> </tr>";
                }
                table+="</table>";
                $(".results").html(table);   
            }         
        });
    });
});