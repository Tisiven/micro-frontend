import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('mainStore')
@observer
export default class List extends Component<any, any> {
  render() {
    return (
      <div>
        这是APP1
        <button onClick={this.handleChange} style={{ margin: '0px 10px' }}>
          测试Store {this.props.mainStore.count}
        </button>
        <Link to="/app1/detail">详情</Link>
      </div>
    );
  }

  handleChange = () => {
    const { count, changeState } = this.props.mainStore;
    changeState({
      count: count + 1
    });
  };
}