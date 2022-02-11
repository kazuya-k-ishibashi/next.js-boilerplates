import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IndexPage } from '.'

const metadata: ComponentMeta<typeof IndexPage> = {
  component: IndexPage,
  title: 'IndexPage',
}

const Template: ComponentStory<typeof IndexPage> = (args) => (
  <IndexPage {...args} />
)

export const Default = Template.bind({})

export const WithName = Template.bind({})
WithName.args = {
  name: 'Storybook',
}

export default metadata
