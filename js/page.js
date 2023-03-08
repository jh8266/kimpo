const countPerPage = 10; // 페이지당 데이터 건수
const showPageCnt = 5; // 화면에 보일 페이지 번호 개수

$(function() {

  $(document).on('click', '.paging .pages span', function() {
    if (!$(this).hasClass('active')) {
      $(this).parent().find('span.active').removeClass('active');
      $(this).addClass('active');

      setTable(Number($(this).text()));
    }
  });

  $(document).on('click', '.paging>span', function() {
    const totalPage = Math.floor(todoData.length / countPerPage) + (todoData.length % countPerPage == 0 ? 0 : 1);
    const id = $(this).attr('id');
    //console.log(id);

    if (id == 'first_page') {
      setTable(1);
      setPaging(1);
    } else if (id == 'prev_page') {
      let arrPages = [];
      $('div.paging>div.pages>span').each(function(idx, item) {
        arrPages.push(Number($(this).text()));
      });
      
      const prevPage = _.min(arrPages) - showPageCnt;
      setTable(prevPage);
      setPaging(prevPage);
    } else if (id == 'next_page') {
      let arrPages = [];
      $('div.paging>div.pages>span').each(function(idx, item) {
        arrPages.push(Number($(this).text()));
      });
      
      const nextPage = _.max(arrPages) + 1;
      setTable(nextPage);
      setPaging(nextPage);
    } else if (id == 'last_page') {
      const lastPage = Math.floor((totalPage - 1) / showPageCnt) * showPageCnt + 1;
      setTable(lastPage);
      setPaging(lastPage);
    }
  });
});

/**
 * 테이블에 데이터를 세팅합니다.
 * @param {int} pageNum - Page Number
 */
function setTable(pageNum) {
  $('#tblTodo>tbody').empty();

  // filtering data
  const filteredData = _.slice(todoData, (pageNum - 1) * countPerPage, pageNum * countPerPage);
  //console.log(filteredData);

  let sTbodyHtml = '';
  for (let i = 0; i < filteredData.length; i++) {
    sTbodyHtml += '<tr>';
    sTbodyHtml += '  <td class="center">' + filteredData[i].id + '</td>';
    sTbodyHtml += '  <td class="center">' + filteredData[i].userId + '</td>';
    sTbodyHtml += '  <td>' + filteredData[i].title + '</td>';
    sTbodyHtml += '  <td class="center"><input type="checkbox" ' + (filteredData[i].completed ? 'checked' : '') + ' onclick="return false" /></td>';
    sTbodyHtml += '</tr>';
  }
  $('#tblTodo>tbody').append(sTbodyHtml);
}

/**
 * 페이징 정보를 세팅합니다.
 * @param {int} pageNum - Page Number
 */
function setPaging(pageNum) {
  const currentPage = pageNum;
  const totalPage = Math.floor(todoData.length / countPerPage) + (todoData.length % countPerPage == 0 ? 0 : 1);
  //console.log(currentPage, totalPage);

  showAllIcon();

  if (currentPage <= showPageCnt) {
    $('#first_page').hide();
    $('#prev_page').hide();
  }
  if (
    totalPage <= showPageCnt ||
    Math.floor((currentPage - 1) / showPageCnt) * showPageCnt + showPageCnt + 1 > totalPage
  ) {
    $('#next_page').hide();
    $('#last_page').hide();
  }

  let start = Math.floor((currentPage - 1) / showPageCnt) * showPageCnt + 1;
  let sPagesHtml = '';
  for (const end = start + showPageCnt; start < end && start <= totalPage; start++) {
    sPagesHtml += '<span class="' + (start == currentPage ? 'active' : '') + '">' + start + '</span>';
  }
  $('div.paging>div.pages').html(sPagesHtml);
}

function showAllIcon() {
  $('#first_page').show();
  $('#prev_page').show();
  $('#next_page').show();
  $('#last_page').show();
}