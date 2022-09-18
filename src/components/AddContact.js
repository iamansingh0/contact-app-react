import React from "react";

const AddContact = () => {
  const state = {
    name: "",
    email: "",
  };
  const add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("All the fields are mandatory");
      return;
    }
    this.props.addContactHnadler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.state);
  };

  return (
    <div className="ui main" style={{ paddingTop: "12vh" }}>
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={this.add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
