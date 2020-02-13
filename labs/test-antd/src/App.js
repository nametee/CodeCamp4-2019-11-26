import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon, Transfer  } from "antd";
import 'antd/dist/antd.css';

const targetKeys = [];
const mockData = [];
for (let i = 0; i < 20; i++) {
  const data = {
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
    chosen: Math.random() * 2 > 1,
  };
  if (data.chosen) {
    targetKeys.push(data.key);
  }
  mockData.push(data);
}

const filterOption = (inputValue, option) => option.description.indexOf(inputValue) > -1;

const clearData= () => {
    for(let i = targetKeys.length -1; i >= 0;  i--){
      targetKeys.pop()
    }
}

const copyData = (data) => {
  for(let i = 0; i < data.length; i++){
    targetKeys.push(data[i])
  }
}

function App() {
  const handleChange = tk => {
    clearData();
    copyData(tk);
  };

  const handleSearch = (dir, value) => {
    console.log('search:', dir, value);
  };
  return ( 
    <div>
      {/*
      <Button type="primary" shape="round" icon="download" size="small" >
        test ant-d button
        <Icon type="down" />
      </Button>  
      <div>
        <Transfer
          dataSource={mockData}
          showSearch
          filterOption={filterOption}
          targetKeys={targetKeys}
          onChange={handleChange}
          onSearch={handleSearch}
          render={item => item.title}
        />
      </div>*/} 
      <Transfer
            dataSource={mockData}
            showSearch
            filterOption={filterOption}
            targetKeys={targetKeys}
            onChange={handleChange}
            onSearch={handleSearch}
            render={item => item.title}
          />
    </div>
  );
}

export default App;
