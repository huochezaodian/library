"use strict";

System.register([], function (_export, _context) {
  "use strict";

  _export("default", function (throttle, ajaxData) {
    var clickCb = throttle(function (e) {
      e.preventDefault();
      var target = e.target;
      var name = e.target.name;

      if (name === 'reset') {
        // 重置
        $('input').val('');
        $('select').val('');
      } else if (name === 'delete') {
        // 删除
        var id = target.dataset.id;
        swal({
          title: '确认删除这本书的信息吗？',
          icon: 'warning',
          buttons: {
            cancel: true,
            confirm: true
          }
        }).then(function (value) {
          if (value) {
            deleteOneBookById(id);
          }
        });
      }
    }, 1000); // 按钮点击

    $('button[type != "submit"]').off().on('click', clickCb);

    function deleteOneBookById(id) {
      ajaxData({
        url: '/library/delete',
        type: 'get',
        data: {
          id: id
        }
      }).then(function (res) {
        if (res.status) {
          swal({
            title: '删除成功',
            icon: 'success'
          }).then(function () {
            window.location.reload();
          });
        } else {
          swal({
            title: res.msg || '删除失败',
            icon: 'error'
          });
        }
      });
    }
  });

  return {
    setters: [],
    execute: function () {}
  };
});