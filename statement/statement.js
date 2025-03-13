const invoice = require('./invoices.json');
const plays = require('./plays.json');

function statement(invoice, plays){
    let totalAmount = 0;
    let volumnCredits = 0;
    let result = `청구내역 (고객명: ${invoice.customer})\n`
    
    const format = new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format;

    for (let perf of invoice.performances){
        const play = plays[perf.playID];
        
        let thisAmount = 0;

        switch(play.type){
            case "tragedy":
                thisAmount = 40000;
                if(perf.audience>30){
                    thisAmount += 1000 * (perf.audience-30);
                }
                break;
            case "comedy":
                thisAmount = 30000;
                if(perf.audience>20){
                    thisAmount += 10000 + 500 * (perf.audience-20);
                }
                thisAmount += 300 * perf.audience;
                break;   
            default:
                throw new Error(`알 수 없는 장르: ${play.type}`);
        }

        // 포인트를 적립
        volumnCredits += Math.max(perf.audience - 30, 0);
        // 희극 관객 5명마다 추가포인트
        if("comedy" === play.type) volumnCredits += Math.floor(perf.audience / 5);
        
        result += `${play.name}: ${format(thisAmount/100)} (${perf.audience}석)\n`;
        totalAmount += thisAmount;
    }

    // 청구내역 출력
    result += `총액: ${format(totalAmount/100)}\n`;
    result += `적립 포인트: ${volumnCredits}점\n`;
    return result;
}

// 함수 호출 및 출력
const output = statement(invoice[0], plays); // 첫 번째 청구서에 대해 호출
console.log(output); // 결과 출력

module.exports = statement;