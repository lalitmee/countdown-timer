import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import CountDownColumn from 'components/CountDown/Column';
import CountDownContainer from 'components/CountDown';
import LapThreshold from 'components/Threshold';
import Instructions from 'components/Instructions';

describe('App Component', () => {
  it('should render the App Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should contain CountDown component', () => {
    const wrapper = mount(<App />);
    wrapper.mount();
    expect(wrapper.children(CountDownContainer).length).toEqual(1);
  });
});

describe('CountDown Component', () => {
  it('should render the CountDown Hours Component', () => {
    const countDownComponentHoursColumn = shallow(
      <CountDownColumn
        countDownTime={0}
        columnType="hours"
        onChangeCountDownTime={() => null}
        isRunning={false}
      />,
    );
    expect(countDownComponentHoursColumn.exists()).toBe(true);
  });
  it('should render the CountDown Minutes Component', () => {
    const countDownComponentHoursColumn = shallow(
      <CountDownColumn
        countDownTime={0}
        columnType="Minutes"
        onChangeCountDownTime={() => null}
        isRunning={false}
      />,
    );
    expect(countDownComponentHoursColumn.exists()).toBe(true);
  });
  it('should render the CountDown Seconds Component', () => {
    const countDownComponentHoursColumn = shallow(
      <CountDownColumn
        countDownTime={0}
        columnType="Seconds"
        onChangeCountDownTime={() => null}
        isRunning={false}
      />,
    );
    expect(countDownComponentHoursColumn.exists()).toBe(true);
  });
});

describe('CountDown Container', () => {
  it('should set up the logic for CountDown Component', () => {
    const countDownContainer = shallow(<CountDownContainer />);
    expect(countDownContainer.exists()).toBe(true);
  });
  it('should render 3 columns for CountDown Component', () => {
    const countDownContainer = mount(<CountDownContainer />);
    countDownContainer.mount();
    expect(countDownContainer.children(CountDownColumn).length).toEqual(3);
  });
});

describe('CountDown Lap Threshold Component', () => {
  it('should render Lap Threshold component for the CountDown Timer', () => {
    const lapThrehsoldComponent = shallow(<LapThreshold />);
    expect(lapThrehsoldComponent.exists()).toBe(true);
  });

  it('should set up the Lap Threshold for the CountDown Timer', () => {
    const lapThrehsoldComponent = mount(<LapThreshold open={true} />);
    lapThrehsoldComponent.mount();
    lapThrehsoldComponent.find('input').simulate('change', {
      target: { value: 40000 },
    });
    expect(lapThrehsoldComponent.find('input').props().value).toEqual(40000);
  });
});

describe('Instructions Component', () => {
  it('should render Instructions component for the CountDown', () => {
    const instructionsComponent = shallow(<Instructions />);
    expect(instructionsComponent.exists()).toBe(true);
  });
});
