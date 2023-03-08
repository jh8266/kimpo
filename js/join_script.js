$(document).ready(function () {
    var now = new Date();
    var year = now.getFullYear();
    var mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
    var day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate());
    //년도 selectbox만들기               
    for (var i = 1900; i <= year; i++) {
        $('#year').append('<option value="' + i + '">' + i + '</option>');
    }

    // 월별 selectbox 만들기            
    for (var i = 1; i <= 12; i++) {
        var mm = i > 9 ? i : "0" + i;
        $('#month').append('<option value="' + mm + '">' + mm + '</option>');
    }

    // 일별 selectbox 만들기
    for (var i = 1; i <= 31; i++) {
        var dd = i > 9 ? i : "0" + i;
        $('#day').append('<option value="' + dd + '">' + dd + '</option>');
    }
    $("#year  > option[value=" + year + "]").attr("selected", "선택");
    $("#month  > option[value=" + mon + "]").attr("selected", "");
    $("#day  > option[value=" + day + "]").attr("selected", "");
})

$(function () {
    $("#join").submit(function () {
        var name = document.getElementById("name");
        var name_val = (name.value);

        var y = document.getElementById("year");
        var y_val = (y.options[y.selectedIndex].value);
        var m = document.getElementById("month");
        var m_val = (m.options[m.selectedIndex].value);
        var d = document.getElementById("day");
        var d_val = (d.options[d.selectedIndex].value);

        var id = document.getElementById("id");
        var id_val = (id.value);

        var pw = document.getElementById("pw");
        var pw_val = (pw.value);
        var pwchk = document.getElementById("pwchk");
        var pwchk_val = (pwchk.value);

        var phone1 = document.getElementById("phone1");
        var phone1_val = (phone1.value);
        var phone2 = document.getElementById("phone2");
        var phone2_val = (phone2.value);
        var phone3 = document.getElementById("phone3");
        var phone3_val = (phone3.value);

        var mail1 = document.getElementById("mail1");
        var mail1_val = (mail1.value);
        var mail2 = document.getElementById("mail2");
        var mail2_val = (mail2.value);

        var addnum = document.getElementById("add");
        var addnum_val = (addnum.value);
        var add1 = document.getElementById("detailadd1");
        var add1_val = (add1.value);
        var add2 = document.getElementById("detailadd2");
        var add2_val = (add2.value);
        
        alert("이름 : " + name_val + " 생년월일 : " + y_val + "년 " + m_val + "월 " + d_val + "일 " + " 아이디 : " + id_val + " 비밀번호 : " + pw_val + " 비밀번호 확인 : " + pwchk_val + " 핸드폰 : " + phone1_val + "-" + phone2_val + "-" + phone3_val + " 이메일 : " + mail1_val + "@" + mail2_val + " 우편번호 : " + addnum_val + " 주소 : " + add1_val + add2_val);
    })
})

$(function () {
    var mail_val = $('#mail2');
    $("#email").change(function () {
        var element = $(this).find('option:selected');
        var mymail = element.attr('value');
        mail_val.val(mymail);
    })
})

$(function () {
    $('#pwchk').focusout(function () {
        var pw1 = $("#pw").val();
        var pw2 = $("#pwchk").val();

        if (pw1 != '' && pw2 == '') {
            $(".pw_success").css('display', 'none');
            $('.pw_fail').css("display", "none");
        } else if (pw1 != "" || pw2 != "") {
            if (pw1 == pw2) {
                $(".pw_success").css('display', 'inline-block');
                $('.pw_fail').css("display", "none");
            } else {
                $('.pw_fail').css('display', 'inline-block');
                $('.pw_success').css('display', 'none');
            }
        }
    })

    $('#pw').focusout(function () {
        var pw1 = $("#pw").val();
        var pw2 = $("#pwchk").val();

        if (pw1 != '' && pw2 == '') {
            $(".pw_success").css('display', 'none');
            $('.pw_fail').css("display", "none");
        } else if (pw1 != "" || pw2 != "") {
            if (pw1 == pw2) {
                $(".pw_success").css('display', 'inline-block');
                $('.pw_fail').css("display", "none");
            } else {
                $('.pw_fail').css('display', 'inline-block');
                $('.pw_success').css('display', 'none');
            }
        }
    })
})
