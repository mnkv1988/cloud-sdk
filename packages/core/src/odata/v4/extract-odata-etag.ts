/**
 * Extractor for the etag for OData v4 responses used in [[entityDeserializer]].
 * @param json - Reponse data from which the etag is extracted
 * @returns The etag
 */
export function extractODataEtagV4(
  json: Record<string, any>
): string | undefined {
  return json?.['@odata.etag'];
}
