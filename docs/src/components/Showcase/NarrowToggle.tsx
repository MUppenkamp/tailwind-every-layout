import ActionToggle from './ActionToggle'
import Mobile from '../icons/Mobile'
import type { ActionToggleProps } from './ActionToggle'

export default function HighContrastToggle({
  actionClassNames,
  setActionClassNames,
}: ActionToggleProps) {
  return (
    <ActionToggle
      actionClassName="is-2/5!"
      Icon={Mobile}
      label="Narrow"
      {...{ actionClassNames, setActionClassNames }}
    />
  )
}
