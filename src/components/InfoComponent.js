import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import DetailsComponent from '../components/DetailsComponent';
import NoticiasComponent from './NoticiasComponent';

class InfoComponent extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const pais = this.props.pais;
    const noticias = this.props.noticias;

    const tabsStyle = {
      marginBottom: "1rem"
    }
    return (
      <div>
        <Nav tabs style={tabsStyle}>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Detalles
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Noticias
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                {pais != undefined
                  ? <DetailsComponent pais={pais} />
                  : <h6>Debe seleccionar un pais</h6>}
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            {pais != undefined
              ? noticias != undefined ? <NoticiasComponent noticias={noticias} />
                : <h6>No hay noticias que mostrar</h6>
              : <h6>Debe seleccionar un pais</h6>}
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default InfoComponent;
