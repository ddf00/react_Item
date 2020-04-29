import ajax from "./ajax";

export const reqLogin =(loginObj) => ajax.post('/login', loginObj)