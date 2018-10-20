export const fakeResponse = (request) => {
    let payload = request;
    if (typeof request === 'function') {
        payload = request();
    }
    return new Promise((resolve) => {
        if (process.env.NODE_ENV === 'test') {
            resolve(payload);
        }
        else {
            setTimeout(() => resolve(payload), 500 + Math.floor(Math.random() * 1000));
        }
    });
};
