$(document).ready(function() {
    $("#submit").on("click", function() {
        event.preventDefault();

        var newBurger = $("#burger").val().trim();
        console.log(newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                //console.log("created new cat");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
})