const ApiServices = {
    getDisclosures() {
        return fetch('http://127.0.0.1:8000/disclosure', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    getRecs() {
        return fetch('http://127.0.0.1:8000/recs', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    },
    postEmail(newEmail) {
        return fetch('http://127.0.0.1:8000/add_to_campaign', {
            method: 'POST',
            body: newEmail
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
    }
    

}

export default ApiServices