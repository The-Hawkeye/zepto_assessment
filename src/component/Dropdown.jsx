import React, { useState } from 'react';
import "./Drop.css"

// Dropdown component with a maximum of 5 items displayed
const Dropdown = ({ items, onSelect }) => {
    const [visibleItems, setVisibleItems] = useState(5); // Maximum number of visible items

    const handleShowMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 5); // Show 5 more items
    };

    return (
        <div className='search-div'>
            <ul>
                {items.slice(0, visibleItems).map(item => (
                    <li key={item.email} onClick={() => onSelect(item)} className='cursor-pointer'>
                    <div className='flex searchResult'>
                        <div className='img-container'>
                            <img className="img-tag" src={item.image_url}></img>
                            <span>{item.name}</span>
                        </div>
                        <div className='email-info'><span className='text-gray-500'>{item.email}</span></div>
                    </div>
                    </li>
                ))}
            </ul>
            {/* {visibleItems < items.length && (
                <button onClick={handleShowMore}>Show More</button>
            )} */}
        </div>
    );
};

export default Dropdown;
