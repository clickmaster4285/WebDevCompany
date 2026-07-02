import { redirect } from "next/navigation";

export default function FAQSlugRedirect({ params }: { params: { slug: string } }) {
  redirect(`/faqs/${params.slug}`);
}
