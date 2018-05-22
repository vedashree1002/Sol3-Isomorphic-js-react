import React from "react";

//inline styling
const divStyle = {
                boxSizing:'borderBox',
                padding:'40px',
                position:'relative',
                marginTop: '100px',
                top: '20%',
                margin: 'auto',
                width: '400px',
                height: '340px',
                border: '1px solid black',
                textAlign:'center',
                fontSize:'20px',
};


const input={
                width:'100px',
                height:'10px',
                padding: '10px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize:'18px',

 
};

const submit={
                backgroundColor: '#CD853F', 
                border: 'none',
                color: 'white',
                padding: '20px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                borderRadius: '8px',
                fontSize: '16px',
            
}

export default class Layout extends React.Component {
   constructor(props) {
    super(props)
    this.state = {
      temp:'',
      city: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

 

//ASYNC callbacks so that the last letter doesnt get cut off 
 handleChange(e) {
    this.setState({city:e.target.value},()=>{console.log("City entered: ", this.state.city);});
    console.log("City:" + this.state.city);
   
  }


//API isomorphic fetch
  handleSubmit(e) {
    const url='http://api.openweathermap.org/data/2.5/weather?appid=55425e58955279263b6f5f14dd79be6b&q='+this.state.city;
    console.log("URL "+url)
    fetch(url)
    .then(response => response.json())  
      .then(json => {
        //Conversion to fahrenheit
          var temp= Math.floor(json.main.temp * 9/5 - 459.67 );
          this.setState({temp: temp},()=>{alert("Current temperature in "+ this.state.city +" is " + this.state.temp+ ' \xB0F.');});
          console.log("URL is "+url);

         })
    .catch((error) => {
         alert("Please enter a valid city ");
        });
    e.preventDefault();        
      
}

  

    render() {
        return (
            <div style={divStyle}>
                    <h3>Please enter the city to find out the current weather </h3>               
                  <form>      
                           <input type="text" style={input} value={this.state.city} onChange={e=>this.handleChange(e)} ></input><br/><br />
                            <button type='submit' style={submit} onClick= {this.handleSubmit} >SUBMIT</button>
                  </form>
            </div>
        );
    }
}
