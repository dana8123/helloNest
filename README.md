# CRUD Project with NestJS

- 작업기간 : 21/10/17 ~ ing
- 프로젝트 목표 : Nest.js를 이용해 확장성, 다목적성을 가진 CRUD 프로젝트를 제작한다.

# 배운것

`DTO` :

- Data transfer object의 약자로, 로직을 갖지 않는 순수한 데이터 객체를 의미한다.
- service, controller 로 데이터를 보낼 때, 받아야 할 데이터 객체를 일일이 입력하는것에 비해 효율적인 관리가 가능하게한다.

`Pipe` :

- @Injectable() 데코레이터로 주석이 달린 클래스
- data transformation, data validation을 위해 사용
  - 받은 데이터를 올바른 형식으로 변환 ex : `1234 -> '1234'`
  - 데이터의 유효성 검사를 하기위해 사용 (데이터의 유무 등..)
