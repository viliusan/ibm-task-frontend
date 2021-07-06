import axios from 'axios';

export const sendUserAction = (actionName) => {
    console.log(actionName);
    axios.post("http://localhost:9999/userActions", {action: actionName});
}