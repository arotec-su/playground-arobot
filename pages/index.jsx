import HomeStyle from '@/styles/modules/home.module.css'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import Image from 'next/image'
import HowWorks from '@/components/pages/home/HowWorks'
import LogoAP from '@/components/ui/LogoAP'

import { useState } from 'react'

import HwImage1 from '../public/images/hw-1.jpeg';
import HwImage2 from '../public/images/hw-2.jpeg';

export default function Home() {

  const [showNavbarLinks, setShowNavbarLinks] = useState(false);

  return (

    <>

      {/* Header */}
      <header className={HomeStyle.header}>

        {/* Cover */}
        <div className={HomeStyle.headerCover}>
          <img className={HomeStyle.headerCoverImage} src="/images/arobot-7.jpg" alt='' />
          <div className={HomeStyle.headerGradient}></div>
        </div>

        <div className={HomeStyle.headerContainer + ' ' + HomeStyle.areaContainer}>

          {/* Navbar */}
          <div className={HomeStyle.navbar}>

            <Link href={'/'}><LogoAP /></Link>
            <div className={HomeStyle.navbarRight}>
              <div type="button" className={HomeStyle.navbarLinks + ' ' + (showNavbarLinks ? HomeStyle.navbarLinksShow : '')}
              >
                <Link className={HomeStyle.headerLink} href={'/playground'}>Playground</Link>
                <Link className={HomeStyle.headerLink} href={'/#arobot'}>Conheça AROBOT</Link>
              </div>
              <button type='button' className={HomeStyle.menuButton} onClick={() => {
                setShowNavbarLinks(!showNavbarLinks);
              }}>
                <Image src='/icons/menu.png' width='20' height='20' alt='icon' />
              </button>
            </div>
          </div>

          {/* Header Content */}
          <div className={HomeStyle.headerContent}>

            <div className={HomeStyle.headerAreaImage}>
              <Image className={HomeStyle.headerImage} src={'/images/arobot.png'} alt='' width='500' height='400' />
            </div>

            <div className={HomeStyle.headerAreaText}>
              <div>
                <div className={HomeStyle.textHeader}>
                  Aproveite os nossos recursos online, e teste agora o <span>AROBOT</span> sem precisar de equipamento ou venha fazer seus testes
                  seus códigos e projectos em linguagem de programação com ARO-CODE.
                  Viva a experiência <span className={HomeStyle.textHeaderMark}>sem custo algum</span>
                  .</div>
                <div className={HomeStyle.headerBututons}>
                  <div className={HomeStyle.shadowHeaderButton}>
                    <Link href="/playground"><Button color="primary">Veja AROBOT</Button></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </header>

      {/* Main Content */}
      <div>
        {/* How Works */}
        <div className={HomeStyle.areaContainer + ' ' + HomeStyle.hwSection}>
          <div className={HomeStyle.hwTitleSection}>Como Funciona?</div>
          <div className={HomeStyle.hwStepsContainer}>
            <HowWorks title="Crie suas etapas e instruções" image={HwImage1}>
              Para começares um projeto no playground, começa por adicionar
              blocos ao teu projeto através dos menus na barra lateral
              esquerda. Estes blocos são os elementos fundamentais do
              playground, pois definem a sequência de comportamentos que
              o teu AROBOT deve realizar durante a execução. Podes personalizar
              cada bloco ao alterar os seus valores, como no caso de "mover x passos",
              onde x é um valor que podes ajustar conforme necessário. Além disso, é
              fácil movimentar ou remover um bloco para personalizares o teu projeto da
              melhor maneira possível.
            </HowWorks>

            <HowWorks title="Execute e vê o resultado" image={HwImage2}>
              Depois de organizares a ordem dos teus blocos conforme desejado, executa
              o teu projeto para verificar o resultado, identificar possíveis erros
              e encontrar oportunidades de melhoria. Demonstra às tuas amizades
              o teu talento ao programar um AROBOT desde o início.
            </HowWorks>
          </div>
        </div>

        {/* AROBOT Section */}
        <div id="arobot" className={HomeStyle.arobotSection}>
          <div className={HomeStyle.areaContainer}>
            <div className={HomeStyle.arobotSectionTitle}>O que é o AROBOT afinal</div>
            <div className={HomeStyle.arobotSectionContent}>
              O AROBOT é um kit de robô educacional projetado para crianças aprenderem sobre robótica e programação. O kit inclui uma variedade de componentes, incluindo motores, sensores, controladores e outras peças eletrônicas que permitem que as crianças construam e programem seu próprio robô. Com esse principal foco o
              AROBOTPlayground te permitirá viver dessa mesma experiência sem a necessidade de possuir um AROBOT em si,
              como também serve como uma ferramenta para auxiliar quem por exemplo não  possui um kit de robótica.
            </div>

            <div className={HomeStyle.arobotSectionImagesContainer}>
              <Image src="/images/arobot-4.jpg" className={HomeStyle.arobotSectionImage} height={250} width={250} alt='' />
              <Image src="/images/arobot-5.jpg" className={HomeStyle.arobotSectionImage} height={250} width={250} alt='' />
              <Image src="/images/arobot-6.jpg" className={HomeStyle.arobotSectionImage} height={250} width={250} alt='' />
            </div>
          </div>

        </div>


      </div>

      {/*Footer */}

      <footer className={HomeStyle.footer}>
        <div className={HomeStyle.areaContainer}>
          <div className={HomeStyle.footerContent}>
            <div>@arobotplayground</div>
            <div className={HomeStyle.footerRight}>

              <Link href='/#'>Ínicio</Link>
              <Link href='/playground'>Playground</Link>
              <Link href='/documentacao'>Documentação</Link>
              <Link href='https://arotec.ao' target="_blank">AROTEC</Link>
            </div>
          </div>
        </div>

      </footer>
    </>

  )
}
