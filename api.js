$(document).ready(function(){
  $('#buscaUsuario').on('keyup', function(e){
    let usuario = e.target.value;

    // chamada da API do Github
    $.ajax({
      url:'https://api.github.com/users/'+usuario,
      data:{
        client_id:'27fbaf89aaece2bb4947',
        client_secret:'6d21e6f3c0450cec2323e0146872bcd641a32ef7'
      }
    }).done(function(user){
      $.ajax({

        url:'https://api.github.com/users/'+usuario+'/repos',
        data:{
          client_id:'27fbaf89aaece2bb4947',
          client_secret:'6d21e6f3c0450cec2323e0146872bcd641a32ef7',
          sort: 'created: asc',
          per_page: 5
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          $('#repos').append(`
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>: ${repo.description}
                </div>
                <div class="col-md-3">
                  <span class="label label-primary">Visualizações: ${repo.watchers_count}</span>
                  <span class="label label-success"> Stars: ${repo.stargazers_count}</span>
                </div>
                <div class="col-md-2">
                  <a href="${repo.html_url}" target="_blank" class="btn btn-info border-primary">Visitar Publicação</a
                </div>
              </div>
            </div>
          `);
        });
      });
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-little btn-primary text-white">${user.name}</h3>
        </div>
        
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
              <br>
                <img style="width:100%" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-danger btn-block" href="${user.html_url}">VER PERFIL</a>
              </div>
              <div class="col-md-9">
              
              <span class="btn btn-success border-primary">Repositórios: ${user.public_repos}</span>
              <span class="btn btn-warning border-primary">Followers: ${user.followers}</span>
              <span class="btn btn-info border-primary">Following: ${user.following}</span>
              <span class="btn btn-danger border-primary">Gists públicos: ${user.public_gists}</span>
              <br><br>
              <ul class="list-group">
                <li class="list-group-item">EMPRESA: ${user.company}</li>
                <li class="list-group-item">WEBSITE/BLOG: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                <li class="list-group-item">LOCALIZAÇÃO: ${user.location}</li>
                <li class="list-group-item">MEMBRO DESDE: ${user.created_at}. ÚLTIMA ATUALIZAÇÃO: ${user.updated_at} </li>
                <li class="list-group-item">E-MAIL: ${user.email}</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
        <br>
        <h3 class="page-header text-success">5 ULTIMAS PUBLICAÇÕES:</h3>
        <br>
        <div id="repos"></div>
      `);
    });
  });
});