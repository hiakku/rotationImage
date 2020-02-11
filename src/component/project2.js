import React from 'react';
export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            age: '',
            student: '',
            income: '',
            bundleVal: ''
        };
    }
    firstChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    productValue = () => {
        let productsValues = [];
        let bundle='';
        let value = '';
        if (this.state.age > 17) {
            if (this.state.income > 0 && this.state.income < 12000) {
                productsValues = ["Current Account", "Debit card"];
                bundle = "Classic";
                value = 1;                                  
            } else if (this.state.income > 12000 && this.state.income < 40000) {
                productsValues = ["Credit Card", "Current Account", "Debit Card", "Credit Card"];
                bundle = "Classic Plus";
                value = 2;              
            } else if (this.state.income > 40000) {
                productsValues = ["Current Account Plus", "Debit Card", "Gold Credit Card "];
                bundle = "Gold";
                value = 3;      
            }  else if (this.state.student === "yes") {
                productsValues = ["Student Account", "Debit card", "Credit Card"]; 
                bundle = "Student";
                value = 0;  
            }
        }
        else if (this.state.age < 18 && this.state.age > 0) {
            productsValues = ["Junior Saver Account"];
            bundle = "Junior Saver ";
            value = 0;
        }  
        document.getElementById("valuehere").innerHTML=value;
    }

    handleSubmit = (event) => {
        this.productValue();
        event.preventDefault();
    }
    
    render() {
        return (
            <div>
                <h1>Product Recommendation</h1>
                <form onSubmit={this.handleSubmit}>
                    <table style={{width: '20%', height: 'auto'}}>
                        <tbody>
                        <tr>
                            <td><label htmlFor="age">Age:</label></td>
                            <td><input type="text" name="age" id="age" onChange= {this.firstChangeHandler}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="student">Student (Type yes or no):</label></td>
                            <td><input type="text" name="student" id="student" onChange= {this.firstChangeHandler}/></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="income">Income:</label></td>
                            <td><input type="text" name="income" id="income" onChange= {this.firstChangeHandler} /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button type="submit" name="submit" id="submit">Submit</button></td>
                        </tr>
                        </tbody>
                    </table>
                </form>
                Value is: <p id="valuehere"></p>
            </div>
        )
    }
}
