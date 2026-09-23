

const getParam = (req, res, next) => {
    let param
    const url = req.url
    const urlParts = url.split('/')
    urlParts.forEach(part => {
        if (parseInt(part)) {
            param = part
        }
    })
    req.routeParam = param
    next()
}

export default getParam