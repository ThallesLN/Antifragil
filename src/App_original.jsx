import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, Play, Users, Target, TrendingUp, Heart, Handshake, Brain, Star, CheckCircle, User, Calendar, MapPin, Award, Car, Users2, AlertTriangle, Utensils, Moon, Sun } from 'lucide-react'
import logoColorida from './assets/LOGOANTIFR├üGIL.png'
import logoPreta from './assets/LOGOANTIFR├üGILPRETA.png'
import grupoAntifragil from './assets/grupo-antifragil.jpg'
import './App.css'

function App() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const resultados = [
    {
      icon: <Brain className="w-12 h-12 text-amber-500" />,
      title: "Desenvolva uma mentalidade antifrágil"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-amber-500" />,
      title: "Desperte seu potencial máximo para uma vida próspera"
    },
    {
      icon: <Target className="w-12 h-12 text-amber-500" />,
      title: "Veja as adversidades como oportunidades de crescimento"
    },
    {
      icon: <Heart className="w-12 h-12 text-amber-500" />,
      title: "Construa relações saudáveis pessoais, familiares e profissionais"
    },
    {
      icon: <Handshake className="w-12 h-12 text-amber-500" />,
      title: "Receba orientações para implementar o que aprendeu no Treinamento e obter Resultados duradouros"
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
            <img src={logoColorida} alt="Antifrágil" className="h-16 w-auto" />
            <div className="text-center mb-16">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 leading-tight text-center">
                Muitas pessoas sabem o que fazer e como fazer para mudar seus resultados, <span className="text-amber-500 font-medium">mas ainda assim se sentem bloqueadas.</span> Em dois dias de imersão profunda, você vai descobrir <span className="text-amber-500 font-medium">como superar essas barreiras e liberar o que há de melhor em você.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light mb-8 text-justify">
                Descubra o que lhe impede de enfrentar e superar suas limitações de uma vez por todas
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
                      <div className="text-lg font-semibold text-white">07 A 08 DE DEZEMBRO</div>
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
              <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-amber-400/20 backdrop-blur-sm">
                GARANTA SUA VAGA!
              </Button>
              <div className="flex items-center gap-2 text-amber-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">VAGAS LIMITADAS</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {/* Espaço para foto do palestrante */}
            <div className={`w-80 md:w-96 h-80 md:h-96 backdrop-blur-sm rounded-2xl border flex items-center justify-center ${
              'bg-slate-800/50 border-slate-600/30'
            }`}>
              <div className="text-center text-gray-400">
                <User className="w-24 h-24 mx-auto mb-4" />
                <p className="font-light">Espaço para foto do palestrante</p>
                <p className="text-sm text-gray-500">(fundo transparente)</p>
              </div>
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
            {/* Espaço para vídeo */}
            <div className="aspect-video rounded-2xl border shadow-lg flex items-center justify-center bg-white border-slate-200">
              <div className="text-center text-slate-500">
                <Play className="w-24 h-24 mx-auto mb-4 text-amber-500" />
                <p className="text-xl font-light">Espaço para vídeo do treinamento</p>
                <p className="text-sm text-slate-400">Player integrado no site</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <h2 className={`text-4xl lg:text-5xl font-light mb-8 ${
              'text-slate-800'
            }`}>RESULTADOS QUE VOCÊ PODE ESPERAR</h2>
            <p className={`text-xl max-w-4xl mx-auto font-light ${
              'text-slate-600'
            }`}>
              Este treinamento é para quem deseja <span className="text-amber-500 font-medium">escalar o seu negócio
              de forma sustentável e consciente...</span> para quem quer ser <span className="text-amber-500 font-medium">líder
              do seu mercado.</span>
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            {/* Primeiras 3 caixas */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {resultados.slice(0, 3).map((resultado, index) => (
                <div key={index} className={`p-8 rounded-2xl border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  'bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200'
                }`}>
                  <div className="mb-6 flex justify-center">
                    {resultado.icon}
                  </div>
                  <h3 className={`text-lg font-medium ${
                    'text-slate-800'
                  }`}>{resultado.title}</h3>
                </div>
              ))}
            </div>
            {/* Últimas 2 caixas centralizadas */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
                {resultados.slice(3).map((resultado, index) => (
                  <div key={index + 3} className={`p-8 rounded-2xl border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                    'bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200'
                  }`}>
                    <div className="mb-6 flex justify-center">
                      {resultado.icon}
                    </div>
                    <h3 className={`text-lg font-medium ${
                      'text-slate-800'
                    }`}>{resultado.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Método C.I.M. Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-slate-800 to-gray-900">
        <div className="container mx-auto px-6">
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
                {/* Espaço para imagem */}
                <div className={`w-full h-48 rounded-2xl border shadow-sm flex items-center justify-center ${
                  'bg-white border-slate-200'
                }`}>
                  <div className={`text-center ${
                    'text-slate-400'
                  }`}>
                    <div className={`w-16 h-16 rounded-xl mx-auto mb-2 ${
                      'bg-slate-100'
                    }`}></div>
                    <p className="text-sm font-light">Espaço para imagem</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-amber-500 font-medium mb-8">
              Prepare-se para uma experiência incrível que te ajudará a superar todos os obstáculos no caminho do seu crescimento pessoal e profissional.
            </p>
            <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white text-lg px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-amber-400/20 backdrop-blur-sm">
              GARANTA SUA VAGA!
            </Button>
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
          {/* Vídeo do YouTube */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="aspect-video rounded-2xl border shadow-lg flex items-center justify-center bg-white border-slate-200">
              <div className="text-center text-slate-500">
                <Play className="w-24 h-24 mx-auto mb-4 text-amber-500" />
                <p className="text-xl font-light">Player do YouTube</p>
                <p className="text-sm text-slate-400">Vídeo de depoimentos</p>
              </div>
            </div>
          </div>

          {/* Carrossel de Imagens */}
          <div className="mb-16">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`flex-shrink-0 w-64 h-48 rounded-2xl border shadow-sm flex items-center justify-center ${
                  'bg-white border-slate-200'
                }`}>
                  <div className={`text-center ${
                    'text-slate-400'
                  }`}>
                    <div className={`w-16 h-16 rounded-xl mx-auto mb-2 ${
                      'bg-slate-100'
                    }`}></div>
                    <p className="text-sm font-light">Imagem {i}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEIXA EU TE ENTREGAR ESSA CHAVE */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-light text-amber-500 mb-8">
              DEIXA EU TE ENTREGAR ESSA CHAVE!
            </h3>
            <div className="space-y-6 text-lg font-light text-justify text-slate-600">
              <p className="font-medium text-slate-800">
                Não é esforço e nem força de vontade que vai fazer você mudar o jogo da sua vida.
              </p>
              <p>
                Talvez você possa estar andando em círculos sem sair do lugar, tentando várias formas sem achar uma saída para suas dificuldades.
              </p>
              <p>
                O que você faria se eu te dissesse que existe uma maneira de enfrentar e se fortalecer diante desses desafios? É exatamente isso que o Treinamento vai te oferecer!
              </p>
              <p>
                O ANTIFRÁGIL é uma imersão intensiva e profunda de dois dias que irá revolucionar sua mentalidade para enfrentar as pressões da vida. <span className="text-amber-500 font-medium">Você vai aprender e vivenciar ferramentas e estratégias comprovadas para se adaptar, crescer e prosperar em momentos de crises e incertezas.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conheça o Treinador Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-gray-300 mb-4 font-light">CONHEÇA O SEU TREINADOR</h2>
                <h3 className="text-4xl lg:text-5xl font-light text-amber-400">ELSON SOUSA</h3>
              </div>
              <div className="space-y-6 text-lg text-gray-300 font-light">
                <p>
                  Empresário do segmento financeiro, especialista em finanças comportamentais, palestrante, hipnoterapeuta e treinador de inteligência emocional. Ao longo de 8 anos tem transformado a vida de centenas de pessoas. Com sua expertise e carisma, possui uma abordagem única, capaz de inspirar e motivar indivíduos a alcançarem seu máximo potencial.
                </p>
                <p>
                  Elson construiu a metodologia capaz de ajudar você a superar desafios, conquistar metas e trilhar o caminho da antifragilidade para o sucesso!
                </p>
                <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:via-orange-600 hover:to-amber-700 text-white text-lg px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-amber-400/20 backdrop-blur-sm">
                  GARANTA SUA VAGA!
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center lg:justify-end">
              {/* Espaço para foto do treinador */}
              <div className="w-96 h-96 backdrop-blur-sm rounded-2xl border flex items-center justify-center bg-slate-700/50 border-slate-600/30">
                <div className="text-center text-gray-400">
                  <User className="w-24 h-24 mx-auto mb-4" />
                  <p className="font-light">Foto do Elson Sousa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-100 to-slate-50">
        <div className="container mx-auto px-6">
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
          <Button className="bg-gradient-to-r from-slate-600 via-gray-700 to-slate-800 hover:from-slate-700 hover:via-gray-800 hover:to-slate-900 text-white text-lg px-10 py-5 rounded-2xl font-semibold shadow-2xl hover:shadow-slate-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-slate-400/20 backdrop-blur-sm">
            FALAR COM SUPORTE
          </Button>
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

