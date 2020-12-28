import React, {useContext} from 'react'
import {CSSTransition} from 'react-transition-group'
import {AlertContext} from '../context/alert/alertContext'

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    return (
        <CSSTransition
        in={alert.visible}
        timeout={{
        enter: 700,
        exit: 350
        }}
        classNames={'alert'}
        mountOnEnter
        unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
                <strong>OBS!</strong> {alert.text}
                <button 
                onClick={hide}
                type="button" 
                className="btn btn-light btn-sm" 
                aria-label="Close"
                >&times;</button>
            </div>
        </CSSTransition>
    )
}