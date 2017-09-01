/**
 * Created by qadeer on 01.09.17.
 */
const fetchJson = async (url, body) => { // eksponeres ikke siden den er utenfor klassen. Async keyword er fra ecmascript for å forenkle async kall
    const request = {
        method: 'GET' // brukes av innebygde fetch til å gjøre GET request
    };

    if (body) {
        request.method = 'POST';
        request.headers = {
            'Content-Type': 'application/json'
        };
        request.body = JSON.stringify(body); // må konvertere eksplisitt til JSON
    }

    const response = await fetch(url, request); // tilsvarer return fetch(url, request)
    const jsonResponse = await response.json(); // tilsvarer .then(res => res.json())

    // async og await gjør at det er enklere å kode asynkron kode  spesielt med feilhåndtering
    // man kan f.eks. ha koden ovenfor i try/catch, og feilmeldinger er enklere å debugge fordi du kan ha breakpoints på linjer
    // i tillegg er flyten enklere å følge med på

    //return fetch(url, request).then(res => res.json()); -> hvis uten async keyword
    return jsonResponse
};

export class StorageService {
    constructor({endpoint = 'http://localhost:4321'} = {}) {
        this.endpoint = endpoint;
    }

    getEndpoint(op) {
       return this.endpoint+"/"+op
    }

    async get(identifier) {
        return await fetchJson(this.getEndpoint('lists/'+identifier));
    }

    async store(identifier, rawList) { // raw todolist fordi vi vil bare sende data ikke metodene i todoklassen
        return await fetchJson(this.getEndpoint('lists/'+identifier), rawList);
    }
}

export default StorageService;
