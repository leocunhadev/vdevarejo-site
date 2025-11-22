import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, AlertCircle } from "lucide-react";
import { toast } from "sonner";

export default function Fundador() {
  const handleCTA = () => {
    toast.info("Funcionalidade em breve! Entre em contato pelo WhatsApp ou email para garantir sua vaga.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg mb-6 animate-pulse">
                OFERTA LIMITADA: 500 VAGAS
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Seja um dos 500 Primeiros do VdeVAREJO.
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Oferta exclusiva e limitada. <strong className="text-primary">20% de desconto vitalício em todos os nossos programas</strong> + benefícios VIP. Transforme seu varejo e construa um legado de sucesso.
              </p>
              <div className="flex items-center justify-center gap-2 text-lg">
                <Clock size={24} className="text-primary" />
                <p className="font-semibold">Oferta válida até 30 de Novembro ou até esgotar as vagas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ RECEBE */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O que você recebe ao se tornar um dos 500 Primeiros
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Acesso Vitalício à Plataforma</h3>
                        <p className="text-sm text-muted-foreground">
                          Todos os módulos dos 7 Vs do Varejo disponíveis 24/7
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Ferramentas Prontas para Usar</h3>
                        <p className="text-sm text-muted-foreground">
                          Templates, planilhas e checklists aplicáveis no dia seguinte
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Comunidade Exclusiva</h3>
                        <p className="text-sm text-muted-foreground">
                          Networking com centenas de outros varejistas de sucesso
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Eventos Presenciais</h3>
                        <p className="text-sm text-muted-foreground">
                          Pelo menos 2 eventos regionais por ano
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Mentorias em Grupo</h3>
                        <p className="text-sm text-muted-foreground">
                          Sessões de hotseat para resolver seus desafios específicos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-1">Atualizações Contínuas</h3>
                        <p className="text-sm text-muted-foreground">
                          Novos conteúdos e ferramentas sem custo adicional
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-4 border-primary">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold mb-4 text-center text-primary">
                    Benefícios Exclusivos dos 500 Primeiros
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">20% de desconto vitalício</p>
                        <p className="text-sm text-muted-foreground">Em todos os programas VdeVAREJO</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Selo de Pioneiro</p>
                        <p className="text-sm text-muted-foreground">Reconhecimento na comunidade</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Acesso antecipado</p>
                        <p className="text-sm text-muted-foreground">Novos conteúdos antes de todos</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Prioridade em eventos</p>
                        <p className="text-sm text-muted-foreground">Vagas garantidas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">2 sessões extras de mentoria</p>
                        <p className="text-sm text-muted-foreground">Acompanhamento personalizado</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-bold">Kit de ferramentas físico</p>
                        <p className="text-sm text-muted-foreground">Planilhas, guias e brindes</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-primary bg-background">
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <Shield size={64} className="text-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">
                      Garantia Incondicional de 30 Dias
                    </h2>
                  </div>
                  <p className="text-lg text-center text-muted-foreground mb-6">
                    Nós assumimos todo o risco. Você tem 30 dias para testar tudo: plataforma, conteúdo, comunidade, eventos. Se por qualquer motivo você não ficar satisfeito, basta enviar um e-mail e devolvemos 100% do seu investimento.
                  </p>
                  <p className="text-center font-bold">
                    Sem perguntas, sem burocracia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "Isso funciona para o meu tipo de varejo?",
                  a: "Sim. A metodologia dos 7 Vs foi desenhada para qualquer tipo de varejo, mas é especialmente poderosa para varejistas do setor alimentar, que é nosso foco inicial."
                },
                {
                  q: "Eu não tenho tempo para fazer cursos online.",
                  a: "Nós entendemos. Por isso, nosso conteúdo é direto ao ponto (vídeos de 10-15 min) e as ferramentas são prontas para usar. Você aplica no dia seguinte."
                },
                {
                  q: "Já fiz outros cursos e não funcionou.",
                  a: "A diferença do VdeVAREJO é o acompanhamento. Você não está sozinho. Temos comunidade, mentoria e eventos para garantir que você implemente."
                },
                {
                  q: "Qual o investimento?",
                  a: "Entre em contato conosco para conhecer as condições especiais para os 500 primeiros. O desconto de 20% vitalício em todos os programas é exclusivo para quem entrar agora."
                },
                {
                  q: "Como funciona a garantia?",
                  a: "Simples. Você tem 30 dias para testar tudo. Se não gostar, devolvemos 100% do valor. Sem perguntas, sem burocracia."
                }
              ].map((faq, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold mb-2">{faq.q}</h3>
                        <p className="text-sm text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O futuro do seu varejo começa agora.
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Não deixe seu negócio morrer na próxima geração. Junte-se aos 500 primeiros e construa um legado de sucesso.
            </p>
            <Button size="lg" className="text-xl px-12 py-8 font-bold mb-6" onClick={handleCTA}>
              QUERO ESSA TRANSFORMAÇÃO
            </Button>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Clock size={20} className="text-primary" />
                <p>Oferta válida até 30 de Novembro ou até esgotar as 500 vagas.</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield size={20} className="text-primary" />
                <p>Garantia de 30 dias. Sem perguntas, sem burocracia.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
