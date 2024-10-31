function successResponse(data) {
    return {
        success: true,
        object: { data: data }, 
        message: {}
    };
}

function errorResponse(errorMessage, title = 'Erro Interno API') {
    return {
        success: false,
        object: {},
        message: errorMessage,
        title: title
    };
}

module.exports = { successResponse, errorResponse };
