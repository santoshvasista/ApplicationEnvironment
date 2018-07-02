export default function(values) {
    const errors = {};
    const requiredFields = [
        'Effective',
        'Expiration',
        'Policy',
        'TotalPremium',
        'TotalPayroll',
        'ExMod',
        'Carrier',
        'Evaluation',
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
        errors[field] = 'Required';
        }
    });

    return errors;
}
