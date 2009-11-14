YAHOO.env.classMap = {"validator.DoubleField": "validator", "validator.CustomField": "validator", "validator.PasswordField": "validator", "validator.IntegerField": "validator", "validator.Form": "validator", "validator.TextBaseField": "validator", "validator.CheckboxField": "validator", "validator.BaseInputField": "validator", "validator.MatchField": "validator", "validator.GroupBaseField": "validator", "validator.SelectField": "validator", "validator.Button": "validator", "validator.GLOBAL": "validator"};

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
