import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetch_get_zip, fetch_post_contact } from '../../actions/module.action';
import Error from '../Error/Error'
import '../../styles/Form.css';

const Form = () => {
    const dispatch = useDispatch();
    const zipData = useSelector((state) => state.modules.zipdata);
    //Ref
    const inputName = useRef(null);
    const inputLastName = useRef(null);
    const inputEmail = useRef(null);
    const inputPhone = useRef(null);
    const inputStreet = useRef(null);
    const inputZip = useRef(null);
    const inputColonies = useRef(null);
    const inputRegion = useRef(null);
    const inputCity = useRef(null);
    const inputDelegation = useRef(null);

    const initialState = {
        name: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: 0,
        colonies: [],
        region: '',
        city: '',
        delegation: '',
        street: '',
        active: false
    }
    const [data, setData] = useState(initialState)
    const [disabled, setdisabled] = useState(true);
    const [erroremail, setErrorEmail] = useState(false);
    const [errorabc, setErrorAbc] = useState(false);
    const [errornumber, setErrorNumber] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const [messageEmail, setMessageEmail] = useState('');
    const [messageAbc, setMessageAbc] = useState('');
    const [messageNumber, setMessageNumber] = useState('');
    const [messageSuccess, setMessageSuccess] = useState('');
    const [messageError, setMessageError] = useState('');


    const onChange = event => {
        //se alamcenan el valor de los inputs en el state
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setData({
            ...data,
            [name]: value
        })
        //validacion de campos
        const isEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isAbc = /^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/;
        const isNumber = /^\d+$/;
        if (isEmail.test(inputEmail.current.value)) {
            setMessageEmail('')
            setErrorEmail(false)
            setdisabled(false)
        } else {
            setMessageEmail('Ingrese un correo valido')
            setErrorEmail(true)
            setdisabled(true)
        }
        if (isAbc.test(inputName.current.value || inputLastName.current.value)) {
            setMessageAbc('')
            setdisabled(false)
            setErrorAbc(false)
        } else {
            setMessageAbc('El campo nombre y campo apellido no deben contener numeros')
            setErrorAbc(true)
            setdisabled(true)
        }
        if (isNumber.test(inputPhone.current.value)) {
            setMessageNumber('')
            setdisabled(false)
            setErrorNumber(false)
        } else {
            setMessageNumber('El campo telefono solo permite numeros')
            setErrorNumber(true)
            setdisabled(true)
        }
        //Limpiar campos cuando este vacio el apartado de codigo postall
        if (inputZip.current.value.length === 0) {

        }
        dispatch(fetch_get_zip(inputZip.current.value))
    }
    const cleanInputs = () => {
        inputName.current.value = ''
        inputLastName.current.value = ''
        inputEmail.current.value = ''
        inputPhone.current.value = ''
        inputRegion.current.value = ''
        inputZip.current.value = ''
        inputColonies.current.value = ''
        inputCity.current.value = ''
        inputDelegation.current.value = ''
        inputStreet.current.value = ''

    }
    const onSubmit = e => {
        e.preventDefault();
        dispatch(fetch_post_contact(data))
            .then(req => {
                cleanInputs()
                setShowSuccess(true)
                setdisabled(true)
                setMessageSuccess('Operción exitosa')
            })
            .catch(error => {
                setShowError(true)
                setMessageError(`fail: ${error}`)
                console.log(`fail: ${error}`);
            });

    }
    // setTimeout(() => {
    //     setErrorNumber(false)
    //     setErrorAbc(false)
    //     setErrorEmail(false)
    //     setShowError(false)
    //     setShowSuccess(false)
    // }, 3000);
    useEffect(() => {
        if (zipData) {
            setData({
                colonies: zipData.colonies,
                region: zipData.state,
                city: zipData.city,
                delegation: zipData.town,
            })
        }

    }, [zipData])
    const { name, lastName, email, phone, zipCode, colonies, region, city, delegation, street, active } = data

    let coloniesList = colonies
        && colonies.map((item, i) => (
            <option key={i} defaultValue={item} onChange={onChange}>{item}</option>
        ))

    return (
        <React.Fragment>
            <section className="content-form">
                <div className="title-form">
                    <h1>DIRECCIÓN DE ENVÍO</h1>
                </div>
                <form className="form" onSubmit={onSubmit}>
                    <div className="content-inputs">
                        <div className="input-group">
                            <i className="fas fa-user" />
                            <input
                                className="input-form"
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                ref={inputName}
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
                                ref={inputLastName}
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
                                ref={inputEmail}
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
                                ref={inputPhone}
                                onChange={onChange}
                                placeholder="Numero de telefóno" />
                        </div>
                        <div className="input-group">
                            <i className="fas fa-map-marker-alt" />
                            <input
                                className="input-form"
                                type="text"
                                name="zipCode"
                                ref={inputZip}
                                id="zipCode"
                                value={zipCode}
                                onChange={onChange}
                                placeholder="Código postal" />
                        </div>
                        <div className="input-group">
                            <i className="fas fa-map-marker-alt" />
                            <select
                                className="input-select"
                                type="text"
                                name="colonies"
                                id="colonies"
                                ref={inputColonies}
                                placeholder="Colonia" >
                                <option>Colonia</option>
                                {coloniesList}
                            </select>
                        </div>
                        <div className="input-group">
                            <i className="fas fa-map-marker-alt" />
                            <input
                                className="input-form"
                                type="text"
                                name="region"
                                id="region"
                                ref={inputRegion}
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
                                ref={inputCity}
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
                                ref={inputDelegation}
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
                                ref={inputStreet}
                                onChange={onChange}
                                placeholder="Calle" />
                        </div>

                        <div className="button-group">
                            <button type="button" className="directions">Libreta de direcciones</button>
                            <input disabled={disabled} className="save" type="submit" value="Guardar" />
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
                    </div>
                </form>
                {erroremail
                    ? <Error message={messageEmail} />
                    : null
                }
                {errorabc
                    ? <Error message={messageAbc} />
                    : null
                }
                {errornumber
                    ? <Error message={messageNumber} />
                    : null
                }
                {showSuccess
                    ? <Error message={messageSuccess} type="success" />
                    : null
                }
                {showError
                    ? <Error message={messageError} />
                    : null
                }
            </section>
        </React.Fragment>
    );
}

export default Form;
