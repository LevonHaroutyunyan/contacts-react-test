import React, { Component } from 'react';
import { Spin } from 'antd';

const withAsync = (importComponent) => {
  return class extends Component {
    state = {
      component: null,
    };
    componentDidMount() {
      importComponent().then((cmp) => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
      const C = this.state.component;
      return C ? (
        <div className='cmp'>
          <C {...this.props} />
        </div>
      ) : (
        <Spin />
      );
    }
  };
};

export default withAsync;
