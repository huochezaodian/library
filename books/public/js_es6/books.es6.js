$(function(){

    // 按钮点击
    $('button[type != "submit"]').off().on('click', e => {
        e.preventDefault()
        const target = e.target
        const name = e.target.name
        
        if (name === 'reset') { // 重置
            $('input').val('')
        } else if (name === 'delete'){ // 删除
            ajaxData({
                url: '/library/delete',
                type: 'get',
                data: {
                    id: target.dataset.id
                }
            }).then(res => {
                if (res.statu) {
                    swal({
                        text: '删除成功',
                        icon: 'success'
                    }).then(() => {
                        window.location.reload()
                    })
                } else {
                    swal({
                        text: res.msg || '删除失败',
                        icon: 'error'
                    })
                }
            })
        }
    })
})