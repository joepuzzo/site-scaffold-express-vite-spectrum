import React from 'react';
import { useField } from 'informed';
import { Item, Picker } from '@adobe/react-spectrum';

export const Select = ({ children, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props
  });

  const { required, options } = userProps;
  const { error, showError } = fieldState;

  return render(
    <Picker
      ref={ref}
      isInvalid={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      selectedKey={fieldState.value}
      onSelectionChange={v => fieldApi.setValue(v, {})}
    >
      {options
        ? options.map(op => {
            return <Item key={op.value}>{op.label}</Item>;
          })
        : children}
    </Picker>
  );
};
