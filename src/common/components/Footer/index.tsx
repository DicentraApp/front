import { FC } from 'react'
import LogoContent, { ILogoContentProps } from './components/LogoContent'
import FooterNavigation, {
  IFooterNavProps,
} from './components/FooterNavigation'
import FooterInput from './components/FooterInput'
import FooterCopy from './components/FooterCopy'

interface IFooterProps {
  logoContentData: ILogoContentProps
  navForClients: IFooterNavProps
  navForCompany: IFooterNavProps
}

const Footer: FC<IFooterProps> = ({
  logoContentData,
  navForClients,
  navForCompany,
}) => {
  return (
    <footer className="bg-selection-form text-light py-12 font-roboto">
      <div className="container">
        <div className="flex justify-between">
          <LogoContent {...logoContentData} />

          <FooterNavigation {...navForClients} />
          <FooterNavigation {...navForCompany} />

          <FooterInput />
        </div>
        <FooterCopy />
      </div>
    </footer>
  )
}

export default Footer
