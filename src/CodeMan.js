// @flow
export default class CodeMan {

    static skipAttrs = [
        "keyboardShouldPersistTaps",
        "ref"
    ];

    static test = {
        Jon_s_car : 'Jon\'s car',
        Enter_your_name_here : 'Enter your name here',
    };

    static regEx = /(?:(\w+)="([^"]+)")/gm;

    static analyze(originalCode: string) {

        //const match = originalCode.match(CodeMan.regEx); //CodeMan.regEx.exec(originalCode);
        let match = CodeMan.regEx.exec(originalCode);
        let tempCode = originalCode;

        let resourceCode = [];

        while (match != null) {

            const attrName = match[1];
            const attrValue = match[2];

            //ADDRESS_DETAILS: 'ADDRESS DETAILS',
            if(this.skipAttrs.indexOf(attrName)===-1){


                const name = attrValue.replace(/\W+/g,'_');
                const value = attrValue.replace(/'/g,"\\'");

                //building resource code
                const stringObject = `${name} : '${value}'`;
                if(resourceCode.indexOf(stringObject)===-1){
                    resourceCode.push(stringObject);
                }

                tempCode = tempCode.replace(match[0],`${attrName}={R.string.${name}}`)
            }

            match =  CodeMan.regEx.exec(originalCode);
        }

        return {convertedCode: tempCode, resourceCode: resourceCode.join("\n")};
    }
}