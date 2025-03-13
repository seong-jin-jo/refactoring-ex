const statement = require('../statement/statement'); // hello.js에서 statement 함수 가져오기
const invoices = require('../statement/invoices.json');
const plays = require('../statement/plays.json');

test('청구 내역 출력 테스트', () => {
    const output = statement(invoices[0], plays);
    expect(output).toContain('청구내역 (고객명: BigCo)');
    expect(output).toContain('총액: $1,730.00'); // 수정된 예상 총액
    expect(output).toContain('적립 포인트: 47점'); // 예상 적립 포인트
});