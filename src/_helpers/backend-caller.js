import config from '../../config/config';

export const requestMethods = {
    post,
    get
};

function post(url, data){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    
    return fetch(config.baseUrl+url, requestOptions)
        .then(handleResponse)
        .then(data => {
            return data;
        });
}

function get(url){
    return fetch(`http://localhost:2230/`+url)
        .then(handleResponse)
        .then(data => {
            return data;
        });
}

function handleResponse(response) {
    
    return response.text().then(text => {
        const responseData = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                // logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        if(responseData.status !== 'success'){
            return Promise.reject(responseData.message);
        }
        
        return responseData.data;
    });
}