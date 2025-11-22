import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main>
        {/* HERO */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transformando a gestão do varejo brasileiro, do obsoleto ao essencial.
              </h1>
              <p className="text-lg md:text-xl">
                O VdeVAREJO é o resultado da parceria entre quem vive o mercado, entende de estratégia e quem garante a transformação através de um método aplicável. Somos a experiência prática que você precisa, a visão de futuro que faz você ir além e a metodologia que você vai aplicar.
              </p>
            </div>
          </div>
        </section>

        {/* OS FUNDADORES */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Os Fundadores
            </h2>

            <div className="space-y-16">
              {/* Amir Faria */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                    Sócio-Fundador
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Amir Faria</h3>
                  <p className="text-xl font-semibold text-primary mb-4">Idealizador - A Força do Mercado</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Amir Faria é o idealizador do VdeVAREJO e proprietário da CHUA Distribuidora, uma das maiores distribuidoras de Minas Gerais e Espírito Santo. Com operação em 500 municípios e uma base ativa de 13.500 clientes varejistas, Amir vive o varejo na prática há décadas.
                    </p>
                    <p>
                      Ele conhece a dor do varejista porque conversa com eles todos os dias. Sabe o que funciona e o que não funciona. E, acima de tudo, entende que o varejo brasileiro precisa de uma solução prática, acessível e que gere resultados reais.
                    </p>
                    <p className="font-semibold text-foreground">
                      No VdeVAREJO, Amir é responsável pela ativação da base de clientes, pelas parcerias estratégicas com a indústria e pela garantia de que o conteúdo está conectado com a realidade do balcão.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-8xl font-bold text-primary">AF</span>
                  </div>
                </div>
              </div>

              {/* Douglas Oliveira */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-8xl font-bold text-primary">DO</span>
                  </div>
                </div>
                <div>
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                    Sócio-Fundador
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Douglas Oliveira</h3>
                  <p className="text-xl font-semibold text-primary mb-4">A Mente Estratégica</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Douglas Oliveira é publicitário estrategista com 21 anos de experiência no mercado, sendo 16 anos como executivo de marketing no setor de shopping centers e varejo. Fundador da Dolivs, agência de publicidade com forte atuação no segmento varejista, Douglas é também mentor, professor na FGV (pós-graduação), ex-diretor de CDL e palestrante reconhecido.
                    </p>
                    <p>
                      Sua filosofia de trabalho se resume em frases como "Tudo é gente" e "Quem domina contexto não depende de algoritmo", refletindo uma abordagem humanizada e estratégica para o marketing e o branding.
                    </p>
                    <p className="font-semibold text-foreground">
                      No VdeVAREJO, Douglas é responsável pela comunicação, pelo plano de marca, pelas estratégias de marketing e pelas parcerias estratégicas com executivos de alto nível, instituições de ensino e eventos do setor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Daniellen Zwierzynski */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-4">
                    Sócia Estratégica
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Daniellen Zwierzynski</h3>
                  <p className="text-xl font-semibold text-primary mb-4">A Excelência Educacional</p>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Daniellen Zwierzynski é uma profissional altamente gabaritada nacional e internacionalmente na área de educação e desenvolvimento de metodologias de ensino. Com experiência em gestão de escolas nos Estados Unidos e no desenho de metodologias para grandes grupos de educação no Brasil, Daniellen é a arquiteta pedagógica do VdeVAREJO.
                    </p>
                    <p>
                      Ela garante que o conhecimento não seja apenas "consumido", mas efetivamente absorvido, aplicado e transformado em resultados mensuráveis.
                    </p>
                    <p className="font-semibold text-foreground">
                      No VdeVAREJO, Daniellen é responsável pelo desenvolvimento da metodologia dos "7 Vs do Varejo", pela curadoria pedagógica de todo o conteúdo, pela formação de mentores e pela medição de resultados.
                    </p>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-8xl font-bold text-primary">DZ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROPÓSITO */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Para que o legado da sua família não morra na próxima geração.
              </h2>
              <div className="space-y-6 text-lg">
                <p>
                  Nós existimos por uma razão simples e brutal: <strong className="text-primary">9 em cada 10 empresas no Brasil são familiares, mas apenas 3 sobrevivem à segunda geração.</strong> O trabalho de uma vida inteira, o nome da sua família, o futuro dos seus filhos(as)... tudo isso está em risco.
                </p>
                <p>
                  Nosso propósito é mudar essa estatística. É dar ao varejista raiz, ao dono do negócio, as mesmas ferramentas, estratégias e conexões que os gigantes do mercado usam para crescer. É garantir que a sucessão não seja um trauma, mas uma evolução.
                </p>
                <p>
                  Existimos para transformar negócios que operam por intuição em máquinas de resultado. Para transformar a solidão do dono em uma comunidade de gigantes. Para transformar a luta diária pela sobrevivência em um plano claro para a prosperidade.
                </p>
                <p className="text-2xl font-bold text-center text-primary mt-8">
                  Nosso propósito é um só: perpetuar o seu legado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para fazer parte dessa transformação?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
              Junte-se aos 500 fundadores e construa um legado de sucesso ao lado de quem realmente entende o varejo brasileiro.
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
