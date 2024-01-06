import React from 'react';
import { useForm } from 'informed';
import { Form as AdobeForm } from '@adobe/react-spectrum';

export const Form = ({ children, ...rest }) => {
  const { formController, render, userProps } = useForm(rest);

  return render(
    <AdobeForm
      {...userProps}
      onReset={formController.reset}
      onSubmit={formController.submitForm}
      onKeyDown={formController.keyDown}
    >
      {children}
    </AdobeForm>
  );
};
