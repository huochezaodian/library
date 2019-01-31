$(function(){

    // 按钮点击
    $('button').off().on('click', e => {
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
    })
})