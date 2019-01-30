function ajaxData ({ url = '', type = 'get', data, ...rest }) {
    return new Promise((resolve, reject) => {
        if (!url) throw new Error('request url must be valid')
        $.ajax({
            url,
            type: type.toUpperCase(),
            data,
            ...rest,
            success (res) {
                resolve(res)
            },
            error (err) {
                let error = new Error(err.statusText || err.status)
                reject(error)
                throw error
            }
        })
    }).catch(err => {
        swal({
            text: err.message,
            icon: 'error'
        })
    })
}