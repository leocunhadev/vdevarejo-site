import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Monitor, Calendar, Users as UsersIcon, MessageSquare } from "lucide-react";
import { Link } from "wouter";

export default function ComoFunciona() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mais do que cursos.
                <br />
                <span className="text-primary">Um ecossistema completo de transformação.</span>
              </h1>
              <p className="text-lg md:text-xl">
                O VdeVAREJO é uma plataforma integrada que combina aprendizado online, eventos presenciais, comunidade exclusiva e mentorias para garantir que a transformação do seu varejo aconteça de verdade.
              </p>
            </div>
          </div>
        </section>

        {/* O ECOSSISTEMA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Os 3 Componentes do Ecossistema VdeVAREJO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<Card className="border-2 hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">1. Eventos Presenciais</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Saia do operacional e entre no estratégico.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Imersões e workshops regionais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Networking de alto nível com outros varejistas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Aprendizado experiencial (hands-on)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Acesso a especialistas e líderes do mercado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <UsersIcon size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">2. Comunidade Exclusiva</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Você não está mais sozinho.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Fórum privado para troca de experiências</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Sessões de peer mentoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Grupos de estudo por região/setor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Suporte contínuo da equipe VdeVAREJO</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MessageSquare size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">3. Mentorias e Acompanhamento</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Garantia de que a transformação vai acontecer.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Sessões de hotseat em grupo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Acompanhamento de implementação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Suporte via WhatsApp/E-mail</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm">Mentorias individuais (upgrade disponível 2º sem/2026)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* A JORNADA */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sua Jornada de Transformação
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Mês 1 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="w-1 flex-1 bg-primary/30 mt-2"></div>
                </div>
                <Card className="flex-1 bg-background mb-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Mês 1: Onboarding</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Boas-vindas e acesso à plataforma</li>
                      <li>• Evento ao vivo com os fundadores</li>
                      <li>• Primeiros módulos (V de Vida)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Mês 2-3 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    2-3
                  </div>
                  <div className="w-1 flex-1 bg-primary/30 mt-2"></div>
                </div>
                <Card className="flex-1 bg-background mb-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Mês 2-3: Fundação</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• V de Valor e V de Vitrine</li>
                      <li>• Primeira sessão de mentoria em grupo</li>
                      <li>• Entrada na comunidade exclusiva</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Mês 4-6 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    4-6
                  </div>
                  <div className="w-1 flex-1 bg-primary/30 mt-2"></div>
                </div>
                <Card className="flex-1 bg-background mb-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Mês 4-6: Crescimento</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• V de Venda, V de Volume, V de Vínculo</li>
                      <li>• Primeiro evento presencial regional</li>
                      <li>• Implementação de ferramentas no seu negócio</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Mês 7-9 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    7-9
                  </div>
                  <div className="w-1 flex-1 bg-primary/30 mt-2"></div>
                </div>
                <Card className="flex-1 bg-background mb-6">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Mês 7-9: Liderança</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• V de Visão</li>
                      <li>• Masterclass com especialistas convidados</li>
                      <li>• Casos de sucesso compartilhados na comunidade</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Mês 10-12 */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    10-12
                  </div>
                </div>
                <Card className="flex-1 bg-background">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">Mês 10-12: Consolidação</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Integração dos 7 Vs</li>
                      <li>• Planejamento estratégico anual</li>
                      <li>• Acesso a mentorias individuais (upgrade disponível)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar sua jornada de transformação?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Seja um dos 500 fundadores e tenha acesso completo ao ecossistema VdeVAREJO com 20% de desconto permanente.
            </p>
            <Link href="/fundador">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                QUERO SER UM FUNDADOR (20% OFF)
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
