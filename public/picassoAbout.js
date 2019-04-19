window.onload = function() {
    myTeam();
 };
 
 function myTeam() {
    var ourTeam = document.querySelector('.hide-team');
    ourTeam.addEventListener('click', () => {
        var article = document.querySelector('.meet-team');
        if (!article.style.display || article.style.display === 'none') {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    })
 }

