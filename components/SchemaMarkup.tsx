type SchemaMarkupProps = {
  data: Array<Record<string, unknown> | null | undefined>;
};

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  const payload = data.filter(Boolean);

  if (payload.length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
      }}
    />
  );
}
