import axios from 'axios';
import { GET_COURSES, ADD_COURSE, COURSES_LOADING } from './types';
import Cookies from 'universal-cookie';
import { PublicURL } from '../config/constants';
const cookies = new Cookies();
const uuidv4 = require('uuid/v4');

export const getCourses = (pid) => dispatch => {
    dispatch(setCoursesLoading());
    axios.get(PublicURL + ':5001/nox/api/courses/FindCourse', {
        params: { pid: pid }
    })
        .then(res => dispatch({
            type: GET_COURSES,
            payload: res.data
        }))
}

export const addCourse = (Course) => dispatch => {
    //var sesid = genHexCode(6);

    //Course.sesid = sesid;
    axios.post('courses', Course, { baseURL: PublicURL + ':5001/nox/api/' })
        .then(res => {
            console.log(`Received response from server: ${{ res }}`);
            dispatch({
                type: ADD_COURSE,
                payload: res.data
            })
            // cookies.set('Prof_sesid', res.data.sesid);
            window.location = "/nox/professor/";
        })
}

export const setCoursesLoading = () => {
    return {
        type: COURSES_LOADING
    };
}