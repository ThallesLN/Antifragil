# Landing Page Antifrágil - Documentação

## Visão Geral
Landing page desenvolvida para o Treinamento Antifrágil, seguindo as especificações fornecidas e usando como referência de estilização o site do Eike Batista e conteúdo do site Antifrágil.

## Estrutura da Landing Page

### 1. Seção Hero
- Logo colorida do Antifrágil
- Título principal com destaque para "Elson Sousa", "20 empresas bilionárias" e "6 IPO's"
- Subtítulo explicativo
- Botão CTA "QUERO SER ANTIFRÁGIL!"
- **Espaço reservado para foto do palestrante** (fundo transparente)

### 2. Faixa Rolante
- Logo preta do Antifrágil em movimento horizontal
- Animação contínua com múltiplas logos

### 3. Seção Treinamento Antifrágil
- Título da seção
- **Espaço reservado para vídeo** com player integrado no site

### 4. Seção "Resultados que você pode esperar"
- 5 cards com ícones e títulos
- Estilização baseada no site do Eike Batista
- Layout responsivo em grid

### 5. Seção "Método C.I.M.: Estratégias Exclusivas e Comprovadas"
- 3 cards principais: Capacidade, Identidade, Merecimento
- **Espaços reservados para imagens** em cada card
- Estilização similar ao site do Eike Batista
- Gradiente de fundo

### 6. Seção de Depoimentos
- **Espaço para player do YouTube**
- **Carrossel horizontal com 4 espaços para imagens**
- Seção "DEIXA EU TE ENTREGAR ESSA CHAVE!" com conteúdo completo

### 7. Seção "CONHEÇA O SEU TREINADOR ELSON SOUSA"
- Informações completas sobre Elson Sousa
- **Espaço reservado para foto do treinador**
- Layout em duas colunas

### 8. Seção "PERGUNTAS FREQUENTES"
- 8 perguntas com sistema de accordion funcional
- Estilização baseada no site do Eike Batista
- Animações suaves de abertura/fechamento

### 9. Seção "Ainda tenho dúvidas"
- Texto explicativo
- Botão "FALAR COM SUPORTE"

### 10. Footer
- Logo colorida do Antifrágil
- Copyright

## Características Técnicas

### Design e Estilização
- **Paleta de cores moderna**: Preto, cinza, dourado/âmbar (evitando contraste forte amarelo/azul)
- **Tipografia**: Fontes sans-serif modernas com hierarquia clara
- **Layout responsivo**: Funciona em desktop e mobile
- **Animações**: Faixa rolante, hover effects, transições suaves
- **Gradientes**: Utilizados nas seções principais para criar profundidade

### Tecnologias Utilizadas
- React 18
- Tailwind CSS
- Lucide Icons
- Framer Motion (para animações)
- shadcn/ui (componentes)

### Funcionalidades Implementadas
- ✅ FAQ com accordion funcional
- ✅ Faixa rolante animada
- ✅ Design responsivo
- ✅ Hover effects nos cards
- ✅ Transições suaves
- ✅ Botões com efeitos visuais

## Espaços Reservados para Conteúdo

### Imagens/Vídeos a serem adicionados:
1. **Foto do palestrante** (seção hero) - fundo transparente
2. **Vídeo do treinamento** (seção treinamento)
3. **3 imagens para o Método C.I.M.** (uma para cada dimensão)
4. **Vídeo do YouTube** (seção depoimentos)
5. **4 imagens para carrossel** (seção depoimentos)
6. **Foto do Elson Sousa** (seção treinador)

## Como Executar

### Desenvolvimento
```bash
cd antifragil-landing
npm run dev --host
```
Acesse: http://localhost:5173

### Build para Produção
```bash
npm run build
```

## Estrutura de Arquivos
```
antifragil-landing/
├── src/
│   ├── assets/
│   │   ├── LOGOANTIFRÁGIL.png
│   │   └── LOGOANTIFRÁGILPRETA.png
│   ├── App.jsx (componente principal)
│   ├── App.css (estilos personalizados)
│   └── ...
├── public/
├── package.json
└── README.md
```

## Observações Importantes

1. **Todos os espaços para imagens e vídeos estão claramente marcados** com placeholders visuais
2. **O design segue fielmente as especificações** fornecidas
3. **A estilização é baseada no site do Eike Batista** conforme solicitado
4. **O conteúdo é do site Antifrágil** conforme especificado
5. **A paleta de cores é moderna** e evita o contraste forte amarelo/azul
6. **A página é totalmente responsiva** e funciona em todos os dispositivos

## Próximos Passos

1. Adicionar as imagens e vídeos nos espaços reservados
2. Configurar links dos botões CTA
3. Integrar com sistema de contato/suporte
4. Deploy em produção

A landing page está pronta para receber o conteúdo visual e ser colocada em produção!

