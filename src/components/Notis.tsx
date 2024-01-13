import { Callout } from 'nextra/components'

export const Notis = (props: {
  type: 'note' | 'hint' | 'caution' | 'error',
  children: React.ReactNode
}) => {
  const { type = 'note', children } = props

  switch (type) {
    case 'note': return <Callout type="info" emoji="💁">{children}</Callout>
    case 'hint': return <Callout emoji="💡">{children}</Callout>
    case 'caution': return <Callout type="warning" emoji="⚠️">{children}</Callout>
    case 'error': return <Callout type="error" emoji="️🚫">{children}</Callout>
  }
}
