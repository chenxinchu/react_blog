import React from 'react'
import '../static/style/components/header.css'

import {Row,Col, Menu, Icon} from 'antd' // Ant Design 24格 栅格化系统
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        {/* 适配各种终端设备 */}
        <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
            <span className="header-logo">CC_CHEN</span>
            <span className="header-txt">全站开发交流学习</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          {/* 横向导航 mode="horizontal" */}
            <Menu  mode="horizontal"> 
                <Menu.Item key="home">
                    <Icon type="home" />
                    首页
                </Menu.Item>
                <Menu.Item key="video">
                    <Icon type="youtube" />
                    视频
                </Menu.Item>
                <Menu.Item key="life">
                    <Icon type="smile" />
                    生活
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header