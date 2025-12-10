import React from 'react';
import { Facebook, Instagram, Twitter, LayoutTemplate } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 text-white p-1.5 rounded-lg">
                <LayoutTemplate size={20} />
              </div>
              <span className="font-display font-bold text-xl text-gray-900">
                Criar<span className="text-brand-600">Ofertas</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              A plataforma líder para criação de material promocional no varejo brasileiro.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-600 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Produto</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-600">Templates</a></li>
              <li><a href="#" className="hover:text-brand-600">Funcionalidades</a></li>
              <li><a href="#" className="hover:text-brand-600">Preços</a></li>
              <li><a href="#" className="hover:text-brand-600">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-600">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-600">Carreiras</a></li>
              <li><a href="#" className="hover:text-brand-600">Blog</a></li>
              <li><a href="#" className="hover:text-brand-600">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-600">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-600">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-600">Cookies</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} CriarOfertas. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito com ❤️ para o varejo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;