import React, { Component } from "react";
import "./Form.css";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      series: "",
      selection: "",
      age: "",
      email: "",
      number: "",
      textarea: "",
      checkbox: false,
    };
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }
  
  handleClick = (e) => {
    e.preventDefault();
    alert('kart qeydiyyatdan kecdi')
    const keys = Object.keys(this.state)
    keys.forEach((key) => {
      console.log(`${key}: ${this.state[key]}`);
  });
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleClick}>
<label>
    Xəstənin tam adı (məcburi)
    <br/>
    <input name="name" onChange={this.handleChange} required />
</label>
<br/>
<label>
    Vəsiqə seriyası və nömrəsi (məcburi)
    <br/>
    <input name="series" onChange={this.handleChange} required />
</label>
<br/>
<label>
    Cinsi
    <br/>
    <select name="selection" onChange={this.handleChange}>
        <option>Kishi</option>
        <option>Qadin</option>
    </select>
</label>
<br/>
<label>
    Yaş
    <br/>
    <input name="age" type="number" onChange={this.handleChange} />
</label>
<br/>
<label>
    Email ünvanı
    <br/>
    <input name="email" type="email" onChange={this.handleChange} />
</label>
<br/>
<label>
    Telefon nömrəsi
    <br/>
    <input name="number" type="number" onChange={this.handleChange} />
</label>
<br/>
<label>
    Simptomların təsviri (mətn daxil etmə sahəsi)
    <br/>
    <textarea name="textarea" onChange={this.handleChange}></textarea>
</label>
<br/>
<label>
    Checkbox «Təkrar qəbul»
    <input name="checkbox" type="checkbox" onChange={this.handleChange} />
    <button>Gonder</button>
</label>
<br/>

</form>
      </div>
    );
  }
}