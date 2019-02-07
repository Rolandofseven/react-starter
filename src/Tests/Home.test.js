import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../Containers/Home';
import DataTable from '../Components/DataTable';

configure({adapter: new Adapter()});

describe('<Home />', () => {
    it('Should contain one occurrence of <DataTable /> ', () => {
        const wrapper = shallow(<Home/>);
        
        expect(wrapper.find(DataTable)).toHaveLength(1);
    })
})

describe('<Home />', () => {
    it('Initial counter value should be 0 ', () => {
        const wrapper = shallow(<Home/>);

        const instance = wrapper.instance();
        expect(wrapper.state('counter')).toBe(0);
        
    })
})

describe('<Home />', () => {
    it('Initial counter value should be 1 after increment ', () => {
        const wrapper = shallow(<Home/>);

        const instance = wrapper.instance();
        instance.incrementCounter();
        expect(wrapper.state('counter')).toBe(1);
    })
})

describe('<Home />', () => {
    it('Initial counter value should be 2 after 2 increments ', () => {
        const wrapper = shallow(<Home/>);

        const instance = wrapper.instance();
        instance.incrementCounter();
        instance.incrementCounter();
        expect(wrapper.state('counter')).toBe(2);
    })
})