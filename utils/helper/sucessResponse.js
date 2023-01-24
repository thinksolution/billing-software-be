module.exports = (req, res) => {
    let msg = "Reponse genrated Successfully";
    if (!res.locals.rootdata) {
        msg = "Root is not Set";
    } else {
        if (res.locals.message) {
            msg = res.locals.message
        }
    }
    const response = {
        success: true,
        displayMessage: res.locals.rootdata || "",
        message: msg,
        description: "NAX-0000",
        resultObj: res.locals.rootdata || {}
    }

    res.send(response)
}