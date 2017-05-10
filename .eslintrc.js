module.exports = {

    root : true,

    env     : { browser : true, es6 : true, jquery : true, node : true },
    extends : [ `eslint:recommended`, `airbnb`, `google`, `standard` ],

    rules : {

        "indent"          : [ `error`, 4 ],
        "linebreak-style" : [ `error`, `windows` ],
        "max-len"         : [ `error`, 120 ],

        "array-bracket-spacing" : [ `error`, `always` ],
        "comma-dangle"          : [ `error`, `always-multiline` ],
        "key-spacing"           : [ `error`, { beforeColon : true, afterColon : true, align : `colon` } ],
        "padded-blocks"         : [ `error`, `always` ],

        "quotes" : [ `error`, `backtick`, { avoidEscape : true, allowTemplateLiterals : true } ],

        "no-shadow"             : [ `warn`, { allow : [ `callback`, `cb`, `error`, `err`, `done`, `next` ] } ],
        "no-param-reassign"     : `off`,
        "no-prototype-builtins" : `off`,
        "no-underscore-dangle"  : `off`,

    },

}
