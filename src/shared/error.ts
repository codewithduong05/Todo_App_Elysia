export function errorResponse (
    message :string,
    statusCode = 400
) {
    return {
        success : false,
        message,
        statusCode
    }
}