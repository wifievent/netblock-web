module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "ignorePatterns": ["node_modules/"],
    "rules": {
        "no-const-assign": "error", // 'const' 변수 재할당 금지
        "no-invalid-regexp": "error", // 불규칙한 공백을 허용하지 않음
        "no-unexpected-multiline": "error", // 혼란스러운 여러 줄 표현 금지
        "no-unreachable": "error", // `return`, `throw`, `continue` 및 `break` 문 뒤에 도달할 수 없는 코드를 허용하지 않습니다.
        "no-unused-vars": "error", // 사용하지 않는 변수를 허용하지 않음
        "arrow-body-style": "error", // 화살표 함수 본문 주위에 중괄호가 필요합니다.
        "camelcase": "error", // 낙타 케이스 명명 규칙 시행
        "curly": "error", // 모든 제어문에 일관된 중괄호 스타일 적용
        "func-name-matching": "error", // 할당된 변수 또는 속성의 이름과 일치하는 함수 이름이 필요합니다.
        "func-style": "error", // `function` 선언 또는 표현식의 일관된 사용을 시행합니다.
        "no-lone-blocks": "error", // 불필요한 중첩 블록 허용 안 함
        "no-useless-catch": "error", // 불필요한 `catch` 절을 허용하지 않음
        "prefer-const": "error", // 선언된 후 재할당되지 않는 변수에 대해 `const` 선언이 필요합니다.
        "arrow-parens": "error", // 화살표 함수 인수 주위에 괄호 필요
        "arrow-spacing": "error", // 화살표 함수에서 화살표 앞과 뒤에 일정한 간격을 적용합니다.
        "comma-dangle": "error", // 후행 쉼표 요구 또는 허용 안 함
        "comma-spacing": "error", // 쉼표 앞뒤에 일정한 간격을 적용합니다.
        "comma-style": "error", // 일관된 쉼표 스타일 적용
        "computed-property-spacing": "error", // 계산된 속성 괄호 안에 일정한 간격을 적용합니다.
        "no-extra-parens": "error", // 불필요한 괄호 금지
        "no-mixed-spaces-and-tabs": "error", // 들여쓰기를 위해 공백과 탭이 혼합된 것을 허용하지 않습니다.
        "space-before-function-paren": "error", //	'함수' 정의 여는 괄호 앞에 일정한 간격을 적용합니다.
        "space-in-parens": "error" // 괄호 안에 일정한 간격을 적용
    },
    "overrides": [
        {
            "files": ["routes\\cp\\component.controller.js", "config\\winston.js"],
            "rules": {
                "arrow-parens": "off",
                "no-unused-vars": "off",
                "arrow-body-style": "off"
            }
        }
    ]
};
