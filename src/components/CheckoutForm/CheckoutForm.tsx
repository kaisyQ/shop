import React from 'react';
import { Input, Button } from '@nextui-org/react';
import styled from 'styled-components';
import Cards from 'react-credit-cards-2';
import { type Focused } from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

const CheckoutFormWrapper = styled.form`
    display: grid;
    grid-gap: 30px;
    padding: 50px 10px;
    background-color: #000;

    -webkit-box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
    box-shadow: 4px 4px 63px -3px rgba(0, 0, 0, 0.2);
`;


const CheckoutForm = () => {
    
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [state, setState] = React.useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '' as Focused|undefined,
      });


    
    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
    }

    const handleInputChange = (evt: any) => {
        const { name, value } = evt.target;
        
        setState((prev) => ({ ...prev, [name]: value }));
      }
    
      const handleInputFocus = (evt: any) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
      }
    return (
        <>
            <CheckoutFormWrapper onSubmit={handleSubmit}>
                <h3>Payment details</h3>
                <Cards
                    number={state.number}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    name={state.name}
                    focused={state.focus}
                />
                <Input
                    className='white' 
                    type="number"
                    name="number"
                    label="Card Number"
                    value={state.number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <Input
                    className='white' 
                    type="number"
                    name="expiry"
                    label="Card expiry"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <Input
                    className='white' 
                    type="number"
                    name="cvc"
                    label='CVC'
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <Input 
                    type="string"
                    name="name"
                    value={state.name}
                    className='white'
                    label='Name' 
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                />
                <Input 
                    className='white' 
                    label='Email' 
                    value={email} 
                    onChange={(ev) => setEmail(ev.target.value)} 
                />
                <Input 
                    className='white' 
                    label='Phone number' 
                    value={phone} onChange={(ev) => setPhone(ev.target.value)} 
                />
                <Button 
                    className='dark ' 
                    type='submit'
                    size='lg'
                    color="success"
                    
                >
                    Pay
                </Button>
            </CheckoutFormWrapper>  
        </>
    );
}

export default CheckoutForm;