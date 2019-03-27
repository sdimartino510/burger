$(document).ready(function() {
    $("#submit").on("click", function() {
        event.preventDefault();

        var newBurger = $("#burger").val().trim();
        console.log(newBurger);

        $.ajax("/burgers/create", {
            type: "POST",
            data: {
                burger_name: newBurger
            }
        }).then(
            function() {
                location.reload();
            }
        );
    })
})