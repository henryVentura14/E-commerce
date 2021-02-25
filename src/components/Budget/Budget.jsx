import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetch_get_products } from '../../actions/module.action'
import Items from './Items'
import Spinner from '../Spinner/Spinner'
import '../../styles/Budget.css';

const Budget = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.modules.products);
    useEffect(() => {
        dispatch(fetch_get_products())
    }, [])

    const optionCurrency = { style: 'currency', currency: 'USD' };
    const formatCurrency = new Intl.NumberFormat('en-US', optionCurrency);
    if (!product) return (<Spinner />)

    const list = product.map(item => ({
        price: Math.floor(item.price)
    }));
    const total = list.reduce((prev, next) => prev + next.price, 0);

    return (
        <section className="content-budget">
            <div className="title-budget">
                <h1>RESUMEN DE LA ORDEN</h1>
            </div>
            {product &&
                product.map((item, i) =>
                    <Items key={i} items={item} />
                )
            }
            <div className="edit">
                <button>Editar</button>
            </div>
            <div className="subtotal">
                <span className="top">ENVÍO</span>
                <span className="top">A calcular</span>
            </div>
            <div className="subtotal">
                <span className="bottom">SUBTOTAL</span>
                <span className="bottom">{formatCurrency.format(total)}</span>
            </div>
            <div className="total">
                <span>TOTAL</span>
                <span>{formatCurrency.format(total)}</span>
            </div>
        </section>
    );
}

export default Budget;