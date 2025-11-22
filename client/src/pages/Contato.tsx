import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    tipoVarejo: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cidade: "",
      tipoVarejo: "",
      mensagem: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para virar o jogo?
              </h1>
              <p className="text-lg md:text-xl">
                Fale com um de nossos especialistas e entenda como o VdeVAREJO pode transformar a sua realidade.
              </p>
            </div>
          </div>
        </section>

        {/* FORMULÁRIO E INFORMAÇÕES */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Formulário */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                      Telefone/WhatsApp *
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="cidade" className="block text-sm font-medium mb-2">
                      Cidade/Estado *
                    </label>
                    <Input
                      id="cidade"
                      name="cidade"
                      type="text"
                      required
                      value={formData.cidade}
                      onChange={handleChange}
                      placeholder="Sua cidade, UF"
                    />
                  </div>

                  <div>
                    <label htmlFor="tipoVarejo" className="block text-sm font-medium mb-2">
                      Tipo de Varejo *
                    </label>
                    <Input
                      id="tipoVarejo"
                      name="tipoVarejo"
                      type="text"
                      required
                      value={formData.tipoVarejo}
                      onChange={handleChange}
                      placeholder="Ex: Supermercado, Mercearia, Padaria..."
                    />
                  </div>

                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      value={formData.mensagem}
                      onChange={handleChange}
                      placeholder="Conte-nos um pouco sobre seu negócio e seus desafios..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full font-bold">
                    ENVIAR MENSAGEM
                  </Button>
                </form>
              </div>

              {/* Informações de Contato */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Informações de Contato</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Mail size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">E-mail</h3>
                          <a 
                            href="mailto:contato@vdevarejo.com.br" 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            contato@vdevarejo.com.br
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Phone size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Telefone/WhatsApp</h3>
                          <a 
                            href="tel:+5511999999999" 
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            (11) 99999-9999
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <MapPin size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-1">Endereço</h3>
                          <p className="text-muted-foreground">
                            CHUA Distribuidora
                            <br />
                            Minas Gerais / Espírito Santo
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold mb-4">Redes Sociais</h3>
                      <div className="flex gap-4">
                        <a 
                          href="https://instagram.com/vdevarejo" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                          aria-label="Instagram"
                        >
                          <Instagram size={24} className="text-primary" />
                        </a>
                        <a 
                          href="https://linkedin.com/company/vdevarejo" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={24} className="text-primary" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ou garanta sua vaga de fundador agora mesmo
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Não perca a oportunidade de fazer parte dos 500 fundadores com 20% de desconto permanente.
            </p>
            <a href="/fundador">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                QUERO SER UM FUNDADOR (20% OFF)
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
