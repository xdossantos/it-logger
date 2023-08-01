import M from 'materialize-css/dist/js/materialize.min.js';

const Toast = (message, type = "info") => {

    const toastConfig = {
        info : {
            classes: 'blue lighten-3',
        },
        error : {
            classes: 'red lighten-3',
        }
    }

    if (Object.keys(toastConfig).includes(type)) {
        M.toast({ html: message, classes: toastConfig[type].classes });
    } else {
        M.toast({ html: message, classes: 'blue lighten-3'});
    }
};

export default Toast;
