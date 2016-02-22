window.onload = function() {
    var button = document.querySelector("#search-hotels-button"),
        form = document.querySelector(".search-hotels form");

    button.addEventListener("click", function(e) { 
        e.preventDefault();
        form.classList.toggle("show");
    });
};