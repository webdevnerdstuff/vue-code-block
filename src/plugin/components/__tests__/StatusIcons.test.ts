import StatusIcons from '../StatusIcons.vue';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';


describe('StatusIcons Component', () => {

	it('should mount the copy icon', () => {
		const wrapper = mount(StatusIcons, {
			props: { icon: 'copy' }
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('should mount the success icon', () => {
		const wrapper = mount(StatusIcons, {
			props: { icon: 'success' }
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	it('should mount the failed icon', () => {
		const wrapper = mount(StatusIcons, {
			props: { icon: 'failed' }
		});

		expect(wrapper.html()).toMatchSnapshot();
	});
});
