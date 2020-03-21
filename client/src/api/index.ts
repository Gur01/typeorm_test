import Request from './Request';
import methods from './methods';

const request = new Request('http://localhost:4000', {
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default methods(request);
