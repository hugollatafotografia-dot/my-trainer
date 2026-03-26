import { redirect } from "next/navigation";

import { getPageContext } from "@/lib/i18n";

export default async function LegacyTreatmentDetailPage() {
  const { l } = await getPageContext();
  redirect(l("/tratamientos"));
}
