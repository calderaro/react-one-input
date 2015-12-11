import React from "react";
import Search from "./Search";

export default React.createClass({
  getDefaultProps(){
    return {
      result: {},
      api: "",
      name: "name",
      value: "",
      placeholder: "",
      label: "",
      type: "text",
    };
  },
  render() {
    const {name, id, placeholder, type, value, onChange, onKeyPress, result, api, field, ref} = this.props;
    const capital = (name || "name").charAt(0).toUpperCase() + (name || "name").substr(1).toLowerCase();

    if(type === "text") return (
      <div className="form-group">
        <label htmlFor={name}>{placeholder}</label>
        <input 
          type="text" 
          id={ id || name}
          className="form-control" 
          placeholder={placeholder}
          value={value}
          onKeyPress={onKeyPress}
          onChange={onChange}/>
        <span style={{color: "#FE2E2E"}}>{result[this.props.name]}</span>
      </div>
    )

    if(type === "number") return (
      <div className="form-group">
        <label htmlFor={name}>{placeholder}</label>
        <input 
          type="text" 
          id={ id || name}
          className="form-control" 
          placeholder={placeholder}
          value={value}
          onKeyPress={onKeyPress}
          onChange={onChange}/>
        <span style={{color: "#FE2E2E"}}>{result[this.props.name]}</span>
      </div>
    )

    if(type === "search") return (
      <div className="form-group">
        <label htmlFor={name}>{placeholder}</label>
        <Search 
          id={ id || name}
          placeholder={placeholder}
          value={value}
          api={api || name}
          field={field || name}
          onKeyPress={onKeyPress}
          ch={onChange}/>
        <span style={{color: "#FE2E2E"}}>{result[this.props.name]}</span>
      </div>
    )

    if(type === "checkbox") return (
      <div className="checkbox">
        <label>
          <input type="checkbox" onKeyPress={onKeyPress} onChange={onChange} checked={value} id={ id || name}/>
          {placeholder}
        </label>
      </div>
    )

    if(type === "textarea") return (
      <div className="form-group">
        <label htmlFor={name}>{placeholder}</label>
        <textarea id={ id || name} className="form-control" value={value} onKeyPress={onKeyPress} onChange={onChange}
          placeholder={placeholder} rows="3"></textarea>
        <span style={{color: "#FE2E2E"}}>{result[this.props.name]}</span>
      </div>
    )

    if(type === "file") return (
      <div className="form-group">
        { placeholder ? <label htmlFor={name}>{placeholder}</label> : null}
        <input type="file" id={ id || name} ref={ref} className="form-control"  accept=".jpg"
          placeholder="Image" value={value} onKeyPress={onKeyPress} onChange={onChange}/>
        <span style={{color: "#FE2E2E"}}>{result[this.props.name]}</span>
      </div>
    )

  }
})
