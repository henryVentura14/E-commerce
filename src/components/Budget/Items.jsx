import React from 'react';
import '../../styles/Item.css'
const Items = ({ items }) => {
    const optionCurrency = { style: 'currency', currency: 'USD' };
    const formatCurrency = new Intl.NumberFormat('en-US', optionCurrency);
    return (
        <div className="content-item">
            <img src={items.image} alt={"imagen del producto" + items.name} />
            <div className="description">
                <p>{items.name}</p>
            </div>
            <div className="price">
                <span>
                    {formatCurrency.format(items.price)}
                </span>
            </div>
        </div>
    );
}

export default Items;