import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalContent } from '@nextui-org/react';
import { Select, Input, Button, SelectItem, SelectSection } from '@nextui-org/react';

import Categories from '../Filter/Categories/CategoriesContainer';
import PriceFilter from '../Filter/PriceFilter/PriceFilter';
import SortFilter from '../Filter/RadioFilter/RadioFilter'

interface MobileFilterProps {
    visible: boolean,
    onClose: () => void
}

const MobileFilter: React.FC<MobileFilterProps> = ({ visible, onClose }) => {
  return (
    
    <Modal isOpen={visible} onClose={onClose} placement='center' className='dark text-white'>
        <ModalContent>
        {
            (onClose) => <>
             <ModalHeader>Filters</ModalHeader>
        
                <ModalBody>
                
                    <Categories />
                    
                    <PriceFilter />

                    <SortFilter />
            
                </ModalBody>
            
                <ModalFooter>
            
                    <Button variant='solid' color='danger' onPress={onClose}>Cancel</Button>
            
                </ModalFooter>
            </>
        }
        </ModalContent>
       
    
    </Modal>
  );
};

export default MobileFilter;