function page() {
    var reSortColors = function ($table) {
        $('tbody tr:odd td', $table).removeClass('even').removeClass('listtd').addClass('odd');
        $('tbody tr:even td', $table).removeClass('odd').removeClass('listtd').addClass('even');
    };

    $('.paginated').each(function () {
        var pagesu = 5; //페이지 번호 갯수
        var currentPage = 0;
        var numPerPage = 7; //목록의 수
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
    //년도 selectbox만들기               
    for (var i = 1900; i <= year; i++) {
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

    $("tbody tr").on("click", function () {

        var tr = $(this).children();
        var val1 = (tr.eq(1).text());
        var val2 = (tr.eq(2).text());
        var val3 = (tr.eq(3).text());

        $(".val1de").val(val1);
        $(".val2de").val(val2);
        $(".val3de").val(val3);
    });
    
    $(".updatebtn").on("click", function () {
        $(".updatepop").addClass("active");

        var tr = $(this).parent().siblings();
        var val1 = (tr.eq(1).text());

        $(".val1up").val(val1);
    });
    
    $(".addbtn").on("click", function () {
        $(".addpop").addClass("active");
    });

    $(".closebtn").on("click", function () {
        $(".pop").removeClass("active");
    });
    
    $(".savebtn").on("click", function(){
        $(".pop").removeClass("active");
    })
});
