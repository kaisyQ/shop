import React, { useState } from "react";

import UnderlineBtn from "components/Ui/UnderlineButton/UnderlineButton";

import { NavLink } from "react-router-dom";

import styles from "./FilterMenuItems";

import { ICategory } from "redux/reducers/categories/categories.slice";

interface Props {
    categories: Array<ICategory>
}

const FilterMenu: React.FC<Props> = ({categories}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <styles.comp.MenuWrapper>
        
        <UnderlineBtn onClick={toggleMenu}>Shop our catalog 	&#9660;</UnderlineBtn>
      
        {isOpen && (
            <styles.comp.MenuContent>
            
            <styles.comp.List>
            
                {
                    categories.map(category => <React.Fragment key={category.slug}>
                        
                            <NavLink to={`/catalog?category=${category.slug}`}>

                                <styles.comp.ListItem>
                                    
                                    {category.name}
                                    
                                </styles.comp.ListItem>

                            </NavLink>
                        
                        </React.Fragment>
                    )
                }
            
            </styles.comp.List>
            
            </styles.comp.MenuContent>
        )}
    
    </styles.comp.MenuWrapper>
  );
};

export default FilterMenu;