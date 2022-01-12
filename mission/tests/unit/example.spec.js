import { mount } from '@vue/test-utils';
import Mission from '@/components/Mission.vue';

describe('Mission2.vue', () => {
  const wrapper = mount(Mission);

  it('renders text input', () => {
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
  });

  it('renders submit button', () => {
    expect(wrapper.find('button[type="button"]').exists()).toBe(true);
  });

  it('has paragraph element', () => {
    expect(wrapper.find('p[data-test="inputText"]').exists()).toBe(true);
  });

  it('displays text from text input', async () => {
    const testText = 'hello from test code';
    await wrapper.get('input[type="text"]').setValue(testText);

    expect(wrapper.get('p[data-test="inputText"]').text()).toEqual(testText);
  });

  it('rotates text to left one at a time per button click', async () => {
    const testText = 'I am rotating!';
    const resultText = ' am rotating!I'.trim();

    await wrapper.get('input[type="text"]').setValue(testText);
    await wrapper.get('button[type="button"]').trigger('click');

    expect(wrapper.get('p[data-test="inputText"]').text()).toBe(resultText);
  });

  it('shows alert with text and click counter', async () => {
    jest.spyOn(window, 'alert').mockImplementation(() => { });
    const testText = 'Text shown on alert!';

    await wrapper.get('input[type="text"]').setValue(testText);
    await wrapper.get('button[type="button"][data-test="clickCounter"]').trigger('click');
    await wrapper.get('button[type="button"][data-test="clickCounter"]').trigger('click');

    expect(window.alert).toBeCalledWith(`${testText} 2`);
  });
});
