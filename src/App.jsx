// README: Copie este componente para o seu projeto React (p.ex. criado com Vite) em src/App.jsx
// Substitua os placeholders [SEU_NOME], [LINKEDIN], [GITHUB], [EMAIL] e adicione seus projetos no array `projects`.

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Database, Settings } from 'lucide-react'

export default function PortfolioApp() {
  const name = '[SEU_NOME]'
  const title = 'SQL • Bancos de Dados • Automação'
  const linkedin = 'https://linkedin.com/in/seu-link'
  const github = 'https://github.com/seu-usuario'
  const email = 'seuemail@exemplo.com'

  const skills = [
    'SQL (MySQL, SQL Server, SQLite)',
    'Otimização de consultas e indices',
    'Modelagem relacional e performance',
    'Automação de processos (scripts)',
    'Aprendizado: Java, C#',
    'Git / Versionamento'
  ]

  const experiences = [
    {
      role: 'Estagiário / Analista Jr. (ex.)',
      company: 'Empresa X',
      period: '2023 - 2024',
      bullets: [
        'Identificação e resolução de problemas em tempo real para manutenção da operação',
        'Criação e otimização de consultas SQL para relatórios e processos automatizados',
        'Apoio na automação de rotinas internas'
      ]
    }
  ]

  const projects = [
    // Preencha com projetos reais quando tiver: {
    //   name: 'Otimização SQL - exemplo',
    //   desc: 'Redução de tempo de execução de consulta em X% usando índices e reescrita',
    //   link: 'https://github.com/seu-usuario/projeto'
    // }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <header className="p-6 md:p-10 bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
              <p className="mt-1 opacity-90">{title}</p>
            </div>
            <div className="flex items-center gap-3">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-90">
                <Github />
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-90">
                <Linkedin />
              </a>
              <a href={`mailto:${email}`} aria-label="Email" className="hover:opacity-90">
                <Mail />
              </a>
            </div>
          </div>
        </header>

        <main className="p-6 md:p-10">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.05}} className="md:col-span-2">
              <h2 className="text-xl font-semibold">👋 Sobre mim</h2>
              <p className="mt-2 text-slate-700">Sou estudante com experiência prática adquirida em estágios e empregos, com foco em <strong>SQL</strong>, bancos de dados relacionais e automação de processos. Tenho facilidade para identificar e resolver problemas em tempo real e otimizar consultas para reduzir o uso de recursos e melhorar performance.</p>

              <div className="mt-6">
                <h3 className="font-medium">⚙️ Habilidades em destaque</h3>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {skills.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-slate-700">
                      <Database className="opacity-70" size={16} />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="font-medium">💼 Experiências</h3>
                <div className="mt-3 space-y-4">
                  {experiences.map((e) => (
                    <div key={e.company} className="p-4 rounded-xl border border-slate-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{e.role}</div>
                          <div className="text-sm text-slate-500">{e.company} • {e.period}</div>
                        </div>
                      </div>
                      <ul className="mt-2 list-disc list-inside text-slate-700">
                        {e.bullets.map((b, i) => (<li key={i}>{b}</li>))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.aside initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-semibold flex items-center gap-2">🔧 Rápido</h3>
              <p className="mt-2 text-slate-700 text-sm">Se quiser, posso adicionar exemplos de consultas SQL otimizadas e scripts de automação ao repositório. Ideal para demonstrar resultados concretos (antes/depois).</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium">Projetos</h4>
                <p className="text-sm text-slate-600 mt-1">Nenhum projeto público ainda — adicioneam quando estiver pronto.</p>

                <div className="mt-4">
                  <h4 className="text-sm font-medium">Contato</h4>
                  <div className="mt-2 flex flex-col gap-2 text-sm">
                    <a className="flex items-center gap-2" href={github} target="_blank" rel="noreferrer"><Github size={16}/> {github.replace(/^https?:\/\//, '')}</a>
                    <a className="flex items-center gap-2" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> {linkedin.replace(/^https?:\/\//, '')}</a>
                    <a className="flex items-center gap-2" href={`mailto:${email}`}><Mail size={16}/> {email}</a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </section>

          <section className="mt-8">
            <motion.h3 initial={{opacity:0}} animate={{opacity:1}} className="font-semibold">🚀 Em Desenvolvimento</motion.h3>
            <motion.ul initial={{opacity:0, y:6}} animate={{opacity:1, y:0}} transition={{delay:0.05}} className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
              <li className="flex items-start gap-2"><Settings size={16}/> Otimização avançada de consultas SQL</li>
              <li className="flex items-start gap-2"><Settings size={16}/> Modelagem de dados e boas práticas de performance</li>
              <li className="flex items-start gap-2"><Settings size={16}/> Automação de processos com scripts</li>
              <li className="flex items-start gap-2"><Settings size={16}/> Aprendizado em Java e C#</li>
            </motion.ul>
          </section>

          <section className="mt-8">
            <h3 className="font-semibold">📂 Projetos (futuros)</h3>
            <p className="mt-2 text-slate-600">Quando estiver pronto, adicione exemplos práticos com links para consultas, notebooks, ou repositórios separados.</p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.length === 0 ? (
                <div className="p-6 rounded-xl border border-dashed border-slate-200 text-slate-600">Nenhum projeto público ainda — use este espaço para mostrar análises, consultas otimizadas e automações com antes/depois.</div>
              ) : projects.map((p) => (
                <div key={p.name} className="p-4 rounded-xl border border-slate-100">
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-slate-600 mt-1">{p.desc}</div>
                  {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="text-sm mt-2 inline-block">Ver código →</a>}
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 text-center text-sm text-slate-600">
          <div className="max-w-4xl mx-auto">Feito com foco em aprendizado e resultados • Atualize este site adicionando projetos e consultas SQL</div>
        </footer>
      </div>
    </div>
  )
}
