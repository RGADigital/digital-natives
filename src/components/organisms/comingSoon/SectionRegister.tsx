import SectionTemplate from '@/components/templates/Section'
import RegisterForm from '@/organisms/form/RegisterForm'

export default function SectionRegister() {
  return (
    <SectionTemplate mode="light" className="mt-[57px] lg:mt-[120px] lg:pb-0">
      <RegisterForm />
    </SectionTemplate>
  )
}
