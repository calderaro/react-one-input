import React from "react";
import api from "../services";
export default React.createClass({
  getInitialState(){
    return {
      isfocused: false,
      items: [],
    }
  },
  style(){
    

    let defaultStyle ={
      input: {},
      ul: { 
        display: "block",
        position: "absolute",
        zIndex: "100",
        background: "#FFF",
        margin: "0",
        padding: 0,
        borderLeft: "1px solid gray",
        borderRight: "1px solid gray",
        borderBottom: "1px solid gray",
      },
      li: { listStyle: "none", margin: "0", padding: "8px"}
    }

    if(!this.refs.input) return defaultStyle;
    defaultStyle.ul.width = this.refs.input.offsetWidth;
    return defaultStyle;

  },
  componentWillMount(){
    if(!this.props.value) return;
    api(this.props.api)
    .read(this.props.value)
    .then(res => {
      this.setState({items: [res.data]});
      this.refs.input.value = res.data[this.props.field || "name"];
    })
    .catch( err => console.log(err));
  },
  onChange(e){
    api(this.props.api).read("", {search: e.target.value})
    .then(res => this.setState({ isfocused: true, items: res.data}, this.check()))
    .catch( err => console.log(err));
  },
  focus(e){
    this.setState({isfocused: true });
  },
  defocus(e){
    setTimeout(() => {
      if(!this.isMounted()) return; //avoid undefined input error caused by timeout
      this.setState({isfocused: false }, this.check());
    }, 300);
  },
  select(item){
    this.refs.input.value = item[this.props.field || "name"];
    this.setState({isfocused: false }, this.check());
  },
  check(){
    const item = this.state.items.filter((item) => (item[this.props.field || "name"]).toUpperCase() === (this.refs.input.value).toUpperCase())
    this.props.ch({target:{ id: this.props.id, value: item.length ? item[0].id : "" }}, item[0]);
  },
  render(){
    const {isfocused, items} = this.state;
    const style = this.style();
    style.ul.display = isfocused && items.length ? "block" : "none";

    return (
      <div onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          id={this.props.id}
          name={this.props.name}
          className="form-control"
          placeholder={this.props.placeholder}
          onChange={this.onChange}
          onFocus={this.focus}
          onBlur={this.defocus}
          onKeyPress={this.props.onKeyPress}
          autoComplete="off"
          ref="input"/>
        <ul style={style.ul} >
          {items.map((item) => (<li key={item.id} onClick={this.select.bind(this,item)} style={style.li}>{item[this.props.field || "name"]}</li>))}
        </ul>
      </div>
    )
  },
})
