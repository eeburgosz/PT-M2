const url= 'http://localhost:5000/amigos';

let lista= ()=> {
    $('#lista').empty();
    $.get(`${url}`, (data)=>{
        //console.log(data);
        data.forEach(element => {
            let li= document.createElement('li');
            li.id= element.id;
            li.innerText= `${element.name}`;
            let list= document.getElementById('lista');
            list.appendChild(li);
            /* $('#lista').append(`<li id="${element.id}">${element.name} X</li>`) */
        });
    });
};
$('#boton').click(lista);

$('#search').click(()=> {
    $('#amigo').empty();
    let id= $('#input').val();
    //console.log(id);
    if (id){
        $.get(`${url}/${id}`, (data)=> {
            //console.log(data);
            $('#amigo').append(`<span id="${data.id}">${data.name}</span>`);
            $('#input').val('');
        });
    };
});

$('#delete').click(()=> {
    let id= $('#inputDelete').val();
    if (id){
        $.ajax({
            url: `${url}/${id}`,
            type: 'DELETE',
            success: ()=> {
                $('#sucess').text('Amigo eliminado');
                $('#inputDelete').val('');
                lista();
            }
        });
    };
});

/* $.ajax({
    url: '/echo/html/',
    type: 'PUT',
    data: "name=John&location=Boston",
    success: function(data) {
      alert('Load was performed.');
    }
  });
 */