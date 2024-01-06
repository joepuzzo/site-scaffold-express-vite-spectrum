import { Flex, Item, Radio, RadioGroup } from '@adobe/react-spectrum';
import { Form } from '../inputs/Form';
import { InputSlider } from '../inputs/InputSlider';
import { Input } from '../inputs/Input';
import { NumberInput } from '../inputs/NumberInput';
import { Debug, Relevant } from 'informed';
import { Checkbox } from '../inputs/Checkbox';
import { Select } from '../inputs/Select';
import TextAreaInput from '../inputs/TextArea';
import { CheckboxGroup } from '../inputs/CheckboxGroup';

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
        // height: 'calc(100vh - 75px)'
      }}
    >
      <Flex direction="column" alignItems="center" gap="size-50">
        <h1>INFORMED</h1>
        <Form>
          <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
            <Flex direction="column" gap="size-200" UNSAFE_style={{ textAlign: 'left' }}>
              <Input name="name" label="Name" initialValue="Joe" />
              <NumberInput name="age" label="Age" step={1} initialValue={29} />
              <InputSlider
                name="weight"
                label="Weight"
                type="number"
                minValue={-100}
                maxValue={100}
                defaultValue={0}
                step={1}
                trackGradient="rgb(204, 44, 117)"
              />
              <Select name="car" label="Car" initialValue="ms">
                <Item key="ms">Model S</Item>
                <Item key="m3">Model 3</Item>
                <Item key="mx">Model X</Item>
                <Item key="my">Model Y</Item>
              </Select>
              <Checkbox name="married" label="Married?" />
              <Relevant when={({ formState }) => formState.values.married}>
                <Input name="spouse" label="Spouse" />
              </Relevant>
              <RadioGroup name="epipen" label="Do you own a tesla?:" required>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </RadioGroup>
              <TextAreaInput name="bio" label="Bio" width="size-3600" maxWidth="100%" />
              <CheckboxGroup
                name="directions"
                label="Directions"
                options={[
                  { label: 'X', value: 'x' },
                  { label: 'Y', value: 'y' },
                  { label: 'Z', value: 'z' }
                ]}
              />
            </Flex>
            <div style={{ minWidth: '300px' }}>
              <Debug />
            </div>
          </div>
        </Form>
      </Flex>
    </div>
  );
};
