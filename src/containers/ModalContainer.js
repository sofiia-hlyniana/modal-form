import React, {Component, PropTypes} from 'react'
import Modal from 'react-modal'

class ModalContainer extends Component {
    constructor(props) {
        super(props)
    }
    static defaultProps = {}

    static PropTypes = {}

    render() {
        return <Modal />
    }
}

export default ModalContainer