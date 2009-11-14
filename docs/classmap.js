YAHOO.env.classMap = {"Validator.DoubleField": "Validator", "Validator.CustomField": "Validator", "Validator.PasswordField": "Validator", "Validator.IntegerField": "Validator", "Validator.Form": "Validator", "Validator.TextBaseField": "Validator", "Validator.CheckboxField": "Validator", "Validator.BaseInputField": "Validator", "Validator.GroupBaseField": "Validator", "Validator.SelectField": "Validator", "Validator.MatchField": "Validator", "Validator.Button": "Validator", "Validator.GLOBAL": "Validator"};

YAHOO.env.resolveClass = function(className) {
    var a=className.split('.'), ns=YAHOO.env.classMap;

    for (var i=0; i<a.length; i=i+1) {
        if (ns[a[i]]) {
            ns = ns[a[i]];
        } else {
            return null;
        }
    }

    return ns;
};
