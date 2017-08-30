import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import '../styles/timezone.css';

import TimezonePicker from '../src/index';
import timeHelper from '../src/utils/time';


const TIME = timeHelper.time();
TIME.current = timeHelper.current();
TIME.tz = timeHelper.guessUserTz();

storiesOf('Timezones', module)
    .addDecorator(withKnobs)
    .add('with timezone picker', () => (
        <TimezonePicker
            phrases={{
                timezonePickerLabel: text('timezonePickerLabel phrase', 'Closest City or Timezone')
            }}
            timezone={text('timezone', TIME.tz)}
            onTimezoneChange={action('onTimezoneChange')}
            onClearFocus={action('onClearFocus')}
        />
    ));
