import { getDictionary, type SiteDictionary } from "./messages";
import { withLocalePath } from "./routing";
import { getServerLocale } from "./server";
import type { Locale } from "./config";

export type PageContext = {
  locale: Locale;
  t: SiteDictionary;
  l: (path: string) => string;
};

export async function getPageContext(): Promise<PageContext> {
  const locale = await getServerLocale();
  const t = getDictionary(locale);

  return {
    locale,
    t,
    l: (path: string) => withLocalePath(path, locale),
  };
}
