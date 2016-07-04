'use-strict';

class Query {
    public getUrlParameter(name: string, url: string = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        let results = regex.exec(url);

        let result;
        if (!results) {
            result = null;
        } else if (!results[2]) {
            result = '';
        } else {
            result = decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        return result;
    }
}
