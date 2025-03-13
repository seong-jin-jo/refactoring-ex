plays.json : 공연할 연극 정보
invoices.json : 공연료 청구서에 들어갈 데이터

## statement : 공연료 청구서를 출력하는 코드
연극 외주를 받아서 공연하는 극단. 공연 요청이 들어오면(invoices) 연극의 장르(type)와 관객 규모(audience)를 기초로 비용을 측정한다. 공연료와 별개로 포인트(volume credit)를 지급해서 다음번 의뢰시 공연료를 할인받을 수 있다.