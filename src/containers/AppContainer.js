import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import toggleModal from '../AC/modal'

class AppContainer extends Component {

    static PropTypes = {
        store: PropTypes.object,
        toggleModal: PropTypes.func
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <button class="footer__button" onClick={this.handleClick}>Click</button>
            </Provider>
        )
    }
    handleClick = (e) => {
        e.preventDefault()
        this.props.toggleModal()
    }
}

export default AppContainer