/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import { useFormFields, useMailChimpForm } from 'use-mailchimp-form'
import { Button, Text, TextInput, Title } from '@mantine/core'

import cn from '@/utils/cn'

import MicroDetail from '@/atoms/microDetail/MicroDetail'
import CheckboxForm from '@/molecules/checkbox/Checkbox'

export function Form() {
  const REGISTER_FORM_URL =
    'https://rga.us9.list-manage.com/subscribe/post?u=edb8efdab33d9d8abfdfb4e68&amp;id=b254349d5c&amp;f_id=007317e0f0'

  const { loading, error, success, message, handleSubmit } = useMailChimpForm(REGISTER_FORM_URL)
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: '',
    FNAME: '',
    LNAME: '',
    BUSINESS: '',
    JOB_TITLE: '',
  })

  // Not using useFormFields because it only map e.target.value
  // checkbox need e.target.checked
  const [subscribe, setSubscribe] = useState<boolean | undefined>(true)

  return (
    <div className="col-span-12 lg:col-span-6">
      <form
        onSubmit={event => {
          event.preventDefault()
          handleSubmit({
            EMAIL: fields.EMAIL,
            FNAME: fields.FNAME,
            LNAME: fields.LNAME,
            MMERGE9: fields.BUSINESS,
            // MMERGE10: fields.INDUSTRY,
            MMERGE7: fields.JOB_TITLE,
          })
        }}
      >
        <div className={cn('flex flex-col gap-5', 'lg:w-[438px]')}>
          <TextInput
            id="FNAME"
            label="FIRST NAME"
            required
            type="text"
            value={fields.FNAME}
            onChange={handleFieldChange}
            placeholder="Your first name"
          />
          <TextInput
            id="LNAME"
            label="LAST NAME"
            required
            type="text"
            value={fields.LNAME}
            onChange={handleFieldChange}
            placeholder="Your last name"
          />
          <TextInput
            id="EMAIL"
            label="EMAIL"
            type="email"
            required
            value={fields.EMAIL}
            onChange={handleFieldChange}
            placeholder="Your email"
          />

          <TextInput
            id="JOB_TITLE"
            label="JOB TITLE"
            type="text"
            value={fields.JOB_TITLE}
            onChange={handleFieldChange}
            placeholder="Your role"
          />

          <TextInput
            id="BUSINESS"
            label="ORGANISATION"
            type="text"
            value={fields.BUSINESS}
            onChange={handleFieldChange}
            placeholder="Your employer"
          />

          <CheckboxForm
            id="SUBSCRIBE"
            checked={subscribe}
            setChecked={setSubscribe}
            label={`I'd like to opt in for email updates from R/GA`}
          />

          <Button
            type="submit"
            className={cn(
              'w-full lg:h-[50px] bg-accents-cyan hover:bg-accents-cyan/50 !text-black hover:!text-black text-body',
              {
                'animate-bounce duration-1000': loading,
                'cursor-loading': loading,
                'cursor-not-allowed': !subscribe,
              },
            )}
            disabled={loading || !subscribe}
            radius="md"
          >
            Register
          </Button>
        </div>
      </form>
      {error && <Text className="error text-body text-red-400 first-letter:mt-1">{message}</Text>}
      {success && <Text className="success text-blue mt-1 text-body">{message}</Text>}
    </div>
  )
}
export default function RegisterForm() {
  return (
    <div className="dn-register-form grid w-full grid-cols-12 border-t-[1px]  border-t-neutrals-cool-gray pt-4 lg:pt-5">
      <div className="dn-register-form__left col-span-12 lg:col-span-4">
        <Title order={2}>
          We’ll be releasing chapters of our report over the coming weeks: sign up now to be the first to access it when
          it drops.
        </Title>
      </div>
      <div className="lg:col-span-1"></div>
      <Form />
      <div className="col-span-6 mt-[20.4px] lg:col-span-4 lg:mt-[120px]">
        <MicroDetail text="opt in to get the latest thought leadership from R/GA" />
      </div>
    </div>
  )
}
