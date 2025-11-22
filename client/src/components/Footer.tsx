import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <img 
              src="/logo-footer.png" 
              alt="VdeVAREJO" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-muted-foreground">
              Transformando o varejo brasileiro através da metodologia dos 7 Vs.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-sm hover:text-primary transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/sobre">
                  <span className="text-sm hover:text-primary transition-colors cursor-pointer">
                    Sobre Nós
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/metodologia">
                  <span className="text-sm hover:text-primary transition-colors cursor-pointer">
                    A Metodologia
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/como-funciona">
                  <span className="text-sm hover:text-primary transition-colors cursor-pointer">
                    Como Funciona
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/cases">
                  <span className="text-sm hover:text-primary transition-colors cursor-pointer">
                    Cases de Sucesso
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <span className="text-sm hover:text-primary transition-colors cursor-pointer">
                    Contato
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-primary" />
                <a href="mailto:contato@vdevarejo.com.br" className="hover:text-primary transition-colors">
                  contato@vdevarejo.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-primary" />
                <a href="tel:+5511999999999" className="hover:text-primary transition-colors">
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/vdevarejo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://linkedin.com/company/vdevarejo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 VdeVAREJO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
