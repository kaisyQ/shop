import React from 'react';
import {Switch, Button, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu} from '@nextui-org/react';
import styled from 'styled-components';
import { useAppDispatch } from 'store/store';
import { setIsOldest as rootStateSetIsOldest, setIsSortByAlphabetAtoZ } from 'store/reducers/product/ProductSlice';
import {useDisclosure} from '@nextui-org/react';

const PriceFilterWrapper = styled.div`

`;


const PriceFilterContent = styled.main`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const SortItem = styled.div`
    display: flex;
    gap: 10px;
`;


const SortFilter = () => {

    const [isOldest, setIsOldest] = React.useState(false);
    const [isAlphabetAtoZ, setIsAlphabetAtoZ] = React.useState(true);

    const {isOpen, onClose, onOpenChange} = useDisclosure();

    const dispatch = useAppDispatch();

    const onSubmit = (ev: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(rootStateSetIsOldest(isOldest));
        dispatch(setIsSortByAlphabetAtoZ(isAlphabetAtoZ));
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
                            Sort by
                        </Button>
                    </DropdownTrigger>

                    <DropdownMenu className='dark'>
                    
                        <DropdownItem isReadOnly>
                            <PriceFilterContent>

                                <SortItem className='d-flex'>
                                    
                                    <p className='text-white'>
                                        Alphabet(A - Z)
                                    </p>

                                    <Switch
                                        isSelected={isAlphabetAtoZ}
                                        onChange={(ev) => setIsAlphabetAtoZ((prev) => !prev)}
                                        color='danger' 
                                        size='sm'
                                    />
                                </SortItem>

                                <SortItem className='d-flex'>
                                    
                                    <p className='text-white'>
                                        Alphabet(Z - A)
                                    </p>

                                    <Switch
                                        isSelected={!isAlphabetAtoZ}
                                        onChange={(ev) => setIsAlphabetAtoZ((prev) => !prev)}
                                        color='danger' 
                                        size='sm'
                                    />
                                </SortItem>

                                <SortItem className='d-flex'>
                                    
                                    <p className='text-white'>
                                        Newest
                                    </p>

                                    <Switch
                                        isSelected={!isOldest}
                                        onChange={(ev) => setIsOldest((prev) => !prev)}
                                        color='danger' 
                                        size='sm'
                                    />
                                </SortItem>

                                <SortItem className='d-flex'>
                                    
                                    <p className='text-white'>
                                        Oldest
                                    </p>

                                    <Switch
                                        isSelected={isOldest}
                                        onChange={(ev) => setIsOldest((prev) => !prev)}
                                        color='danger' 
                                        size='sm'
                                    />
                                </SortItem>

                                <Button radius='sm' size='lg' color='danger' onClick={onSubmit}>Submit</Button>

                            </PriceFilterContent>
                        </DropdownItem>
                    
                    </DropdownMenu>

                </Dropdown>

            </PriceFilterWrapper>  
        </>
    );
}

export default SortFilter;