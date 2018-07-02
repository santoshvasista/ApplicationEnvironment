export default function(values) {
  const errors = {};
  const requiredFields = [
    'StreetAddress',
    'City',
    'State',
    'ZipCode'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  return errors;
}
