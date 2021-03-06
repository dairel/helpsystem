 $(document).ready(function () {


    $.ajax({
        type: 'POST',
        url: 'clientes.php',
        dataType: "Json",
        success: function (msg) {

           
            var tabela = document.getElementById("clientes");
            tabela.border = "1px";
            tabela.cellSpacing = "0px";
            tabela.cellPadding = "3px";

            

            var row = "";
            for (var key in msg) {
                if (msg.hasOwnProperty(key)) {
                    row += "<tr>";
                    row += "<td>" + msg[key]["id"] + "</td>";
                    row += "<td>" + msg[key]["nome"] + "</td>";
                    row += "<td>" + msg[key]["cpf"] + "</td>";
                     row += "<td>" + msg[key]["telefone"] + "</td>";
                    row += "<td>" + msg[key]["rua"] + "</td>";
                    row += "<td>" + msg[key]["numero"] + "</td>";
                    row += "<td>" + msg[key]["bairro"] + "</td>";
                     row += "<td>" + msg[key]["cidade"] + "</td>";
                      row += "<td>" + msg[key]["cep"] + "</td>";
                    row += "<td><button class='alterar-item' data-id='" + msg[key]["id"] + "'  >Alterar</button></td>";
                    row += "<td><button class='delete' data-id='" + msg[key]["id"] + "' >Deletar</button></td>";
                    row += "</tr>";
                }
            }
            $("#clientes").html(row);




            $(".alterar-item").on("click", function (event) {
                var idCliente = $(this).attr("data-id");
                	
                	window.open("AlterarCliente.html?id="+idCliente,"Alterar Cliente","width=200, height=100");
                        

            });
            
             $(".delete").on("click", function (event) {
                var idCliente = $(this).attr("data-id");
                	confirm("Tem certeza de deletar esse cliente ?");
                $.ajax({
                        type: 'POST',
                        url: 'deletarCliente.php',
                        
                        data:{id:idCliente},
                        sucess:function (data){
                            alert(data);
                        }
                    });
            });

        }


    });


});
