import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import AiGenerator from './components/AiGenerator';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-brand-200 selection:text-brand-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <AiGenerator />
        <Pricing />
        
        {/* Testimonials Section inline for simplicity */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-16">
              Quem usa, recomenda
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Ricardo Silva", role: "Proprietário", company: "Supermercado Silva", text: "Antes eu gastava R$ 800 por mês com designer. Hoje faço tudo sozinho em 10 minutos." },
                { name: "Fernanda Lima", role: "Gerente", company: "Farmácia Central", text: "A qualidade dos templates é incrível. Meus encartes parecem feitos por uma agência grande." },
                { name: "Carlos Oliveira", role: "Dono", company: "Açougue do Carlão", text: "A função de WhatsApp mudou minhas vendas. Envio as ofertas toda segunda e o movimento aumentou." }
              ].map((t, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {"★★★★★".split("").map((star, idx) => <span key={idx}>{star}</span>)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-brand-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Preciso instalar algum programa?", a: "Não! O CriarOfertas é 100% online. Você acessa direto do seu navegador, seja no computador ou celular." },
                { q: "Posso cancelar quando quiser?", a: "Sim. Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento sem multas." },
                { q: "Consigo usar minha própria logo?", a: "Com certeza. Você pode fazer upload da sua logo e fotos de produtos próprios, ou usar nosso banco de imagens." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-brand-600">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para revolucionar seu marketing?
            </h2>
            <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de lojistas que estão vendendo mais com encartes profissionais.
            </p>
            <a 
              href="https://criarofertas.com.br"
              className="inline-block bg-white text-brand-600 font-bold py-4 px-12 rounded-full text-xl shadow-2xl hover:bg-gray-100 transition-all transform hover:-translate-y-1"
            >
              Começar Gratuitamente
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;