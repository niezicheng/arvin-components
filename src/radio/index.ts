import InternalRadio from './Radio';
import RadioButton from './RadioButton';
import RadioGroup from './RadioGroup';
import { IRadioProps } from './types';

type CompoundedComponent = React.ForwardRefExoticComponent<
  IRadioProps & React.RefAttributes<any>
> & {
  Group: typeof RadioGroup;
  Button: typeof RadioButton;
  /** @internal */
  __ANT_RADIO: boolean;
};

const Radio = InternalRadio as CompoundedComponent;

Radio.Button = RadioButton;
Radio.Group = RadioGroup;

export { RadioButton, RadioGroup };
export default Radio;
