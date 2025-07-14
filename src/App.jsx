import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel.jsx'
import { ChevronDown, Play, Users, Target, TrendingUp, Heart, Handshake, Brain, Star, CheckCircle, User, Calendar, MapPin, Award, Car, Users2, AlertTriangle, Utensils, Moon, Sun } from 'lucide-react'
import { FaSquareInstagram } from 'react-icons/fa'
import logoColorida from './assets/LOGOANTIFR├üGIL.png'
import logoPreta from './assets/LOGOANTIFR├üGILPRETA.png'
import grupoAntifragil from './assets/grupo-antifragil.jpg'
import palestranteImg from './assets/palestrante.png'
import elsonImg from './assets/elson.png'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/7.png'
import fundoFolhas from './assets/fundo-de-folhas-verdes-tropicais.svg'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const resultados = [
    {
      icon: <Brain className="w-12 h-12 text-amber-500" />,
      title: "Quebra de padrões limitantes inconscientes, que te sabotam nos seus resultados pessoais e profissionais",
      step: "01"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-amber-500" />,
      title: "Clareza e direção para fazer seu dinheiro multiplicar com inteligência emocional",
      step: "02"
    },
    {
      icon: <Target className="w-12 h-12 text-amber-500" />,
      title: "Reconexão com seus valores e propósito de vida",
      step: "03"
    },
    {
      icon: <Heart className="w-12 h-12 text-amber-500" />,
      title: "Espaço seguro para desbloquear seu potencial em família, nos negócios e no amor",
      step: "04"
    },
    {
      icon: <Handshake className="w-12 h-12 text-amber-500" />,
      title: "Técnicas práticas para liderança, performance e gestão de emoções",
      step: "05"
    }
  ]

  const metodoCim = [
    {
      icon: <Users className="w-16 h-16 text-amber-500" />,
      title: "CAPACIDADE",
      description: "Aprenda \"como fazer\" para atingir seus objetivos através de vivências práticas que promovam autonomia e superação de desafios."
    },
    {
      icon: <User className="w-16 h-16 text-amber-500" />,
      title: "IDENTIDADE",
      description: "Fortaleça sua identidade interna para superar crenças limitantes e alinhar suas ações com sua verdadeira essência."
    },
    {
      icon: <Star className="w-16 h-16 text-amber-500" />,
      title: "MERECIMENTO",
      description: "Construa um propósito de vida significativo, conectando-se com seus valores e vivendo em harmonia com seus princípios."
    }
  ]

  const faqs = [
    {
      question: "Qual é o objetivo do Evento?",
      answer: "Possibilitar a construção de uma nova mentalidade através de técnicas e práticas de impacto emocional."
    },
    {
      question: "Quem pode participar do Treinamento",
      answer: "Recomendado para qualquer pessoa acima de 16 anos, exceto em casos específicos de condições médicas."
    },
    {
      question: "Qual o dia, hora e local do Evento?",
      answer: "O treinamento será realizado nos dia 07 e 08 de dezembro de 2024, Auditório da ABASE, na Rua Gilberto Amado, 276, Jardim Armação - Salvador - Bahia. Dia 07/12/2024 (sábado) - início às 08h e término às 20h. Dia 08/12/2024 (domingo) - início às 09h e término às 18h"
    },
    {
      question: "O Evento irá oferecer certificado?",
      answer: "Sim. Será fornecido Certificado de participação a todos os Treinandos que completarem a carga horária do treinamento."
    },
    {
      question: "O local do Evento possui Estacionamento?",
      answer: "Sim. O local possui estacionamento seguro para dar mais comodidade aos participantes."
    },
    {
      question: "Tem desconto para grupos?",
      answer: "Sim. Temos condições especiais para Famílias, Grupo de amigos e Corporativo. Converse com nosso suporte."
    },
    {
      question: "Existe alguma restrição?",
      answer: "Salientamos que pessoas com ESQUIZOFRENIA, TRANSTORNOS DE BIPOLARIDADE, SURTOS, CARDÍACOS, GESTANTES ou PROBLEMA DE SAÚDE PSICOSSOMÁTICOS, NÃO PODERÃO PARTICIPAR DO TREINAMENTO. Reforçamos essa informação pois, o treinamento possui forte impacto emocional."
    },
    {
      question: "Será oferecida alimentação?",
      answer: "Os custos de alimentação, hospedagem e logística não estão inclusos no valor do ingresso e são de total responsabilidade do Treinando."
    }
  ]

  return (
    <div className="min-h-screen font-['DM_Sans'] transition-all duration-500 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-orange-500/15 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-amber-400/8 rounded-full blur-2xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-orange-400/12 rounded-full blur-xl animate-pulse delay-3000"></div>
          
          {/* Gradient rays */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-amber-500/20 via-transparent to-transparent transform rotate-12"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-orange-500/15 via-transparent to-transparent transform -rotate-12"></div>
          
          {/* Sparkle effects */}
          <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-amber-300 rounded-full animate-ping delay-2000"></div>
          {/* Imagem do grupo sobreposta */}
          <img src={grupoAntifragil} alt="Grupo Antifrágil" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none select-none" style={{zIndex: 1}} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5"></div>
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <img src={logoColorida} alt="Antifrágil" className="h-16 lg:h-20 w-auto" />
            {/* Foto do palestrante - mobile: acima do texto, desktop: ao lado */}
            <div className="block lg:hidden w-80 h-80 sm:w-96 sm:h-96 mx-auto mb-6">
              <img
                src={palestranteImg}
                alt="Foto do palestrante"
                className="w-full h-full object-contain drop-shadow-xl"
                style={{ background: 'transparent' }}
              />
            </div>
            <div className="text-center lg:text-left mb-16">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-tight text-left">
                <span className="text-amber-500 font-medium">Parece que a vida tá pegando pesado com você?</span><br />
                São problemas que se repetem... relacionamentos desgastantes, grana travada, emocional no limite...<br />
                <span className="text-amber-500 font-medium">Se você sente que tá sempre sendo testado, não é sinal de fraqueza.</span><br />
                É a vida te chamando pra dar o próximo passo.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light mb-8 text-justify">
                É o seu convite pra se tornar <span className="text-amber-500 font-medium">Antifrágil</span> — alguém que não apenas resiste, mas cresce com tudo isso.
              </p>
              {/* Caixa única de informações do evento - realocada */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <div className="flex flex-col sm:flex-row items-center gap-6 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-semibold text-white">16 e 17 de AGOSTO</div>
                      <div className="text-sm text-gray-300">Salvador - BA</div>
                    </div>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-white/20 mx-4"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-semibold text-white">Imersão Presencial</div>
                      <div className="text-sm text-gray-300">+ Networking de Alto Impacto</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#elson-sousa">
                <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-amber-400/20 backdrop-blur-sm">
                  GARANTA SUA VAGA!
                </Button>
              </a>
              <div className="flex items-center gap-2 text-amber-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">VAGAS LIMITADAS</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="w-[600px] md:w-[750px] h-[600px] md:h-[750px] flex items-center justify-center bg-transparent">
              <img
                src={palestranteImg}
                alt="Foto do palestrante"
                className="w-full h-full object-contain drop-shadow-xl"
                style={{ background: 'transparent' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Rolling Banner */}
      <section className="py-6 border-y bg-slate-100 border-slate-200">
        <div className="overflow-hidden">
          <div className="flex animate-scroll-infinite">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex items-center space-x-12 mx-12 flex-shrink-0">
                <img src={logoPreta} alt="Antifrágil" className="h-8 w-auto opacity-60" />
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treinamento Antifrágil Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <h2 className="text-4xl lg:text-5xl font-light mb-8 text-slate-800">TREINAMENTO ANTIFRÁGIL</h2>
          </div>
          <div className="max-w-4xl mx-auto">
          {/* Vídeo do Treinamento Antifrágil */}
          <div className="aspect-video rounded-2xl border shadow-lg flex items-center justify-center bg-white border-slate-200 overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/g3ejC4TEyYk"
              title="Treinamento Antifrágil"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          </div>
        </div>
      </section>

      {/* Resultados Section - Timeline Vertical */}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <h2 className="text-4xl lg:text-5xl font-light mb-8 text-slate-800">
              RESULTADOS QUE VOCÊ PODE ESPERAR
            </h2>
            <p className="text-xl max-w-4xl mx-auto font-light text-slate-600">
              Este treinamento é para quem deseja <span className="text-amber-500 font-medium">escalar o seu negócio
              de forma sustentável e consciente...</span> para quem quer ser <span className="text-amber-500 font-medium">líder
              do seu mercado.</span>
            </p>
          </div>

          {/* Timeline Alternada Desktop */}
          <div className="hidden lg:block max-w-4xl mx-auto">
            <div className="relative">
              {/* Linha central da timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600 rounded-full"></div>
              <div className="space-y-16">
                {resultados.map((resultado, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Conector circular */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                    {/* Card do resultado */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}> 
                      <div className="relative">
                        {/* Linha conectora */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
                        {/* Card */}
                        <div className={`p-8 rounded-2xl border bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}> 
                          {/* Ícone */}
                          <div className="mb-6 flex justify-center">
                            {resultado.icon}
                          </div>
                          {/* Título completo */}
                          <h3 className="text-lg font-medium text-slate-800 text-center leading-relaxed">
                            {resultado.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline Vertical - Mobile */}
          <div className="lg:hidden max-w-2xl mx-auto">
            <div className="relative">
              {/* Linha vertical */}
              <div className="absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600 rounded-full"></div>
              <div className="space-y-8">
                {resultados.map((resultado, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Conector */}
                    <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full border-4 border-white shadow-lg z-10 mt-8"></div>
                    {/* Card */}
                    <div className="ml-8 flex-1">
                      <div className="p-6 rounded-2xl border bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200 hover:shadow-lg transition-all duration-300">
                        {/* Ícone */}
                        <div className="mb-4 flex justify-center">
                          {resultado.icon}
                        </div>
                        {/* Título completo */}
                        <h3 className="text-base font-medium text-slate-800 text-center leading-relaxed">
                          {resultado.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200">
              <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
              <span className="text-amber-700 font-medium">Esse não é um curso. É um recomeço.</span>
              <div className="w-4 h-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Método C.I.M. Section */}
      <section className="py-20 relative">
        {/* Fundo de folhas verdes */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src={fundoFolhas} alt="Folhas tropicais" className="w-full h-full object-cover object-center" style={{filter: 'brightness(1.05)'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900 opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <h2 className={`text-4xl lg:text-5xl font-light mb-8 ${
              'text-slate-800'
            }`}>
              Método C.I.M.: <br />
              <span className="text-amber-500 font-medium">Estratégias Exclusivas e Comprovadas</span>
            </h2>
            <p className={`text-xl max-w-4xl mx-auto font-light ${
              'text-slate-600'
            }`}>
              O método C.I.M. é a base metodológica do Treinamento o ANTIFRÁGIL. Ele possui 3 dimensões: Capacidade, Identidade e Merecimento.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {metodoCim.map((item, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="flex justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-medium text-amber-500">{item.title}</h3>
                <p className={`leading-relaxed font-light ${
                  'text-slate-600'
                }`}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Bloco de alerta - Se você NÃO estiver lá... */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-white border border-amber-200 rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-amber-500 mb-4 text-center tracking-tight">
                Se você <span className="text-amber-500 font-extrabold">NÃO</span> estiver lá…
              </h4>
              <ul className="space-y-3 text-lg font-light pl-0">
                <li className="flex items-start gap-3"><span className="mt-2 w-3 h-3 rounded-full bg-amber-500 inline-block flex-shrink-0"></span><span className="text-slate-700">Vai continuar lutando no escuro, sem saber o que realmente te trava.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-3 h-3 rounded-full bg-amber-500 inline-block flex-shrink-0"></span><span className="text-slate-700">Viver no automático, sufocado(a) pela rotina e pelas pressões.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-3 h-3 rounded-full bg-amber-500 inline-block flex-shrink-0"></span><span className="text-slate-700">Repetir os mesmos erros e colher os mesmos resultados frustrantes.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-3 h-3 rounded-full bg-amber-500 inline-block flex-shrink-0"></span><span className="text-slate-700">Perder a chance real de romper esse ciclo e crescer com consistência.</span></li>
                <li className="flex items-start gap-3"><span className="mt-2 w-3 h-3 rounded-full bg-amber-500 inline-block flex-shrink-0"></span><span className="text-slate-700">E seguir distante da vida leve, consciente e poderosa que merece viver.</span></li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-amber-500 font-medium mb-8">
              Prepare-se para uma experiência incrível que te ajudará a superar todos os obstáculos no caminho do seu crescimento pessoal e profissional.
            </p>
            <a href="#elson-sousa">
              <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white text-lg px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-amber-400/20 backdrop-blur-sm">
                GARANTA SUA VAGA!
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-8 text-amber-500">
              VEJA O DEPOIMENTO DE QUEM PARTICIPOU
            </h2>
          </div>
          {/* Vídeo do YouTube - Depoimento */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-video rounded-2xl border shadow-lg flex items-center justify-center bg-white border-slate-200 overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZrH6gvxAeO8?start=2"
                title="Depoimento de quem participou"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Carrossel de Imagens - shadcn */}
          <div className="mb-16 max-w-3xl mx-auto">
            <Carousel className="relative">
              <CarouselContent>
                {[img1, img2, img3, img4, img5, img6, img7].map((img, idx) => (
                  <CarouselItem key={idx} className="flex items-center justify-center">
                    <div className="w-full max-w-xl aspect-[16/9] bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                      <img
                        src={img}
                        alt={`Depoimento ${idx + 1}`}
                        className="w-full h-full object-contain object-center"
                        style={{ display: 'block', background: '#fff' }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-6 text-amber-500 hover:text-orange-600" />
              <CarouselNext className="-right-6 text-amber-500 hover:text-orange-600" />
            </Carousel>
          </div>

          {/* Depoimentos - Texto novo */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-light text-amber-500 mb-8">
              CENTENAS DE PESSOAS JÁ PASSARAM POR ESSA JORNADA. E hoje, elas relatam:
            </h3>
            <div className="space-y-4 text-xl font-light text-justify text-slate-600">
              <div>
                <div className="mb-2">Aumento exponencial da qualidade financeira em seus negócios</div>
                <div className="mb-2">Reconciliações familiares e relacionamentos transformados</div>
                <div className="mb-2">Transições de carreira seguras, prósperas e sem arrependimentos</div>
                <div className="mb-2">Segurança emocional em momentos difíceis</div>
                <div className="mb-2">Coragem para tomar decisões antes impensáveis</div>
              </div>
              <p className="mt-8">
                <span className="font-semibold text-amber-500">Essa não é só mais uma imersão.</span> É a oportunidade de virar o jogo de dentro pra fora. De parar de sobreviver e começar a viver com consciência, clareza e força emocional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conheça o Treinador Section */}
      <section id="elson-sousa" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-gray-300 mb-4 font-light">CONHEÇA O SEU TREINADOR</h2>
                <h3 className="text-4xl lg:text-5xl font-light text-amber-400 flex items-center gap-3">
                  ELSON SOUSA
                  <a
                    href="https://www.instagram.com/elsonsousaoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Elson Sousa"
                    className="inline-flex items-center text-amber-400 hover:text-pink-600 transition-colors duration-200"
                  >
                    <FaSquareInstagram className="w-9 h-9" />
                  </a>
                </h3>
              </div>
              <div className="space-y-6 text-lg text-gray-300 font-light">
                <p>
                  Empresário do segmento financeiro, especialista em finanças comportamentais, palestrante, hipnoterapeuta e treinador de inteligência emocional. Ao longo de 8 anos tem transformado a vida de centenas de pessoas. Com sua expertise e carisma, possui uma abordagem única, capaz de inspirar e motivar indivíduos a alcançarem seu máximo potencial.
                </p>
                <p>
                  Elson construiu a metodologia capaz de ajudar você a superar desafios, conquistar metas e trilhar o caminho da antifragilidade para o sucesso!
                </p>
                {/* Imagem do Elson - mobile: mostrar entre, desktop: mostrar ao lado */}
                <div className="block lg:hidden w-full flex justify-center">
                  <img src={elsonImg} alt="Elson Sousa" className="w-96 h-96 rounded-2xl object-cover object-center shadow-2xl mb-2" />
                </div>
                <a
                  href="https://wa.me/5571997068858"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white text-lg px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-amber-400/20 backdrop-blur-sm">
                    Quero ser antifrágil
                  </Button>
                </a>
              </div>
            </div>
            <div className="hidden lg:flex justify-center items-center lg:justify-end">
              {/* Foto real do Elson Sousa - sem caixa, maior */}
              <img src={elsonImg} alt="Elson Sousa" className="w-[520px] h-[520px] rounded-2xl object-cover object-center shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        {/* Fundo de folhas removido, apenas overlay de cor */}
        <div className="absolute inset-0 w-full h-full z-0 bg-slate-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <h2 className="text-4xl lg:text-5xl font-light text-amber-600">PERGUNTAS FREQUENTES</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className={`rounded-2xl border shadow-sm overflow-hidden ${
                'bg-white border-slate-200'
              }`}>
                <button
                  onClick={() => {
                    toggleFaq(index)
                    // Rolagem suave para a pergunta clicada após um pequeno delay
                    setTimeout(() => {
                      if (openFaq !== index) {
                        document.getElementById(`faq-${index}`)?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        })
                      }
                    }, 100)
                  }}
                  id={`faq-${index}`}
                  className={`w-full p-6 text-left flex justify-between items-center transition-all duration-300 rounded-2xl ${
                    'hover:bg-slate-50'
                  }`}
                >
                  <h3 className="text-lg font-medium text-amber-600">{faq.question}</h3>
                  <ChevronDown className={`w-6 h-6 text-amber-600 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6 flex items-center justify-start min-h-[100px]">
                    <p className={`leading-relaxed font-light text-left ${
                      'text-slate-600'
                    }`}>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ainda tenho dúvidas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-3xl lg:text-4xl font-light mb-8 ${
            'text-slate-800'
          }`}>Ainda tenho dúvidas</h2>
          <p className={`text-xl mb-8 max-w-2xl mx-auto font-light ${
            'text-slate-600'
          }`}>
            Nossa equipe está pronta para esclarecer todas as suas dúvidas sobre o Treinamento Antifrágil.
          </p>
          <a
            href="https://wa.me/5571997068858"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-slate-600 via-gray-700 to-slate-800 hover:from-slate-700 hover:via-gray-800 hover:to-slate-900 text-white text-lg px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-slate-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-slate-400/20 backdrop-blur-sm">
              FALAR COM SUPORTE
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <img src={logoColorida} alt="Antifrágil" className="h-16 w-auto mx-auto mb-6" />
          <p className="text-gray-400 font-light">© 2025 Antifrágil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

