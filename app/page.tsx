export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar" id="navbar">
        <div className="container navbar-inner">
          <a href="#" className="logo">
            <span className="logo-icon">☁</span>
            <span className="logo-text">Init<span className="logo-accent">Cloud</span></span>
          </a>
          <ul className="nav-links" id="nav-links">
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#como-funciona">Como Funciona</a></li>
            <li><a href="#por-que">Por Que Nós</a></li>
            <li><a href="#contato" className="btn btn-nav">Fale Conosco</a></li>
          </ul>
          <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Abrir menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero" id="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <p className="hero-badge">Parceiro certificado AWS · GCP · Azure</p>
            <h1>Seu negócio na nuvem,<br/><span className="hero-highlight">do jeito certo.</span></h1>
            <p className="hero-subtitle">
              Cuidamos da tecnologia para que você foque no que importa: crescer. 
              Da criação de aplicações web à administração completa da sua infraestrutura 
              em nuvem — com clareza, sem complicação.
            </p>
            <div className="hero-cta">
              <a href="#contato" className="btn btn-primary btn-lg">Quero saber mais</a>
              <a href="#servicos" className="btn btn-outline btn-lg">Ver serviços</a>
            </div>
            <div className="hero-trust">
              <div className="trust-logos">
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                  <span>+50 projetos entregues</span>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
                  <span>99.9% uptime garantido</span>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <span>Suporte em até 2h</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="card-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="card-title">deploy.sh</span>
              </div>
              <div className="hero-card-body">
                <code>
                  <span className="code-comment"># Simples assim.</span><br/>
                  <span className="code-prompt">$</span> initcloud deploy --env production<br/>
                  <br/>
                  <span className="code-success">✓</span> Infraestrutura provisionada<br/>
                  <span className="code-success">✓</span> Pipeline configurado<br/>
                  <span className="code-success">✓</span> Aplicação no ar<br/>
                  <span className="code-success">✓</span> Monitoramento ativo<br/>
                  <br/>
                  <span className="code-info">→ Tudo pronto. Sem surpresas.</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CLOUD PROVIDERS */}
      <section className="providers">
        <div className="container">
          <p className="providers-label">Experiência comprovada com os maiores provedores de nuvem do mundo</p>
          <div className="providers-grid">
            <div className="provider-card">
              <svg viewBox="0 0 100 60" className="provider-svg">
                <text x="50" y="38" textAnchor="middle" fontSize="16" fontWeight="700" fill="currentColor">AWS</text>
              </svg>
              <span>Amazon Web Services</span>
            </div>
            <div className="provider-card">
              <svg viewBox="0 0 100 60" className="provider-svg">
                <text x="50" y="38" textAnchor="middle" fontSize="14" fontWeight="700" fill="currentColor">Google</text>
              </svg>
              <span>Google Cloud Platform</span>
            </div>
            <div className="provider-card">
              <svg viewBox="0 0 100 60" className="provider-svg">
                <text x="50" y="38" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor">Azure</text>
              </svg>
              <span>Microsoft Azure</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="services" id="servicos">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Nossos Serviços</p>
            <h2>Tudo o que seu negócio precisa<br/>para operar na nuvem.</h2>
            <p className="section-desc">Não importa se você está começando do zero ou quer melhorar o que já existe — a gente resolve.</p>
          </div>
          <div className="services-grid">

            <div className="service-card" id="svc-apps">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
                </svg>
              </div>
              <h3>Desenvolvimento de Aplicações Web</h3>
              <p>Criamos aplicações modernas, rápidas e seguras — do planejamento ao deploy. Sistemas que funcionam e que seus clientes vão adorar usar.</p>
            </div>

            <div className="service-card" id="svc-admin">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                </svg>
              </div>
              <h3>Administração de Contas Cloud</h3>
              <p>Gerenciamos seus ambientes na nuvem com segurança, organização e controle de custos. Você foca no negócio, a gente cuida da infraestrutura.</p>
            </div>

            <div className="service-card" id="svc-scale">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/>
                </svg>
              </div>
              <h3>Escalabilidade sob Demanda</h3>
              <p>Preparamos sua infraestrutura para crescer junto com você. Mais acessos, mais dados, mais vendas — sem travar, sem cair.</p>
            </div>

            <div className="service-card" id="svc-modern">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/>
                </svg>
              </div>
              <h3>Modernização de Processos</h3>
              <p>Transformamos processos manuais e antigos em fluxos automatizados e inteligentes. Menos retrabalho, mais eficiência no dia a dia.</p>
            </div>

            <div className="service-card" id="svc-pipeline">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/>
                </svg>
              </div>
              <h3>Pipelines de Entrega (CI/CD)</h3>
              <p>Criamos e mantemos pipelines que levam seu código do desenvolvimento ao ar de forma automática, segura e sem dor de cabeça.</p>
            </div>

            <div className="service-card" id="svc-serverless">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/>
                </svg>
              </div>
              <h3>Projetos Serverless</h3>
              <p>Desenvolvemos soluções sem servidor — você paga só pelo que usa. Ideal para APIs, automações e aplicações que precisam escalar sem complicação.</p>
            </div>

          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how-it-works" id="como-funciona">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Como Funciona</p>
            <h2>Do primeiro contato ao resultado.<br/>Simples e direto.</h2>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">01</div>
              <h3>Conversa Inicial</h3>
              <p>Entendemos o momento do seu negócio, seus objetivos e suas dores. Sem jargão técnico — só uma conversa honesta.</p>
            </div>
            <div className="step-connector">
              <svg width="40" height="24" viewBox="0 0 40 24"><path d="M0 12h36m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <div className="step-card">
              <div className="step-number">02</div>
              <h3>Diagnóstico e Proposta</h3>
              <p>Mapeamos o que precisa ser feito e apresentamos um plano claro, com prazos, custos e o que você pode esperar de resultado.</p>
            </div>
            <div className="step-connector">
              <svg width="40" height="24" viewBox="0 0 40 24"><path d="M0 12h36m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <div className="step-card">
              <div className="step-number">03</div>
              <h3>Execução e Entrega</h3>
              <p>Colocamos a mão na massa com transparência total. Atualizações frequentes e entregas que você consegue acompanhar.</p>
            </div>
            <div className="step-connector">
              <svg width="40" height="24" viewBox="0 0 40 24"><path d="M0 12h36m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </div>
            <div className="step-card">
              <div className="step-number">04</div>
              <h3>Suporte Contínuo</h3>
              <p>Não desaparecemos depois da entrega. Monitoramos, ajustamos e estamos sempre disponíveis quando você precisar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE NÓS */}
      <section className="why-us" id="por-que">
        <div className="container">
          <div className="why-us-inner">
            <div className="why-us-content">
              <p className="section-tag">Por Que a InitCloud</p>
              <h2>O parceiro certo faz<br/>toda a diferença.</h2>
              <p className="section-desc">A gente não vende tecnologia pela tecnologia. Cada projeto é pensado para resolver um problema real do seu negócio.</p>
              <ul className="why-list">
                <li>
                  <div className="why-check">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
                  </div>
                  <div>
                    <strong>Comunicação clara</strong>
                    <span>Explicamos tudo em linguagem que faz sentido, sem termos técnicos desnecessários.</span>
                  </div>
                </li>
                <li>
                  <div className="why-check">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
                  </div>
                  <div>
                    <strong>Multi-cloud de verdade</strong>
                    <span>Dominamos AWS, GCP e Azure. Escolhemos a melhor plataforma para cada caso — sem viés.</span>
                  </div>
                </li>
                <li>
                  <div className="why-check">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
                  </div>
                  <div>
                    <strong>Foco em resultado</strong>
                    <span>Não entregamos só código — entregamos soluções que impactam seu faturamento e eficiência.</span>
                  </div>
                </li>
                <li>
                  <div className="why-check">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
                  </div>
                  <div>
                    <strong>Transparência total</strong>
                    <span>Você sabe exatamente o que está sendo feito, quanto custa e quando fica pronto.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="why-us-visual">
              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projetos Entregues</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">99.9%</span>
                  <span className="stat-label">Uptime Garantido</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Clouds Dominadas</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">2h</span>
                  <span className="stat-label">Tempo de Resposta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contato">
        <div className="container">
          <div className="cta-card">
            <h2>Pronto para levar seu negócio<br/>para a nuvem?</h2>
            <p>Vamos conversar sobre o que podemos fazer pelo seu negócio. Sem compromisso, sem jargão técnico — só uma conversa franca sobre como a nuvem pode te ajudar a crescer.</p>
            <div className="cta-actions">
              <a href="https://wa.me/5500000000000" className="btn btn-primary btn-lg" id="cta-whatsapp">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chamar no WhatsApp
              </a>
              <a href="mailto:contato@initcloud.com.br" className="btn btn-outline-light btn-lg" id="cta-email">Enviar E-mail</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <a href="#" className="logo">
                <span className="logo-icon">☁</span>
                <span className="logo-text">Init<span className="logo-accent">Cloud</span></span>
              </a>
              <p>Serviços em nuvem sob medida para empresas que querem crescer com segurança e simplicidade.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Navegação</h4>
                <a href="#servicos">Serviços</a>
                <a href="#como-funciona">Como Funciona</a>
                <a href="#por-que">Por Que Nós</a>
                <a href="#contato">Contato</a>
              </div>
              <div className="footer-col">
                <h4>Serviços</h4>
                <a href="#svc-apps">Aplicações Web</a>
                <a href="#svc-admin">Administração Cloud</a>
                <a href="#svc-pipeline">Pipelines CI/CD</a>
                <a href="#svc-serverless">Serverless</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 InitCloud. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
