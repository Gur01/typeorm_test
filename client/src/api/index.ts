import Request from './Request';
import methods from './methods';

const token = localStorage.getItem('token') || '';

const request = new Request('http://localhost:4000/api', {
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    },
});

export default methods(request);
