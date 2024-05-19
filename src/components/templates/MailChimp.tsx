/* eslint-disable import/no-extraneous-dependencies */
import { useFormFields, useMailChimpForm } from 'use-mailchimp-form'
import { Button, Container, Text, TextInput } from '@mantine/core'

import cn from '@/utils/cn'

const MailChimp = () => {
  const url =
    'https://rga.us9.list-manage.com/subscribe/post?u=edb8efdab33d9d8abfdfb4e68&amp;id=b254349d5c&amp;f_id=007317e0f0'

  const { loading, error, success, message, handleSubmit } = useMailChimpForm(url)
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: '',
  })

  return (
    <Container className={cn('dn-mailchimp-form', 'py-10 lg:pt-15 w-screen lg:w-fit')}>
      <form
        onSubmit={event => {
          event.preventDefault()
          handleSubmit(fields)
        }}
      >
        <div className={cn('flex flex-col lg:flex-row', 'gap-4 lg:gap-2 h-8', 'lg:w-[400px]')}>
          <TextInput
            id="EMAIL"
            autoFocus
            type="email"
            value={fields.EMAIL}
            onChange={handleFieldChange}
            placeholder="Your email"
            className="h-[48px] w-full"
          />
          <Button
            type="submit"
            className={cn('w-[120px] text-black', {
              'animate-pulse': loading,
            })}
            disabled={loading}
          >
            Submit
          </Button>
        </div>
      </form>
      {error && <Text className="error mt-1 text-[11px] text-red-400">{message}</Text>}
      {success && <Text className="success mt-1 text-[11px] text-black">{success}</Text>}
    </Container>
  )
}

export { MailChimp }
