import React from 'react';
import fbIcon from './fb_icon_325x325.png';
import './App.css';
import { Row, Col, Form, Icon, Input, Button } from 'antd';
import 'antd/dist/antd.css';

function App(props) { 
  return (
    <div>
      <Row type='flex' justify='center' align="middle" style={{height: '100vh'}}>
        <Col span={ 8 }>
          <img 
              src={ fbIcon } 
              alt={"logo"}
              style={{ width:'100%', maxWidth: "400px", margin: "20px", paddingLeft: '30px', paddingRight: '30px' }}
          /> 
          {/*<Row type='flex' justify='center' style={{height:'auto'}}>
          <img 
              src={ fbIcon } 
              alt={"logo"}
              style={{ width:'100%', maxWidth: "200px", margin: "20px" }}
          /> 
          </Row>*/}
        </Col>
        <Col span={ 8 }>
          <Form style={{ width:'100%', maxWidth: "400px" }}>
            <Form.Item label='User Name'>
              <Input 
                prefix= {<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='User Name'
              />
            </Form.Item>
            <Form.Item label='Password'>
              <Input.Password  
                prefix= {<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='password'
              />
            </Form.Item>
            <Row type='flex' justify='space-between'>
              <Col span={ 6 }>
                <Button type='link'> 
                  Signup
                </Button>
              </Col>
              <Col span={ 6 }>
                <Button type="primary">
                  Login
                </Button>
              </Col>
            </Row>

          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default App;
