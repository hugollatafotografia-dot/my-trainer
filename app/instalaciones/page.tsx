import { redirect } from "next/navigation";

import { getPageContext } from "@/lib/i18n";

export default async function InstalacionesPage() {
  const { l } = await getPageContext();
  redirect(l("/sobre-nosotros"));
}
