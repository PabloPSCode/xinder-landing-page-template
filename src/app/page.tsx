"use client";

import FadeContainer from "@/components/animations-and-loading/FadeContainer";
import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import ItemListCard from "@/components/cards/ItemListCard";
import MetricsCard from "@/components/cards/MetricsCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Footer from "@/components/elements/Footer";
import { item } from "@/components/elements/Footer/components/SocialRibbon";
import { HeroSection } from "@/components/elements/HeroSection";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import SearchInput from "@/components/inputs/SearchInput";
import ImageLink from "@/components/media/ImageLink";
import Badge from "@/components/miscellaneous/Badge";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import {
  xinderContactHighlights,
  xinderExpandingServices,
  xinderFooterColumns,
  xinderHeroTags,
  xinderMetrics,
  xinderNavLinks,
  xinderSocialLinks,
  xinderSolutionItems,
  xinderTestimonials,
} from "@/mocks/xinder";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileToggle = (open: boolean) => {
    setMobileMenuOpen(open);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      <LandingHeader.Root
        bordered={false}
        sticky
        className="bg-primary-900/95 text-white shadow-none"
      >
        <LandingHeader.Left className="gap-3">
          <LandingHeader.Logo
            src="/logo.svg"
            alt="Logo da Xinder"
            className="brightness-0 invert"
          />
        </LandingHeader.Left>
        <LandingHeader.Center>
          <LandingHeader.Nav className="justify-center gap-8">
            {xinderNavLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </LandingHeader.Nav>
        </LandingHeader.Center>
        <LandingHeader.Right className="gap-3">
          <Button
            label="Fale com um especialista"
            variant="outlined"
            className="hidden sm:flex border-white/60 text-white hover:bg-white/10"
          />
          <LandingHeader.MobileMenuToggle
            open={mobileMenuOpen}
            onToggle={handleMobileToggle as never}
          />
        </LandingHeader.Right>
        <LandingHeader.MobileMenuPanel
          open={mobileMenuOpen}
          cta={
            <Button
              label="Falar com especialista"
              variant="filled"
              className="w-full justify-center"
            />
          }
        >
          {xinderNavLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-foreground"
                onClick={handleCloseMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </LandingHeader.MobileMenuPanel>
      </LandingHeader.Root>

      <main className="pt-16">
        <div id="inicio">
          <HeroSection
            size="full"
            sectionClassName="bg-primary-900 text-white pt-28 pb-20 items-stretch"
          >
            <div className="w-full max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
              <RevealContainer once className="flex flex-col gap-6">
                <Title
                  content="Construa software sob medida com a Xinder"
                  element="h1"
                  weight="bold"
                  className="text-white text-3xl sm:text-4xl md:text-5xl leading-tight"
                />
                <Paragraph
                  content="Squads especializados em estratégia, design e engenharia para acelerar entregas críticas sem abrir mão de qualidade."
                  className="text-white/80 text-base sm:text-lg"
                />
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:items-center">
                  <SearchInput
                    search={search}
                    setSearch={setSearch}
                    placeholder="Procure por squad, stack ou desafio"
                    containerClassName="flex-1"
                    className="bg-white text-foreground"
                  />
                  <Button
                    label="Buscar especialistas"
                    variant="outlined"
                    className="bg-white text-primary-800 hover:bg-white/ w-full sm:w-auto"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {xinderHeroTags.map((tag) => (
                    <Badge
                      key={tag}
                      text={tag}
                      size="medium"
                      variant="outlined"
                      color="#FFFFFF"
                    />
                  ))}
                </div>
              </RevealContainer>
              <ZoomContainer
                once
                className="flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-sm">
                  <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full bg-white/10" />
                  <div className="absolute -bottom-6 -right-6 h-16 w-16 rounded-full bg-white/10" />
                  <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Especialista Xinder"
                      width={480}
                      height={540}
                      className="h-full w-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </ZoomContainer>
            </div>
          </HeroSection>
        </div>

        <Section size="middle" sectionClassName="gap-8 my-12">
          <div className="w-full flex flex-col gap-3 text-center">
            <Title
              content="Resultados consistentes em operações críticas"
              element="h2"
              weight="bold"
              className="text-2xl sm:text-3xl"
            />
            <Paragraph
              content="Indicadores reais de times que escalaram com a Xinder."
              className="text-foreground/70"
            />
          </div>
          <FadeContainer once className="w-full">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
              {xinderMetrics.map((metric) => (
                <MetricsCard
                  key={metric.title}
                  title={metric.title}
                  preTitle={metric.preTitle}
                  value={metric.value}
                  icon={metric.icon}
                  countDuration={metric.duration}
                />
              ))}
            </div>
          </FadeContainer>
        </Section>

        <div id="servicos" className="scroll-mt-16">
          <Section size="full" sectionClassName="bg-white/70 gap-8 py-12">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
              <div className="flex flex-col gap-3 text-center">
                <Title
                  content="Serviços em expansão"
                  element="h2"
                  weight="bold"
                  className="text-2xl sm:text-3xl"
                />
                <Paragraph
                  content="Capacidades completas para cada etapa do seu produto digital."
                  className="text-foreground/70"
                />
              </div>
              <FadeContainer once className="w-full">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {xinderExpandingServices.map((service) => (
                    <ItemListCard
                      key={service.title}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                    />
                  ))}
                </div>
              </FadeContainer>
              <div className="flex justify-center">
                <Button label="Explorar serviços" variant="filled" />
              </div>
            </div>
          </Section>
        </div>

        <div id="solucoes" className="scroll-mt-16">
          <Section
            size="full"
            sectionClassName="bg-slate-800 text-white items-stretch gap-10"
          >
            <div className="w-full max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
              <div className="flex flex-col gap-6">
                <Title
                  content="Soluções completas para times exigentes"
                  element="h2"
                  weight="bold"
                  className="text-white text-2xl sm:text-3xl"
                />
                <Paragraph
                  content="Da descoberta ao scale, combinamos estratégia, design e engenharia para acelerar operações complexas."
                  className="text-white/80"
                />
                <div className="flex flex-col gap-4">
                  {xinderSolutionItems.map((item) => (
                    <ItemListCard
                      key={item.title}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      containerClassName="bg-white/5 border-white/10"
                      titleClassName="text-white"
                      descriptionClassName="text-white/70"
                    />
                  ))}
                </div>
                <Button
                  label="Explorar soluções"
                  variant="outlined"
                  className="bg-white text-slate-900 hover:bg-white/90"
                />
              </div>
              <RevealContainer once className="flex justify-center lg:justify-end">
                <ImageLink
                  imgUrl="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={720}
                  height={520}
                  alt="Dashboard de produto"
                  className="w-full max-w-lg"
                />
              </RevealContainer>
            </div>
          </Section>
        </div>

        <Section size="middle" sectionClassName="gap-8">
          <div className="w-full flex flex-col gap-3 text-center">
            <Title
              content="Clientes que cresceram com a Xinder"
              element="h2"
              weight="bold"
              className="text-2xl sm:text-3xl"
            />
            <Paragraph
              content="Depoimentos de líderes que evoluíram suas operações digitais."
              className="text-foreground/70"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3 w-full">
            {xinderTestimonials.map((testimonial, index) => (
              <FadeContainer once key={testimonial.userName} delay={index * 2}>
                <TestimonialCard
                  avatarUrl={testimonial.avatarUrl}
                  userName={testimonial.userName}
                  userRole={testimonial.userRole}
                  rating={testimonial.rating}
                  testimonial={testimonial.testimonial}
                />
              </FadeContainer>
            ))}
          </div>
        </Section>

        <div id="contato">
          <Section
            size="full"
            sectionClassName="bg-slate-900 text-white items-stretch gap-10"
          >
            <div className="w-full max-w-7xl mx-auto grid gap-10 items-center">
              <div className="flex flex-col gap-6">
                <Title
                  content="Pronto para acelerar sua próxima entrega?"
                  element="h2"
                  weight="bold"
                  className="text-white text-2xl sm:text-3xl"
                />
                <Paragraph
                  content="Agende um diagnóstico gratuito e receba um plano claro de evolução do seu software."
                  className="text-white/80"
                />
                <div className="grid gap-4 sm:grid-cols-3">
                  {xinderContactHighlights.map((highlight) => (
                    <ItemListCard
                      key={highlight.title}
                      icon={highlight.icon}
                      title={highlight.title}
                      description={highlight.description}
                      containerClassName="bg-white/5 border-white/10"
                      titleClassName="text-white"
                      descriptionClassName="text-white/70"
                    />
                  ))}
                </div>
                <Button label="Agendar diagnóstico" variant="filled" />
              </div>
            </div>
          </Section>
        </div>
      </main>

      <Footer.Root bordered>
        <Footer.Top columns={4} bordered>
          {xinderFooterColumns.map((column) => (
            <Footer.Column
              key={column.title}
              title={column.title}
              items={column.items}
            />
          ))}
        </Footer.Top>
        <Footer.SocialRow
          items={xinderSocialLinks as item[]}
          title="Siga a Xinder"
          iconsClassName="text-foreground"
        />
        <Footer.Bottom>
          <Paragraph
            content="© 2026 Xinder. Todos os direitos reservados."
            className="text-foreground/70 text-xs"
          />
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
