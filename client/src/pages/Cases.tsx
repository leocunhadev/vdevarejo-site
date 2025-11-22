import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";
import { Link } from "wouter";

export default function Cases() {
  const cases = [
    {
      nome: "João Silva",
      cidade: "Governador Valadares, MG",
      tipo: "Supermercado Familiar",
      resultado: "Aumentei significativamente minha margem de lucro",
      depoimento: "O VdeVAREJO me ensinou a precificar corretamente. Eu achava que sabia, mas estava deixando dinheiro na mesa. Com as ferramentas e metodologia, consegui reorganizar toda a minha estrutura de custos e aumentar a margem sem perder competitividade."
    },
    {
      nome: "Maria Oliveira",
      cidade: "Vitória, ES",
      tipo: "Rede de Mercearias (3 lojas)",
      resultado: "Preparei meu filho(a) para assumir o negócio",
      depoimento: "Meu maior medo era passar o bastão e ver tudo desmoronar. O VdeVAREJO me deu um plano claro de sucessão. Hoje, meu filho(a) está preparado(a), motivado(a) e alinhado(a) com a visão da empresa. A transição está sendo tranquila."
    },
    {
      nome: "Carlos Mendes",
      cidade: "Belo Horizonte, MG",
      tipo: "Atacarejo",
      resultado: "Crescimento expressivo no faturamento",
      depoimento: "Eu estava estagnado há anos. O VdeVAREJO me mostrou oportunidades de expansão que eu nem imaginava. Abri uma segunda unidade e diversifiquei o mix de produtos. O resultado veio rápido."
    },
    {
      nome: "Ana Paula Costa",
      cidade: "Ipatinga, MG",
      tipo: "Varejo de Bairro",
      resultado: "Aumento significativo de clientes recorrentes",
      depoimento: "Eu vendia, mas não fidelizava. O VdeVAREJO me ensinou a criar um programa de fidelidade simples e eficaz. Hoje, a maioria dos meus clientes voltam regularmente. Isso mudou completamente o fluxo de caixa."
    },
    {
      nome: "Roberto Almeida",
      cidade: "Colatina, ES",
      tipo: "Supermercado Regional",
      resultado: "Aumento expressivo em vendas por impulso",
      depoimento: "Nunca dei importância ao visual da loja. Achava que era 'frescura'. O VdeVAREJO me provou o contrário. Reorganizei o layout, melhorei a iluminação e as vendas por impulso dispararam."
    },
    {
      nome: "Fernanda Souza",
      cidade: "Caratinga, MG",
      tipo: "Padaria e Confeitaria",
      resultado: "Posicionamento claro e reconhecimento no mercado",
      depoimento: "Eu era 'mais uma padaria'. O VdeVAREJO me ajudou a definir um posicionamento único e comunicar isso pro mercado. Hoje, sou a referência em pães artesanais da região."
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
                Varejistas como você já estão transformando seus negócios.
              </h1>
              <p className="text-lg md:text-xl">
                Conheça histórias reais de quem aplicou a metodologia VdeVAREJO e alcançou resultados mensuráveis.
              </p>
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cases.map((caso, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Quote size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{caso.nome}</h3>
                        <p className="text-sm text-muted-foreground">{caso.cidade}</p>
                        <p className="text-sm text-primary font-semibold">{caso.tipo}</p>
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg mb-4">
                      <p className="font-bold text-lg text-primary">{caso.resultado}</p>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{caso.depoimento}"
                    </p>

                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* PARCEIROS */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Parceiros Estratégicos
            </h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-background">
                <CardContent className="pt-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">CHUA</span>
                      </div>
                      <p className="text-sm font-semibold">CHUA Distribuidora</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">Dolivs</span>
                      </div>
                      <p className="text-sm font-semibold">Dolivs Agência</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary text-center">Indústria</span>
                      </div>
                      <p className="text-sm font-semibold">Parceiros Industriais</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-muted rounded-lg mx-auto mb-2 flex items-center justify-center">
                        <span className="text-sm font-bold text-primary text-center">Educação</span>
                      </div>
                      <p className="text-sm font-semibold">Instituições de Ensino</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para ser o próximo caso de sucesso?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Junte-se aos 500 fundadores e transforme seu varejo com a metodologia dos 7 Vs.
            </p>
            <Link href="/fundador">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                QUERO ESSA TRANSFORMAÇÃO (20% OFF)
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
