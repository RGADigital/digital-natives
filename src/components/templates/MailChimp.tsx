/* eslint-disable import/no-extraneous-dependencies */
import { useFormFields, useMailChimpForm } from 'use-mailchimp-form'

const MailChimp = () => {
  const url =
    'https://rga.us9.list-manage.com/subscribe/post?u=edb8efdab33d9d8abfdfb4e68&amp;id=b254349d5c&amp;f_id=007317e0f0'

  const { loading, error, success, message, handleSubmit } = useMailChimpForm(url)
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: 'sam.brunno@rga.com',
  })
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()
          handleSubmit(fields)
        }}
      >
        <input id="EMAIL" autoFocus type="email" value={'sam.brunno@rga.com'} onChange={handleFieldChange} />
        <button>submit</button>
      </form>
      {loading && 'submitting'}
      {error && message}
      {success && message}
    </div>
  )
}

export { MailChimp }
