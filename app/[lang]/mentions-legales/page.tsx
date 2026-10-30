import type { Metadata } from "next";
import Link from "next/link";
import { lang } from "next/root-params";
import { getDictionary } from "../../_i18n";
import { Header } from "../../_components/Header";
import { Footer } from "../../_components/Footer";
import { Section } from "../../_components/Section";
import { Spacing } from "../../_components/Spacing";
import { EMAIL } from "../../_components/contacts";
import { EDITOR, HOST } from "../../_components/legal";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await lang();
  const dict = await getDictionary();
  return {
    title: dict.legal.metaTitle,
    alternates: {
      canonical: `/${locale}/mentions-legales`,
      languages: { fr: "/fr/mentions-legales", en: "/en/mentions-legales" },
    },
  };
}

export default async function LegalNotice() {
  const locale = await lang();
  const dict = await getDictionary();
  const { legal } = dict;

  return (
    <div>
      <main>
        <Header />
        <Spacing size="sm" />
        <Section className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <Link href={`/${locale}`} className="text-sm text-muted-foreground hover:text-foreground">
              ← {legal.back}
            </Link>
            <h2 className="font-caption font-bold text-4xl text-primary">{legal.title}</h2>
            <p className="text-sm text-muted-foreground">{legal.updated}</p>
          </div>

          <LegalBlock title={legal.editor.title}>
            <p>{EDITOR.name}, {legal.editor.status}</p>
            <p>{legal.editor.siret} {EDITOR.siret}</p>
            <p>{legal.editor.address} {EDITOR.address}</p>
            <p>{legal.editor.phone} {EDITOR.phone}</p>
            <p>
              {legal.editor.email} <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>
            </p>
            <p>{legal.editor.director} {EDITOR.name}</p>
          </LegalBlock>

          <LegalBlock title={legal.host.title}>
            <p>{HOST.name}</p>
            <p>{HOST.address}</p>
            <p>
              <a href={HOST.url} target="_blank" rel="noopener noreferrer" className="underline">{HOST.url}</a>
            </p>
          </LegalBlock>

          <LegalBlock title={legal.data.title}>
            {legal.data.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </LegalBlock>

          <LegalBlock title={legal.cookies.title}>
            <p>{legal.cookies.text}</p>
          </LegalBlock>

          <LegalBlock title={legal.property.title}>
            <p>{legal.property.text}</p>
          </LegalBlock>
        </Section>
        <Spacing size="sm" />
        <Footer />
      </main>
    </div>
  );
}

const LegalBlock = (props: { title: string; children: React.ReactNode }) => {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-xl font-semibold">{props.title}</h3>
      <div className="flex flex-col gap-2 text-sm text-muted-foreground">{props.children}</div>
    </section>
  );
};
