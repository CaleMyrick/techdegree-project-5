$("form").on("keyup", $("#search"), function(){

    // value of text input in lowercase
    let $search = $("#search").val().toLowerCase();

    for( let i = 0; i < $(".images").length; i++){

        // value of "data-title attribute" field in lowercase
        let $caption = $("a").eq(i).attr("data-caption").toLowerCase();

        if(($caption).indexOf($search) === -1){
            $("img.images").eq(i)
                        .parent()
                        .hide();
        } else {
            $("img.images").eq(i)
                        .parent()
                        .show();
        }

    }

});
