import Button from './index.vue'

export default {
  title: 'Components/Button',
  component: { Button },
  argTypes: {
    text: {
      type: 'string'
    }
  }
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `
    <Button v-bind="args" />
  `
})

export const Primary = Template.bind({})
Primary.args = {
  text: 'Button Stories'
}