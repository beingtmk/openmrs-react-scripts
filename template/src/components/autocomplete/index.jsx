import React from 'react';

import { AutoComplete } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

export default class Autcomplete extends React.Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <h1>Auto Complete Component</h1><hr />
        <AutoComplete
          dataSource={dataSource}
          onSearch={this.handleSearch}
          onSelect={onSelect}
          placeholder="input here"
          style={{ width: 200 }}
        />
      </div>
    );
  }
}
