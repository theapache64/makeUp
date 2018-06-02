// @flow
export default class CodeMan {

    static skipAttrs = [
        "keyboardShouldPersistTaps",
        "ref"
    ];

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
                console.log(attrValue);

                const name = attrValue.replace(/\s+/g,'_');

                //building resource code
                resourceCode.push(`${name} : '${attrValue}',`)

                tempCode = tempCode.replace(match[0],`${attrName}={R.string.${name}}`)
            }

            match =  CodeMan.regEx.exec(originalCode);
        }

        return {convertedCode: tempCode, resourceCode: resourceCode.join("\n")};
    }
}