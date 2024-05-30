import { Checkbox } from '@mantine/core'

import Checked from '@/components/atoms/icon/Checked'

interface Props {
  id: string
  checked?: boolean
  label?: string
  setChecked: (checked?: boolean) => void
}

export default function CheckboxForm({ id, checked, label, setChecked }: Readonly<Props>) {
  return (
    <Checkbox
      id={id}
      checked={checked}
      label={label}
      onChange={event => {
        setChecked(event?.currentTarget?.checked)
      }}
      radius="0px"
      autoContrast={false}
      icon={() => checked && <Checked className="absolute inset-0" onClick={() => setChecked(!checked)} />}
      classNames={{
        label: 'text-body text-black',
        labelWrapper: 'w-full',
        root: 'dn-form-checkbox w-full',
        body: 'w-inherit flex items-center',
      }}
    />
  )
}
