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

    $("#eat-it").on("click", function() {
        event.preventDefault();

        var burgerId = $(this).attr("data-id");
        console.log(burgerId);

        $.ajax({
            method: "PUT",
            url: "/burgers/" + burgerId
        }).then(
            function() {
                location.reload();
            }
        );
    })
})