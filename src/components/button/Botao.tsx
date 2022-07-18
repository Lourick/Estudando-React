import React from 'react';
import style from './Button.module.scss'

class Botao extends React.Component<{
    children?: React.ReactNode
}> {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

// vamoooooo
export default Botao;