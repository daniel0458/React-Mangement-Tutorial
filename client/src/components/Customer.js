import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Tablecell from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component {
    render() {
        return(
            <TableRow>
            <Tablecell>{this.props.id}</Tablecell>
            <Tablecell><img src={this.props.image} alt="profile"/></Tablecell>
            <Tablecell>{this.props.name}</Tablecell>
            <Tablecell>{this.props.birthday}</Tablecell>
            <Tablecell>{this.props.gender}</Tablecell>
            <Tablecell>{this.props.job}</Tablecell>
            <Tablecell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></Tablecell>
            </TableRow>
        )    
    }
}

//componet 분할
/*class Customer extends React.Component {
    render() {
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo  birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )    
    }
}

 class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
} */
export default Customer;