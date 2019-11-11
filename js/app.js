$("form").on("keyup", $("#search"), function(){

    let $search = $("#search").val().toLowerCase();

    for( let i = 0; i < $(".images").length; i++){

        let $caption = $("a").eq(i).attr("data-caption").toLowerCase();

        if(($caption).indexOf($search) === -1){
            $("img.images").eq(i).parent().hide();


        } else {
            $("img.images").eq(i).parent().show();

        }

    }

});
