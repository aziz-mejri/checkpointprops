import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};
class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
      <div>
        {children}
      </div>
    );
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired
// Specifies the default values for props:
Greeting.defaultProps = {
  name: 'Stranger'
};

// Renders "Hello, Stranger":
const root = ReactDOM.createRoot(document.getElementById('example')); 
root.render(<Greeting />);
static defaultProps = {
  name: 'stranger'
  export default function HelloWorldComponent({ name }) {
    return (
      <div>Hello, {name}</div>
    )
  }
  function HelloWorldComponent({ name }) {
    return (
      <div>Hello, {name}</div>
    )
  }
  
  export default HelloWorldComponent  