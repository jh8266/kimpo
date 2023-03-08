$(function () {

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

        $(".val0de").val(val0);
        $(".val1de").val(val1);
        $(".val2de").val(val2);
        $(".val3de").val(val3);
        $(".val4de").val(val4);
        $(".val5de").val(val5);
        $(".val6de").val(val6);
    });
});
