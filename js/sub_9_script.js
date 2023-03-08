//function page() {
//    var req_num_row = 4;
//    var $tr = $('.section tbody tr');
//    var total_num_row = $tr.length;
//    var num_pages = 0;
//    if (total_num_row % req_num_row == 0) {
//        num_pages = total_num_row / req_num_row;
//    }
//    if (total_num_row % req_num_row >= 1) {
//        num_pages = total_num_row / req_num_row;
//        num_pages++;
//        num_pages = Math.floor(num_pages++);
//    }
//
//    $('.page').append("<li><a class='prev'>Prev</a></li>");
//
//    for (var i = 1; i <= num_pages; i++) {
//        $('.page').append("<li><a>" + i + "</a></li>");
//        $('.page li:nth-child(2)').addClass("active");
//        $('.page a').addClass("page-link");
//    }
//
//    $('.page').append("<li><a class='next'>Next</a></li>");
//
//    $tr.each(function (i) {
//        $(this).hide();
//        if (i + 1 <= req_num_row) {
//            $tr.eq(i).show();
//        }
//    });
//
//    $('.page a').click('.page-link', function (e) {
//        e.preventDefault();
//        $tr.hide();
//        var page = $(this).text();
//        var temp = page - 1;
//        var start = temp * req_num_row;
//        var current_link = temp;
//
//        $('.page li').removeClass("active");
//        $(this).parent().addClass("active");
//
//        for (var i = 0; i < req_num_row; i++) {
//            $tr.eq(start + i).show();
//        }
//
//        if (temp >= 1) {
//            $('.page li:first-child').removeClass("disabled");
//        } else {
//            $('.page li:first-child').addClass("disabled");
//        }
//
//    });
//
//    $('.prev').click(function (e) {
//        e.preventDefault();
//        $('.page li:first-child').removeClass("active");
//    });
//
//    $('.next').click(function (e) {
//        e.preventDefault();
//        $('.page li:last-child').removeClass("active");
//    });
//
//}

$(function () {
    $('.table2').hide();
//    page();

    $('.page li:first-child').addClass("disabled");

    var now = new Date();
    var year = now.getFullYear();
    //년도 selectbox만들기               
    for (var i = year-5; i <= year; i++) {
        $('#year').append('<option value="' + i + '">' + i + '</option>');
    }
    
    $("#year  > option[value=" + year + "]").attr("selected", "선택");

    $(".toggle1").on("click", function () {
        $(".toggle1>.sub").slideToggle();
    });

    $(".toggle2").on("click", function () {
        $(".toggle2>.sub").slideToggle();
    });

    $(".toggle3").on("click", function () {
        $(".toggle3>.sub").slideToggle();
    });

    $(".detailbtn button").on("click", function () {
        $(".pop").addClass("active");

        var tr = $(this).parent().siblings();
        var val0 = (tr.eq(0).text());
        var val1 = (tr.eq(1).text());
        var val2 = (tr.eq(2).text());
        var val3 = (tr.eq(3).text());
        var val4 = (tr.eq(4).text());
        var val5 = (tr.eq(5).text());
        var val6 = (tr.eq(6).text());
//        var val7 = (tr.eq(7).text());
//        var val8 = (tr.eq(8).text());
//        var val9 = (tr.eq(9).text());
//        var val10 = (tr.eq(10).text());
//        var val11 = (tr.eq(11).text());
//        var val12 = (tr.eq(12).text());
//        var val13 = (tr.eq(13).text());
//        var val14 = (tr.eq(14).text());
//        var val15 = (tr.eq(15).text());
//        var val16 = (tr.eq(16).text());
//        var val17 = (tr.eq(17).text());
//        var val18 = (tr.eq(18).text());
//        var val19 = (tr.eq(19).text());
//        var val20 = (tr.eq(20).text());
//        var val21 = (tr.eq(21).text());
//        var val22 = (tr.eq(22).text());
//        var val23 = (tr.eq(23).text());
//        var val24 = (tr.eq(24).text());

        $(".val0de").val(val0);
        $(".val1de").val(val1);
        $(".val2de").val(val2);
        $(".val3de").val(val3);
        $(".val4de").val(val4);
        $(".val5de").val(val5);
        $(".val6de").val(val6);
//        $(".val7de").val(val7);
//        $(".val8de").val(val8);
//        $(".val9de").val(val9);
//        $(".val10de").val(val10);
//        $(".val11de").val(val11);
//        $(".val12de").val(val12);
//        $(".val13de").val(val13);
//        $(".val14de").val(val14);
//        $(".val15de").val(val15);
//        $(".val16de").val(val16);
//        $(".val17de").val(val17);
//        $(".val18de").val(val18);
//        $(".val19de").val(val19);
//        $(".val20de").val(val20);
//        $(".val21de").val(val21);
//        $(".val22de").val(val22);
//        $(".val23de").val(val23);
//        $(".val24de").val(val24);
    });

    $("#closebtn").on("click", function () {
        $(".pop").removeClass("active");
    });
});