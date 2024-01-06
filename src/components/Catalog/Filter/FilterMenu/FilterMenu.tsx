import React from "react";
import { NavLink } from "react-router-dom";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Image, DropdownSection} from "@nextui-org/react";
import type { ICategory } from "store/reducers/category/CategorySlice";
import ShowMoreImage from './../../../../images/more.png';
interface Props {
    categories: Array<ICategory>
}

const FilterMenu: React.FC<Props> = ({categories}) => {

  return (
        <>
        <Dropdown className="dark text-white">
            <DropdownTrigger>
                <Button 
                    className="dark"
                    radius="sm"
                    size="lg"
                >
                    Shop our catalog
                    <Image src={ShowMoreImage} width={20} />
                </Button>
            </DropdownTrigger>
            <DropdownMenu className="dark text-white">
                <DropdownSection>
                {
                    categories.map((category) => <DropdownItem key={category.slug}>
                    
                        <NavLink to={`/catalog?category=${category.slug}`}>

                            {category.name}

                        </NavLink>
                    
                    </DropdownItem>)
                }
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
        </>
    )
    
};

export default FilterMenu;