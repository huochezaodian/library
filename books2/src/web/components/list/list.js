import './list.css'

function load(throttle, ajaxData){

  let clickCb = throttle(e => {
      e.preventDefault()
      const target = e.target
      const name = e.target.name
      
      if (name === 'reset') { // 重置
          $('input').val('')
          $('select').val('')
      } else if (name === 'delete'){ // 删除
          const id = target.dataset.id
          swal({
              title: '确认删除这本书的信息吗？',
              icon: 'warning',
              buttons: {
                  cancel: true,
                  confirm: true,
              }
          }).then(value => {
              if (value) {
                  deleteOneBookById(id)
              }
          })
      }
  }, 1000)

  // 按钮点击
  $('button[type != "submit"]').off().on('click', clickCb)


  function deleteOneBookById (id) {
      ajaxData({
          url: '/library/delete',
          type: 'get',
          data: {
              id
          }
      }).then(res => {
          if (res.status) {
              swal({
                  title: '删除成功',
                  icon: 'success'
              }).then(() => {
                  window.location.reload()
              })
          } else {
              swal({
                  title: res.msg || '删除失败',
                  icon: 'error'
              })
          }
      })
  }
}
const list = {
    init () {
        console.log("list组件对应的入口文件")
    }
}
export default list