module.exports = {

    extends : [ `stylelint-config-standard`, `stylelint-rscss/config` ],
    plugins : [ `stylelint-scss`, `stylelint-order` ],

    rules : {

        "indentation"          : 4,
        "max-line-length"      : 120,

        "unit-blacklist" : [ `ch`, `cm`, `ex`, `in`, `mm`, `pc`, `px` ],
        "unit-whitelist" : [ `%`, `em`, `pt`, `rem`, `vh`, `vw`, `vmin`, `vmax` ],

        "block-closing-brace-empty-line-before"          : `always-multi-line`,
        "color-hex-case"                                 : `upper`,
        "color-hex-length"                               : `long`,
        "color-named"                                    : `never`,
        "color-no-invalid-hex"                           : true,
        "declaration-block-single-line-max-declarations" : null,
        "font-family-name-quotes"                        : `always-unless-keyword`,
        "font-weight-notation"                           : `numeric`,
        "function-url-quotes"                            : `always`,
        "length-zero-no-unit"                            : true,
        "selector-attribute-quotes"                      : `always`,
        "selector-list-comma-newline-after"              : `always-multi-line`,
        "string-quotes"                                  : `double`,
        "unit-case"                                      : `lower`,
        "unit-no-unknown"                                : true,
        "value-keyword-case"                             : `lower`,

        "at-rule-empty-line-before"     : [ `always`, { ignore : [ `blockless-after-blockless`, `inside-block` ] } ],
        "declaration-empty-line-before" : [ `always`, { ignore : [ `after-comment`, `after-declaration`, `inside-single-line-block` ] } ],

        "order/order" : [ `custom-properties`, `dollar-variables`, `declarations`, `at-rules`, `rules` ],

        "order/properties-order" : [

            [
                `display`,
                { properties : [ `position`, `top`, `right`, `bottom`, `left` ] },
                { properties : [ `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left` ] },
                { properties : [ `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left` ] },
                { properties : [ `height`, `min-height`, `max-height`, `width`, `min-width`, `max-width` ] },
                { properties : [ `background`, `background-color`, `background-image`, `background-position`, `background-repeat`, `background-size` ] },
                `color`,
            ],

            { unspecified : `bottomAlphabetical` }

        ],

    },

}
