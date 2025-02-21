exports.handler = async (event) => {
    // TODO implement
    let method = await event.requestContext.http.method;
    let path = await event.requestContext.http.path;

    // event.httpMethod === "GET"

    const successResponse = {
        statusCode: 200,
        message: "Hello from Lambda",
    };

    const unsuccessRespond = {
        "statusCode": 400,
        "message": `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
    }

    if  (method === "GET" && path === "/hello") {
        return successResponse;
    } else {
        return unsuccessRespond;
    }
};