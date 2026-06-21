interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudy({
  params,
}: Props) {
  const { slug } = await params;

  return (
    <div className="p-20">
      Case Study: {slug}
    </div>
  );
}