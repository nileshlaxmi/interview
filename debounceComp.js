import React, { Component } from "react";
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

class DebounceComp extends Component {
  onChange = (event) => {
    let _value = event.target.value;
    console.log("onChange", _value)
    this.setState({ value: _value }, () => {
      this.debounceCall(_value);
    });
  };

  debounceCall = debounce((value) => {
    this.serviceCall(value);
  }, 1000);

  serviceCall = (value) => {
    console.log("serviceCall", value)
  };

  render() {
    return (
      <div>
        <div>Welcome</div>
        <input type="text" onChange={this.onChange} />
      </div>
    );
  }
}

export default DebounceComp;
