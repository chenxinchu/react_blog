import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'

const List = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} lx={14}>左侧</Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} lx={4}>右侧</Col>
    </Row>
  </>
)

export default List