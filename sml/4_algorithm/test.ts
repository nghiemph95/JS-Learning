const attributeValidator = (attributes: any) => {
  const inValidKey = (str: string) => {
    return !/^[a-z0-9_]*$/.test(str);
  };

  const hasInvalidKey = attributes.some((attribute: any) => {
    return !attribute.key || inValidKey(attribute.key as string);
  });

  const hasMissingKeyOrLabel = attributes.some((attribute: any) => {
    return (
      (attribute.key.length === 0 && attribute.label.length > 0) ||
      (attribute.key.length > 0 && attribute.label.length === 0)
    );
  });

  const hasInvalidDataType = attributes.some((attribute: any) => {
    return (
      (attribute.dataType === AttributeDataType.DROPDOWN &&
        attribute.attributeValues.length === 0) ||
      (attribute.dataType === AttributeDataType.TEXT &&
        attribute.attributeValues.length > 0)
    );
  });

  const hasInvalidAttributeValues = attributes.some((attribute: any) => {
    return (
      attribute.attributeValues.length > 0 &&
      JSON.parse(attribute.attributeValues) > 20
    );
  });

  const hasTooManyAttributes = attributes.length > 20;

  if (
    hasInvalidKey ||
    hasMissingKeyOrLabel ||
    hasInvalidDataType ||
    hasInvalidAttributeValues ||
    hasTooManyAttributes
  ) {
    throw CommonError.commonSomethingWentWrongError();
  }
};

const file = event?.currentTarget.files && event.currentTarget.file[0];


