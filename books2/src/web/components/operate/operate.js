import "./operate.css"

function load(throttle, ajaxData){

  let clickCb = throttle(e => {
      e.preventDefault()
      const target = e.target
      const formData = $('form').serialize()
      const id = $('input[name=id]').val()
      const isAdd = !id
      
      ajaxData({
          url: isAdd ? '/library/add' : '/library/edit',
          type: 'post',
          data: formData
      }).then(res => {
          console.log(res)
          if (res.status) {
              swal({
                  title: isAdd ? '添加成功' : '编辑成功',
                  icon: 'success'
              }).then(() => {
                  window.location.href = '/list'
              })
          } else {
              swal({
                  title: res.msg ||  isAdd ? '添加失败' : '编辑失败',
                  icon: 'error'
              })
          }
      })
  }, 1000)

// 按钮点击
$('button').off().on('click', clickCb)
}

const operate = {
  init () {
    console.log("operate组件对应的入口文件");
  }
}

export default operate