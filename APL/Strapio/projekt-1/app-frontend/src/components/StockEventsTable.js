import React from 'react'

function StockEventsTable(props){ 
    const {stockEvents} = props
    return (
        <div className="StockEventsTable">
            {stockEvents.map(event => (
                <div className="product-block">
                    <p><strong>Product name:</strong> {event.product.name}</p>
                    <p><strong>Product id:</strong> {event.id}</p>
                    <p><strong>Type:</strong> {event.type}</p>
                    <p><strong>Quantity:</strong> {event.qty}</p>
                </div>
            ))}
        </div>
    )

}

export default StockEventsTable; 