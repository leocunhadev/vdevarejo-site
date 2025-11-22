import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  Eye, 
  DollarSign, 
  Target, 
  Heart 
} from "lucide-react";
import { Link } from "wouter";

export default function Metodologia() {
  const vsDoVarejo = [
    {
      numero: 1,
      titulo: "V de VIDA",
      subtitulo: "Gestão de Pessoas e Sucessão Familiar",
      icon: Users,
      descricao: "O primeiro V reconhece que o varejo é, antes de tudo, um negócio de pessoas. Aqui você aprende a preparar a sucessão familiar, construir uma cultura organizacional forte e reter talentos."
    },
    {
      numero: 2,
      titulo: "V de VOLUME",
      subtitulo: "Estratégias de Crescimento e Escala",
      icon: TrendingUp,
      descricao: "O V de Volume trata do crescimento sustentável. Como expandir sem perder a essência? Como diversificar de forma inteligente?"
    },
    {
      numero: 3,
      titulo: "V de VENDA",
      subtitulo: "Técnicas de Vendas e Conversão",
      icon: ShoppingCart,
      descricao: "O V de Venda foca na arte e na ciência de vender mais e melhor. Técnicas de vendas, atendimento de excelência e conversão."
    },
    {
      numero: 4,
      titulo: "V de VITRINE",
      subtitulo: "Merchandising e Experiência Visual",
      icon: Eye,
      descricao: "O V de Vitrine trata da experiência visual e sensorial do cliente. Merchandising, layout, vitrine, iluminação — tudo que influencia a decisão de compra."
    },
    {
      numero: 5,
      titulo: "V de VALOR",
      subtitulo: "Precificação e Gestão Financeira",
      icon: DollarSign,
      descricao: "O V de Valor trata da gestão financeira do varejo. Precificação, margem, markup e rentabilidade. É o V que garante que o negócio seja sustentável."
    },
    {
      numero: 6,
      titulo: "V de VISÃO",
      subtitulo: "Estratégia, Posicionamento e Branding",
      icon: Target,
      descricao: "O V de Visão trata da estratégia de longo prazo, do posicionamento de mercado e da construção de marca. É o V que tira você do operacional e coloca no estratégico."
    },
    {
      numero: 7,
      titulo: "V de VÍNCULO",
      subtitulo: "Relacionamento e Fidelização de Clientes",
      icon: Heart,
      descricao: "O V de Vínculo trata do relacionamento de longo prazo com o cliente. Transformar compradores em clientes fiéis e clientes fiéis em embaixadores da marca."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Os 7 Vs do Varejo:
                <br />
                <span className="text-primary">O framework que transforma negócios obsoletos em legados de sucesso.</span>
              </h1>
              <p className="text-lg md:text-xl">
                Metodologia proprietária desenvolvida por Amir Faria, Douglas Oliveira e Daniellen Zwierzynski. Uma abordagem completa pensada em áreas essenciais como sucessão familiar, marketing, gestão, inteligência emocional, precificação, estratégia e relacionamento com clientes.
              </p>
            </div>
          </div>
        </section>

        {/* FILOSOFIA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                V de Varejo = V de Vida = V de Volume = V de Venda
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Esta equação não é apenas um jogo de palavras. É uma declaração de princípios que guia toda a nossa abordagem:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">V de Vida</h3>
                    <p className="text-sm text-muted-foreground">
                      O varejo é feito de gente. Pessoas são o coração do negócio, não apenas números.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">V de Volume</h3>
                    <p className="text-sm text-muted-foreground">
                      O crescimento sustentável vem da multiplicação de impactos positivos, não apenas de transações.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">V de Venda</h3>
                    <p className="text-sm text-muted-foreground">
                      O resultado final é consequência de uma gestão humanizada e estratégica, não um fim em si mesmo.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* OS 7 Vs */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Conheça cada um dos 7 Vs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vsDoVarejo.map((v, index) => {
                const Icon = v.icon;
                return (
                  <Card key={index} className="bg-background hover:border-primary transition-all">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon size={32} className="text-primary" />
                        </div>
                        <div className="text-3xl font-bold text-primary">{v.numero}</div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{v.titulo}</h3>
                      <p className="text-sm font-semibold text-primary mb-3">{v.subtitulo}</p>
                      <p className="text-sm text-muted-foreground">{v.descricao}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* ÁREAS DE ATUAÇÃO */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Uma metodologia pensada para todas as frentes do seu negócio
              </h2>
              <p className="text-lg text-center text-muted-foreground mb-12">
                Os 7 Vs cobrem todas as áreas críticas do varejo, garantindo uma transformação completa e sustentável.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  "Sucessão Familiar",
                  "Marketing",
                  "Gestão de Pessoas",
                  "Inteligência Emocional",
                  "Precificação",
                  "Estratégia",
                  "Relacionamento com Clientes",
                  "Gestão Financeira",
                  "Branding"
                ].map((area, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="pt-6 text-center">
                      <p className="font-semibold">{area}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para dominar os 7 Vs do Varejo?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Seja um dos 500 primeiros e tenha acesso completo à metodologia que vai transformar seu negócio.
            </p>
            <Link href="/fundador">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                QUERO ESSA TRANSFORMAÇÃO
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
