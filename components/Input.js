import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  margin-bottom: 1.5rem;
  flex: 1;
  display: block;
  label {
    display: block;
    color: #767676;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;

    small {
      font-size: 8px;
      margin-left: 5px;
    }
  }

  input {
    height: 48px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colorGrey};
    outline: 0;
    padding: 0 1rem;
  }
  textarea {
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colorGrey};
    outline: 0;
    padding: 1rem;
    resize: none;
  }
  input,
  textarea {
    @media screen and (max-width: 900px) {
      margin-bottom: 1rem;
    }
  }
`;

const Input = props => {
  const {
    textarea,
    type,
    label,
    name,
    description,
    cols,
    rows,
    required,
    placeholder,
    pattern
  } = props;
  return (
    <StyledInput className={props.className}>
      {label && (
        <label htmlFor={name}>
          {label}:{description && <small>{description}</small>}
        </label>
      )}
      {!textarea && (
        <input
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          name={name}
          type={type || 'text'}
        />
      )}
      {textarea && (
        <textarea name={name} cols={cols || '30'} rows={rows || '10'} />
      )}
    </StyledInput>
  );
};

export default Input;
