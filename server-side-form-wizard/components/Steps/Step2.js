import { Component } from 'react';
import StepLayout from '../StepLayout';
import Field from '../Field';
import './Step2.css';
import { createTextMask } from 'redux-form-input-masks';
import { required, minLength } from '../../validators/validators';

const numbers = pattern =>
  createTextMask({
    pattern,
    guide: false
  });

const minLength4 = minLength(4);

class Step2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'first'
    };
  }
  render() {
    return (
      <StepLayout {...this.props} title="Signup" level={2}>
        <ul className="select">
          <p
            style={{
              textAlign: 'center',
              fontSize: 12,

              color: this.props.errors ? 'red' : 'black'
            }}
          >
            {this.props.errors
              ? `${Object.keys(this.props.errors)[0]} Field ${
                  this.props.errors[Object.keys(this.props.errors)[0]]
                }`.toUpperCase()
              : 'DATE OF BIRTH'}
          </p>
          <li className="first">
            <Field
              name="Day"
              type="text"
              style={{
                textAlign: 'center',
                height: 40
              }}
              placeholder="DD"
              validate={[required]}
              {...numbers('99')}
            />
          </li>
          <li>
            <Field
              name="Month"
              type="text"
              placeholder="MM"
              style={{
                textAlign: 'center',
                height: 40
              }}
              validate={[required]}
              {...numbers('99')}
            />
          </li>
          <li className="last">
            <Field
              name="Year"
              type="text"
              placeholder="YYYY"
              style={{
                textAlign: 'center',
                height: 40
              }}
              validate={[required, minLength4]}
              {...numbers('9999')}
            />
          </li>
        </ul>

        <ul className="select">
          <p style={{ textAlign: 'center', fontSize: 12, marginTop: 80 }}>
            GENDER
          </p>
          <li
            className={`first ${
              this.state.current === 'first' ? 'selected' : ''
            }`}
          >
            <Field
              name="sex"
              type="radio"
              value="MALE"
              label="MALE"
              onClick={() => this.setState({ current: 'first' })}
            />
          </li>
          <li
            className={`${this.state.current === 'second' ? 'selected' : ''}`}
          >
            <Field
              name="sex"
              type="radio"
              value="FEMALE"
              label="FEMALE"
              onClick={() => this.setState({ current: 'second' })}
            />
          </li>
          <li
            className={`last ${
              this.state.current === 'third' ? 'selected' : ''
            }`}
          >
            <Field
              name="sex"
              type="radio"
              value="UNSPECIFIED"
              label="UNSPECIFIED"
              onClick={() => this.setState({ current: 'third' })}
            />
          </li>
        </ul>

        <p style={{ textAlign: 'center', fontSize: 12, marginTop: 80 }}>
          WHERE DID YOU HEAR ABOUT IS?
        </p>
        <Field
          name="whereHear"
          type="select"
          style={{
            textAlign: 'center'
          }}
        >
          <option />
          <option value="News">News</option>
          <option value="TV">TV</option>
          <option value="Website">Website</option>
        </Field>
      </StepLayout>
    );
  }
}

export default props => <Step2 {...props} />;
