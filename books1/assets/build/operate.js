"use strict";

System.register([], function (_export, _context) {
  "use strict";

  _export("default", function (throttle, ajaxData) {
    var clickCb = throttle(function (e) {
      e.preventDefault();
      var target = e.target;
      var formData = $('form').serialize();
      var id = $('input[name=id]').val();
      var isAdd = !id;
      ajaxData({
        url: isAdd ? '/library/add' : '/library/edit',
        type: 'post',
        data: formData
      }).then(function (res) {
        console.log(res);

        if (res.status) {
          swal({
            title: isAdd ? '添加成功' : '编辑成功',
            icon: 'success'
          }).then(function () {
            window.location.href = '/list';
          });
        } else {
          swal({
            title: res.msg || isAdd ? '添加失败' : '编辑失败',
            icon: 'error'
          });
        }
      });
    }, 1000); // 按钮点击

    $('button').off().on('click', clickCb);
  });

  return {
    setters: [],
    execute: function () {}
  };
});