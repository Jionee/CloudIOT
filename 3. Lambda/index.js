exports.handler = async (event) => {
    // TODO implement
    switch(event.op){
        case '+' : event.result = Number(event.la) + Number(event.ra); break;
        case '-' : event.result = Number(event.la) - Number(event.ra); break;
        case '*' : event.result = Number(event.la) * Number(event.ra); break;
        case '/' : event.result = Number(event.la) / Number(event.ra); break;
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(event), 
        // "body": "{\"mypet\":\"marie\",\"myhome\":\"hello\"}와 같은 식으로 결과 나옴
    };
    return response;
};
