import React from 'react';
import {Input, Button, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu} from '@nextui-org/react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/store';
import { setPriceFrom, setPriceTo } from 'store/reducers/product/ProductSlice';
import { useDisclosure } from '@nextui-org/react';

const PriceFilterWrapper = styled.div`
`;


const PriceFilterContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;


const PriceFilter = () => {

    const [from, setFrom] = React.useState('');
    const [to, setTo] = React.useState('');
    
    const {isOpen, onClose, onOpenChange} = useDisclosure();

    const dispatch = useAppDispatch();

    const onSubmit = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setPriceTo(parseInt(to)));
        dispatch(setPriceFrom(parseInt(from)));
        onClose();
    }

    return (
        <>
            <PriceFilterWrapper>
                
                <Dropdown className='dark' isOpen={isOpen} onOpenChange={onOpenChange}>
                    
                    <DropdownTrigger>
                        <Button 
                            className='dark' 
                            radius="sm"
                            size="lg"
                            fullWidth
                        >
                            Price, {'(CAD)'}
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu className='dark'>
                    
                        <DropdownItem isReadOnly>
                            <PriceFilterContent>

                                <Input label="from" value={from} onChange={(ev) => setFrom(ev.target.value)}/>

                                <Input label="to" value={to} onChange={(ev) => setTo(ev.target.value)}/>

                                <Button radius='sm' size='lg' color='danger' onClick={onSubmit}>Submit</Button>

                            </PriceFilterContent>
                        </DropdownItem>
                    
                    </DropdownMenu>

                </Dropdown>

            </PriceFilterWrapper>  
        </>
    );
}

export default PriceFilter;