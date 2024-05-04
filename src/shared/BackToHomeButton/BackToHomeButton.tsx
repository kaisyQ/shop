import React from 'react';
import { Link } from '@nextui-org/react';
import { ArrowLeft } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const BackToHomeButton = () => {

    const navigate = useNavigate();

    const redirect = (ev: React.MouseEvent<HTMLAnchorElement>) => {
        ev.preventDefault();
        navigate('/home');
    }

    return (
        <>
            <div className='flex'>
                <Link className='flex items-center gap-3'onClick={redirect} color='foreground'>
                    <ArrowLeft size={'20px'}/>
                    <span>Back to home</span>
                </Link>
            </div>
        </>
    );
}

export default BackToHomeButton;