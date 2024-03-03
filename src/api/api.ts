import axios from 'axios';
import environment from './../environment';

export const instance = axios.create({baseURL: environment.restUrl});
