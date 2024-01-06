import React from 'react';
import { useField } from 'informed';
import { Slider as SpectrumSlider, TextField } from '@adobe/react-spectrum';

export const Slider = props => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'number',
    ...props
  });
  const { required } = userProps;
  const { error, showError } = fieldState;
  return render(
    <SpectrumSlider
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      onChange={v => fieldApi.setValue(v)}
    />
  );
};
