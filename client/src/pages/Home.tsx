import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  TrendingDown,
  Users,
  DollarSign,
  Target,
  BookOpen,
  Handshake,
  Mic,
  Check,
  Clock,
  Shield,
  X
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main>
        {/* SEÇÃO 1: HERO */}
        <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Seu varejo parou em 1980.
                <br />
                <span className="text-primary">É hora de virar o jogo.</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-secondary-foreground/90 max-w-3xl mx-auto">
                A primeira plataforma do Brasil 100% focada em transformar varejistas tradicionais em líderes de mercado. Metodologia validada. Comunidade de elite. Resultados mensuráveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/fundador">
                  <Button size="lg" className="text-lg px-8 py-6 font-bold">
                    QUERO ESSA TRANSFORMAÇÃO
                  </Button>
                </Link>
                <Link href="/metodologia">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-bold bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Conheça a Metodologia
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: PROBLEMA (Agitação da Dor) */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Reconhece alguma dessas situações?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <TrendingDown size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Parado no Tempo</h3>
                  <p className="text-muted-foreground text-center">
                    Você faz tudo igual há 20 anos enquanto a concorrência avança. O que funcionava antes não funciona mais, mas você não sabe o que mudar.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Users size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Sucessão Ameaçada</h3>
                  <p className="text-muted-foreground text-center">
                    Você construiu um império, mas tem medo de que tudo desmorone quando passar o bastão. Seu filho(a) não te escuta. Você não sabe como prepará-lo(a).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <DollarSign size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Vende Muito, Lucra Pouco</h3>
                  <p className="text-muted-foreground text-center">
                    O faturamento até vai bem, mas no fim do mês não sobra nada. Despesas descontroladas, margem apertada, estoque parado. Onde está o erro?
                  </p>
                </CardContent>
              </Card>
            </div>
            <p className="text-center mt-12 text-lg max-w-3xl mx-auto">
              Se você se identificou com pelo menos uma dessas situações, você não está sozinho. <strong>98% dos varejistas PME enfrentam esses mesmos desafios.</strong> A boa notícia? Existe uma solução.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3: SOLUÇÃO */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Apresentamos o VdeVAREJO:
                <br />
                <span className="text-primary">A transformação que o seu negócio precisa.</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto">
                Não vendemos cursos. Entregamos transformação. Um ecossistema completo para tirar seu varejo da estagnação e construir um legado de sucesso.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Metodologia Proprietária</h3>
                      <p className="text-muted-foreground">
                        Framework exclusivo dos <strong>7 Vs do Varejo</strong>, uma metodologia pensada em áreas como sucessão familiar, marketing, gestão, inteligência emocional e muito mais.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <BookOpen size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Conteúdo Prático</h3>
                      <p className="text-muted-foreground">
                        Esqueça a teoria acadêmica. Aqui você aprende e aplica no dia seguinte. Planilhas, checklists, frameworks prontos para usar.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Handshake size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Comunidade de Elite</h3>
                      <p className="text-muted-foreground">
                        Você não está mais sozinho. Conecte-se com centenas de outros varejistas, troque experiências, faça negócios. Peer mentoring que gera resultados reais.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mic size={32} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Eventos Presenciais</h3>
                      <p className="text-muted-foreground">
                        Imersões e workshops presenciais para sair do operacional e entrar no estratégico. Aprenda com os maiores nomes do mercado.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Link href="/fundador">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 font-bold">
                  QUERO TRANSFORMAR MEU VAREJO
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: PROVA SOCIAL (Fundadores) */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              A tríade perfeita para transformar o seu varejo.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">AF</span>
                  </div>
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-3">
                    Sócio-Fundador
                  </div>
                  <h3 className="text-xl font-bold mb-2">Amir Faria</h3>
                  <p className="text-sm font-semibold text-primary mb-3">A Força do Mercado</p>
                  <p className="text-sm text-muted-foreground">
                    Idealizador do VdeVAREJO e proprietário da CHUA Distribuidora. Atende 13.500 varejistas e conhece a dor de quem está no balcão.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">DO</span>
                  </div>
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-3">
                    Sócio-Fundador
                  </div>
                  <h3 className="text-xl font-bold mb-2">Douglas Oliveira</h3>
                  <p className="text-sm font-semibold text-primary mb-3">A Mente Estratégica</p>
                  <p className="text-sm text-muted-foreground">
                    21 anos de experiência em marketing para gigantes do varejo. Fundador da Dolivs. Traduz caos em estratégia clara.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">DZ</span>
                  </div>
                  <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold mb-3">
                    Sócia Estratégica
                  </div>
                  <h3 className="text-xl font-bold mb-2">Daniellen Zwierzynski</h3>
                  <p className="text-sm font-semibold text-primary mb-3">A Excelência Educacional</p>
                  <p className="text-sm text-muted-foreground">
                    Especialista nacional e internacional em metodologia de ensino. Garante que a transformação aconteça de verdade.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link href="/sobre">
                <Button variant="outline" size="lg">
                  Conheça mais sobre os fundadores
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SEÇÃO 5: METODOLOGIA (7 Vs) */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Os 7 Vs do Varejo:
                <br />
                <span className="text-primary">O framework que vai transformar seu negócio.</span>
              </h2>
              <p className="text-lg max-w-3xl mx-auto">
                Uma metodologia proprietária pensada em áreas essenciais como sucessão familiar, marketing, gestão, inteligência emocional, precificação, estratégia e relacionamento com clientes. Cada "V" representa um pilar fundamental do seu negócio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "V de VIDA", subtitle: "Gestão de Pessoas e Sucessão" },
                { title: "V de VOLUME", subtitle: "Crescimento e Escala" },
                { title: "V de VENDA", subtitle: "Técnicas e Conversão" },
                { title: "V de VITRINE", subtitle: "Merchandising Visual" },
                { title: "V de VALOR", subtitle: "Precificação e Finanças" },
                { title: "V de VISÃO", subtitle: "Estratégia e Branding" },
                { title: "V de VÍNCULO", subtitle: "Relacionamento e Fidelização" },
              ].map((v, index) => (
                <Card key={index} className="bg-background hover:border-primary transition-all">
                  <CardContent className="pt-6">
                    <div className="text-4xl font-bold text-primary mb-2">{index + 1}</div>
                    <h3 className="text-lg font-bold mb-1">{v.title}</h3>
                    <p className="text-sm text-muted-foreground">{v.subtitle}</p>
                  </CardContent>
                </Card>
              ))}
              <Card className="bg-primary text-primary-foreground hover:scale-105 transition-all">
                <CardContent className="pt-6 flex items-center justify-center h-full">
                  <Link href="/metodologia">
                    <Button variant="secondary" size="lg" className="font-bold">
                      CONHEÇA A METODOLOGIA COMPLETA
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6: PARA QUEM É */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Para quem é o VdeVAREJO?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-center mb-8">
                O VdeVAREJO foi desenhado para o <strong>varejista raiz</strong> que construiu um negócio com as próprias mãos, mas sente que chegou a hora de profissionalizar, crescer e garantir que o legado não morra na próxima geração.
              </p>

              <Card className="border-2 border-primary mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Este programa é para você se:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Você sente que está fazendo tudo igual há anos e sabe que precisa mudar, mas não sabe por onde começar.",
                      "Você tem medo de que seu filho(a) não esteja preparado(a) para assumir o negócio e quer estruturar uma sucessão tranquila.",
                      "Você vende muito, mas lucra pouco, e não entende onde está o erro.",
                      "Você quer fazer parte de uma comunidade de varejistas de alto nível, trocar experiências e aprender com quem já passou pelos mesmos desafios.",
                      "Você quer conhecer as melhores práticas do mercado, inovar e sair na frente da concorrência."
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check size={24} className="text-primary flex-shrink-0 mt-1" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Este programa NÃO é para você se:</h3>
                  <div className="space-y-3">
                    {[
                      "Você busca fórmulas mágicas ou resultados sem esforço.",
                      "Você não está disposto a aplicar o que aprende.",
                      "Você acha que já sabe tudo e não precisa evoluir."
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <X size={24} className="text-muted-foreground flex-shrink-0 mt-1" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEÇÃO 7: OFERTA DE LANÇAMENTO */}
        <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Seja um dos 500 primeiros do VdeVAREJO.
              </h2>
              <p className="text-lg max-w-3xl mx-auto">
                Oferta exclusiva e limitada. <strong className="text-primary">20% de desconto vitalício em todos os nossos programas</strong> + benefícios VIP para quem entrar agora.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-4 border-primary bg-background">
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-lg mb-4">
                      OFERTA LIMITADA: 500 VAGAS
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Benefícios Exclusivos dos 500 Primeiros</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {[
                      "20% de desconto vitalício em todos os programas VdeVAREJO",
                      "Acesso ao Ecossistema Completo (Plataforma + Eventos + Comunidade + Mentorias)",
                      "Selo de Pioneiro na comunidade",
                      "Acesso antecipado a novos conteúdos e programas",
                      "Prioridade em eventos presenciais",
                      "2 sessões extras de mentoria em grupo",
                      "Kit de ferramentas físico exclusivo",
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/fundador">
                    <Button size="lg" className="w-full sm:w-auto font-bold text-lg">
                      QUERO ESSA TRANSFORMAÇÃO
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <div className="mt-8 text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Clock size={20} className="text-primary" />
                  <p className="font-semibold">Oferta válida até 30 de Novembro ou até esgotar as 500 vagas.</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Shield size={20} className="text-primary" />
                  <p><strong>Garantia de 30 dias:</strong> Se você não ficar satisfeito, devolvemos 100% do seu investimento.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8: CTA FINAL */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              O futuro do seu varejo começa agora.
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Não deixe seu negócio morrer na próxima geração. Junte-se aos 500 primeiros e construa um legado de sucesso.
            </p>
            <Link href="/fundador">
              <Button size="lg" className="w-full sm:w-auto text-xl px-12 py-8 font-bold">
                QUERO ESSA TRANSFORMAÇÃO
              </Button>
            </Link>
            <p className="mt-6 text-sm">
              ⏰ Oferta válida até 30 de Novembro ou até esgotar as 500 vagas.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
