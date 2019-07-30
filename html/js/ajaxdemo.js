$(document).ready(function(){             //jQuery
    $("#btn1").click(function(){
        $.ajax({                        //AJAX format
            type:"GET",                 //type mentions the method to be used 
            url :"https://jsonplaceholder.typicode.com/users",         //can provide API link
            success : function(data){
                //console.log(data);
                /* var table = "<table class='table table-bordered'> <thead class='thead-dark'> <tr> <th> NAME </th> <th> USERNAME </th> <th> EMAIL </th> <th> PHONE </th> <th> STREET </th> </thead>";
                for (var i in data){  //Array traversal
                    table+= "<tr> <td>" + data[i].name + "</td>";
                    table+= "<td>" + data[i].username + "</td>";
                    table+= "<td>" + data[i].email + "</td>";
                    table+= "<td>" + data[i].phone + "</td>";
                    table+= "<td>" + data[i].address.street + "</td> </tr>";
                }
                table+="</table>";
                $(".results").html(table);    */

                var card="";
                for (var j in data){
                    card+="<div class='card' style='width: 30rem;'> <div class='card-body'> <h5 class='card-title'>"+ data[j].name +"</h5>";
                    card+="<h6 class='card-subtitle mb-2 text-muted'>" + data[j].username +"</h6>";
                    card+="<p class='card-text'> <span class='font-weight-bold'> Email : </span>  "+ data[j].email + "</p>";
                    card+="<p class='card-text'> <span class='font-weight-bold'> Address : </span>  "+ data[j].address.street +", "+ data[j].address.suite +", "+data[j].address.city +", "+data[j].address.zipcode + "</p>";
                    card+="<p class='card-text'> <span class='font-weight-bold'> Phone   : </span>  "+ data[j].phone + "</p>";
                    card+="<p class='card-text'> <span class='font-weight-bold'> Website : </span>  "+ data[j].website + "</p>";
                    card+="<p class='card-text'> <span class='font-weight-bold'> Company Name : </span>  "+ data[j].company.name + "</p>";
                    card+="<p class='card-text'> <span class='font-weight-bold'> Catchphrase : </span>  "+ data[j].company.catchPhrase + "</p>";
                    card+="<p class='card-text'> <span class='font-weight-bold'> Business : </span>  "+ data[j].company.bs + "</p>";
                    card+="</div></div><br>"
                }
                $(".results").html(card);
            }         
        });
    });
});