'use_strict';

function renderResults(results){
  console.log(results);
  let htmlTemplate = [];
  results.forEach(repo => htmlTemplate.push(`
    <li><a href="${repo.html_url}">${repo.name}</a></li>
    `)
  );
  console.log(htmlTemplate);
  $('.search-results').html(htmlTemplate.join(''));
}

function getUserRepos(username){
  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(responseJson => renderResults(responseJson))
    .catch(error => alert('something went wrong. Try again later.'));
}

function handleUserSearch() {
  $('#js-user-search-form').submit(function(event) {
    event.preventDefault();
    let username = $('#js-search-user').val();
    $('#js-search-user').val('');
    getUserRepos(username);
  });
}

$(handleUserSearch);