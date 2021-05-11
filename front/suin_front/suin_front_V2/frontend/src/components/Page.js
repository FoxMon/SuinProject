import './Page.css';

import { getProducts as listProducts } from '../redux/actions/productActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import axios from 'axios'

const Page = () => {

    const dispatch = useDispatch();

    const buttonHandler01 = () => { 
        let pageNumber = 1;
        dispatch(listProducts(pageNumber));
    }

    const buttonHandler02 = () => { 
        let pageNumber = 2;
        dispatch(listProducts(pageNumber));
    }
    const buttonHandler03 = () => { 
        let pageNumber = 3;
        dispatch(listProducts(pageNumber));
    }
    const buttonHandler04 = () => { 
        let pageNumber = 4;
        dispatch(listProducts(pageNumber));
    }
    const buttonHandler05 = () => { 
        let pageNumber = 5;
        dispatch(listProducts(pageNumber));
    }

    return (
        <div className = "page">
            <Link to = "/" className = "page_button" onClick = {buttonHandler01}>1</Link>
            <Link to = "/" className = "page_button" onClick = {buttonHandler02}>2</Link>
            <Link to = "/" className = "page_button" onClick = {buttonHandler03}>3</Link>
            <Link to = "/" className = "page_button" onClick = {buttonHandler04}>4</Link>
            <Link to = "/" className = "page_button" onClick = {buttonHandler05}>5</Link>
        </div>
    );
}

export default Page;