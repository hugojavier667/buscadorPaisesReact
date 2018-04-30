import React, { Component } from 'react'

class DetailsComponent extends Component {

    render() {
        const pais = this.props.pais;
        return (
            <div>
                <h1>{pais.name}</h1>
                <div className="row">
                    <div className="span9">
                        <h3>Capital: {pais.capital}</h3>
                        <h3>Region: {pais.region}</h3>
                        <h4>Code: {pais.callingCodes[0]}</h4>
                    </div>
                    <div className="span3">
                        <img style={{ maxHeight: '50px' }} src={pais.flag} alt={pais.name} />
                    </div>
                </div>
            </div >
        )
    }
}

export default DetailsComponent;
