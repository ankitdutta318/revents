import React from 'react';
import { Form, Label } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import format from 'date-fns/format';
import 'react-datepicker/dist/react-datepicker.css';

function DateInput({
  input: { value, onChange, onBlur },
  width,
  placeholder,
  meta: { touched, error },
  ...rest
}) {
  return (
    <Form.Field error={touched && !!error}>
      <DatePicker
        {...rest}
        placeholderText={placeholder}
        selected={value ? new Date(value) : null}
        onChange={(date) => onChange(format(date, 'dd LLL yyyy h:mm a'))}
        onBlur={onBlur}
        onChangeRaw={(e) => e.preventDefault()}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
}

export default DateInput;
