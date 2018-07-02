export default function(values) {
  console.log("values");
  debugger;
    const errors = {};
    const requiredFields = [
        'ZipCode'
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
        errors[field] = 'Required';
        }
    });

    return errors;
}
