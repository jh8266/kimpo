function page() {
    var reSortColors = function ($table) {
        $('tbody tr:odd td', $table).removeClass('even').removeClass('listtd').addClass('odd');
        $('tbody tr:even td', $table).removeClass('odd').removeClass('listtd').addClass('even');
    };

    $('.paginated').each(function () {
        var pagesu =5; //페이지 번호 갯수
        var currentPage = 0;
        var numPerPage = 5; //목록의 수
        var $table = $(this);

        //length로 원래 리스트의 전체길이구함
        var numRows = $table.find('tbody tr').length;

        //Math.ceil를 이용하여 반올림
        var numPages = Math.ceil(numRows / numPerPage);

        //리스트가 없으면 종료
        if (numPages == 0) return;
        //pager라는 클래스의 div엘리먼트 작성
        var $pager = $('<td align="center" id="remo" colspan="10"><div class="pager"></div></td>');
        var nowp = currentPage;
        //var endp = nowp+10;
        var endp = nowp + pagesu;

        //페이지를 클릭하면 다시 셋팅
        $table.bind('repaginate', function () {
            //기본적으로 모두 감춘다, 현재페이지+1 곱하기 현재페이지까지 보여준다
            $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
            $("#remo").html("");

            if (numPages > 1) { // 한페이지 이상이면
                if (currentPage < 1 && numPages - currentPage >= 1) { // 현재 5p 이하이면
                    nowp = 0; // 1부터
                    endp = pagesu; // 10까지
                } else {
                    nowp = currentPage - 1; // 6넘어가면 2부터 찍고
                    endp = nowp + pagesu; // 10까지
                }

                if (numPages < endp) { // 10페이지가 안되면
                    endp = numPages; // 마지막페이지를 갯수 만큼
                    nowp = numPages - pagesu; // 시작페이지를   갯수 -10
                }

                if (nowp < 1) { // 시작이 음수 or 0 이면
                    nowp = 0; // 1페이지부터 시작
                }

            } else { // 한페이지 이하이면
                nowp = 0; // 한번만 페이징 생성
                endp = numPages;
            }
            // [처음]
            //						$('<br /><span class="page-number" cursor: "pointer">[처음]</span>').bind('click', {newPage: page}, function(event) {
            //							currentPage = 0;
            //							$table.trigger('repaginate');
            //							$($(".page-number")[2]).addClass('active').siblings().removeClass('active');
            //						}).appendTo($pager).addClass('clickable');

            // [이전]
            $('<span class="page-number" style="cursor:pointer;">Prev</span>').bind('click', {
                newPage: page
            }, function (event) {
                if (currentPage == 0) return;
                currentPage = currentPage - 1;
                $table.trigger('repaginate');
                $($(".page-number")[(currentPage - nowp) + 1]).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');

            // [1,2,3,4,5,6,7,8]
            for (var page = nowp; page < endp; page++) {
                $('<span class="page-number" style="cursor:pointer;"></span>').text(page + 1).bind('click', {
                    newPage: page
                }, function (event) {
                    currentPage = event.data['newPage'];
                    $table.trigger('repaginate');
                    $($(".page-number")[(currentPage - nowp) + 1]).addClass('active').siblings().removeClass('active');
                }).appendTo($pager).addClass('clickable');
            }

            // [다음]
            $('<span class="page-number" style="cursor:pointer">Next</span>').bind('click', {
                newPage: page
            }, function (event) {
                if (currentPage == numPages - 1) return;
                currentPage = currentPage + 1;
                $table.trigger('repaginate');
                $($(".page-number")[(currentPage - nowp) + 1]).addClass('active').siblings().removeClass('active');
            }).appendTo($pager).addClass('clickable');

            // [끝]
            //						$('<span class="page-number" cursor: "pointer">&nbsp;[끝]</span>').bind('click', {newPage: page}, function(event) {
            //							currentPage = numPages-1;
            //							$table.trigger('repaginate');
            //							$($(".page-number")[endp-nowp]).addClass('active').siblings().removeClass('active');
            //						}).appendTo($pager).addClass('clickable');

            $($(".page-number")[1]).addClass('active');
            reSortColors($table);
        });

        $pager.insertAfter($table).find('span.page-number:first').next().next().addClass('active');
        $pager.appendTo($table);
        $table.trigger('repaginate');
    });
}

$(function () {
    page();

    $('.page li:first-child').addClass("disabled");

    var now = new Date();
    var year = now.getFullYear();
    var mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
    var day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate());
    //년도 selectbox만들기               
    for (var i = 1900; i <= year; i++) {
        $('#year').append('<option value="' + i + '">' + i + '</option>');
        $('#bdyear').append('<option value="' + i + '">' + i + '</option>');
    }

    // 월별 selectbox 만들기            
    for (var i = 1; i <= 12; i++) {
        var mm = i > 9 ? i : "0" + i;
        $('#bdmonth').append('<option value="' + mm + '">' + mm + '</option>');
    }

    // 일별 selectbox 만들기
    for (var i = 1; i <= 31; i++) {
        var dd = i > 9 ? i : "0" + i;
        $('#bdday').append('<option value="' + dd + '">' + dd + '</option>');
    }
    $("#year  > option[value=" + year + "]").attr("selected", "선택");
    $("#bdyear  > option[value=" + year + "]").attr("selected", "선택");
    $("#bdmonth  > option[value=" + mon + "]").attr("selected", "");
    $("#bdday  > option[value=" + day + "]").attr("selected", "");

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
        var val1 = (tr.eq(1).text());
        var val2 = (tr.eq(2).text());
        var val3 = (tr.eq(3).text());
        var val4 = (tr.eq(4).text());
        var val5 = (tr.eq(5).text());
        var val6 = (tr.eq(6).text());
        var val7 = (tr.eq(7).text());
        var val8 = (tr.eq(8).text());
        var val9 = (tr.eq(9).text());
        var val10 = (tr.eq(10).text());
        var val11 = (tr.eq(11).text());
        var val12 = (tr.eq(12).text());
        var val13 = (tr.eq(13).text());
        var val14 = (tr.eq(14).text());
        var val15 = (tr.eq(15).text());
        var val16 = (tr.eq(16).text());
        var val17 = (tr.eq(17).text());
        var val18 = (tr.eq(18).text());
        var val19 = (tr.eq(19).text());
        var val20 = (tr.eq(20).text());
        var val21 = (tr.eq(21).text());
        var val22 = (tr.eq(22).text());
        var val23 = (tr.eq(23).text());
        var val24 = (tr.eq(24).text());

        $(".val1de").val(val1);
        $(".val2de").val(val2);
        $(".val3de").val(val3);
        $(".val4de").val(val4);
        $(".val5de").val(val5);
        $(".val6de").val(val6);
        $(".val7de").val(val7);
        $(".val8de").val(val8);
        $(".val9de").val(val9);
        $(".val10de").val(val10);
        $(".val11de").val(val11);
        $(".val12de").val(val12);
        $(".val13de").val(val13);
        $(".val14de").val(val14);
        $(".val15de").val(val15);
        $(".val16de").val(val16);
        $(".val17de").val(val17);
        $(".val18de").val(val18);
        $(".val19de").val(val19);
        $(".val20de").val(val20);
        $(".val21de").val(val21);
        $(".val22de").val(val22);
        $(".val23de").val(val23);
        $(".val24de").val(val24);
    });

    $("#closebtn").on("click", function () {
        $(".pop").removeClass("active");
    });
});
