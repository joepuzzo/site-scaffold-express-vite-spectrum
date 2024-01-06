import React from 'react';
import { useField } from 'informed';
import { CheckboxGroup as SpectrumCheckboxGroup, Checkbox } from '@adobe/react-spectrum';

export const CheckboxGroup = ({ children, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    ...props
  });

  const { required, options } = userProps;
  const { error, showError } = fieldState;

  return render(
    <SpectrumCheckboxGroup
      ref={ref}
      isInvalid={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      value={fieldState.value}
      onChange={v => fieldApi.setValue(v, {})}
    >
      {options
        ? options.map(op => {
            return (
              <Checkbox value={op.value} key={op.label}>
                {op.label}
              </Checkbox>
            );
          })
        : children}
    </SpectrumCheckboxGroup>
  );
};
