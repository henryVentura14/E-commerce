import React, { useState } from 'react';
import '../../styles/Form.css';

const Form = () => {

    const initialState = {
        name: "",
    }
    const [data, setData] = useState(initialState)

    const { name, lastName, email, phone, zipCode, colony, region, city, delegation, street, active } = data
    const onChange = value => {
        setData({
            ...data,
            [value.name]: value.value
        })
    }
    return (
        <section className="content-form">
            <div className="title-form">
                <h1>DIRECCIÓN DE ENVÍO</h1>
            </div>
            <form className="form">
                <div className="content-inputs">
                    <div className="input-group">
                        <i className="fas fa-user" />
                        <input
                            className="input-form"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Nombre" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-user" />
                        <input
                            className="input-form"
                            type="text"
                            name="lastName"
                            id="lastName"
                            value={lastName}
                            onChange={onChange}
                            placeholder="Apellidos" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-envelope" />
                        <input
                            className="input-form"
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Correo electrónico" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-phone-alt" />
                        <input
                            className="input-form"
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={onChange}
                            placeholder="Numero de telefóno" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-map-marker-alt" />
                        <input
                            className="input-form"
                            type="text"
                            name="zipCode"
                            id="zipCode"
                            value={zipCode}
                            onChange={onChange}
                            placeholder="Código postal" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-map-marker-alt" />
                        <input
                            className="input-form"
                            type="text"
                            name="colony"
                            id="colony"
                            value={colony}
                            onChange={onChange}
                            placeholder="Colonia" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-map-marker-alt" />
                        <input
                            className="input-form"
                            type="text"
                            name="region"
                            id="region"
                            value={region}
                            onChange={onChange}
                            placeholder="Estado/Región" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-map-marker-alt" />
                        <input
                            className="input-form"
                            type="text"
                            name="city"
                            id="city"
                            value={city}
                            onChange={onChange}
                            placeholder="Ciudad" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-map-marker-alt" />
                        <input
                            className="input-form"
                            type="text"
                            name="delegation"
                            id="delegation"
                            value={delegation}
                            onChange={onChange}
                            placeholder="Delegación o municipio" />
                    </div>
                    <div className="input-group">
                        <i className="fas fa-map-marked-alt" />
                        <input
                            className="input-form"
                            type="text"
                            name="street"
                            id="street"
                            value={street}
                            onChange={onChange}
                            placeholder="Calle" />
                    </div>
                </div>
                <div className="button-group">
                    <button type="button" className="directions">Libre de direcciones</button>
                    <input  className="save" type="submit" value="Guardar" />
                </div>
                <div className="checkbox">
                    <input
                        type="checkbox"
                        name="active"
                        id="check"
                        checked={active}
                        onChange={onChange}
                    />
                    <label htmlFor="check">utilizar dirección de la facturacion</label>
                </div>
            </form>
        </section>
    );
}

export default Form;
