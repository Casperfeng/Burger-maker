import React from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';


const withErrorHandler = ( WrappedComponent, axios ) => {

  state = {
    error: null
  }

  return class extends Component  {
    componentDidMount () {
      axios.interceptors.request.use(req => {
        this.setState({error: null});
      });
      axios.interceptors.response.use(null, error => {
        this.setState({error: error});
      });
    }

    render(){
      return (
        <Aux>
          <Modal show={this.state.error}>
            {this.state.error}
          </Modal>
          <WrappedComponent {...props} />
        </Aux>
      );
    }
}
};

export default withErrorHandler;