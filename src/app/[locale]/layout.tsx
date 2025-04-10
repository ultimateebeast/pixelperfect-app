// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const messages = useMessages();

  if (!messages) {
    notFound();
  }

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
