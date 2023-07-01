import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input } from './ContactForm.styled';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
  
    handleChange = e => {
        if (e.target.value.trim() === '') {
        return;
        }

        // this.setState({
        //   [e.target.name]:
        //     e.target.name === 'name'
        //       ? e.target.value.toLowerCase()
        //       : e.target.value,
        // });
        this.setState({ [e.target.name]: e.target.value });
    };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label htmlFor="input_name">Name</label>
        <Input
          id="input_name"
          type="text"
          name="name"
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />

        <label htmlFor="input_tel">Phone number</label>

        <Input
          id="input_tel"
          type="tel"
          name="number"
          placeholder="Enter phone number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
export default ContactForm;

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};