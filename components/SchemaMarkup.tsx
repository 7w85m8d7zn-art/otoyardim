type SchemaMarkupProps = {
  data: Array<Record<string, unknown> | null | undefined>;
};

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  const payload = data.filter((item): item is Record<string, unknown> => {
    if (!item || typeof item !== "object") {
      return false;
    }

    return typeof item["@context"] === "string";
  });

  if (payload.length === 0) {
    return null;
  }

  return payload.map((item, index) => {
    const typeValue = item["@type"];
    const keyBase =
      typeof typeValue === "string"
        ? typeValue
        : Array.isArray(typeValue)
          ? typeValue.join("-")
          : `schema-${index}`;

    return (
      <script
        key={`${keyBase}-${index}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(item),
        }}
      />
    );
  });
}
