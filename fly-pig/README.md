# fly-pig

> A Vue.js project

## Build Setup

## 规定一下电子票状态码

1 为 出票成功
2 为 改签完成
3 为 已取消
4 为 已退票
5 为 有改签记录

create table ticket18079143737(
  id int(10) not null auto_increment primary key,
  carid varchar(10) not null,
  departuredate timestamp not null,
  arrivedate timestamp not null,
  status int(1) not null default 1,
  departureaddress varchar(10) not null,
  arriveaddress varchar(10) not null,
  cost float(6,2) not null,
  countcost float(10,2) not null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

insert into ticket18079143737(carid,departuredate,arrivedate,status,departureaddress,arriveaddress,cost,countcost)
values
('D6549','2020-01-16 18:30:00','2020-01-16 19:46:00',5,'南昌西','南丰',53,106);

insert into ticket18079143737(carid,departuredate,arrivedate,status,departureaddress,arriveaddress,cost,countcost)
values
('D296','2019-12-15 13:12:00','2019-12-15 14:32:00',1,'南丰','南昌西',53,53),
('D6561','2019-12-14 12:19:00','2019-12-14 12:48:00',2,'抚州','南丰',24.5,24.5),
('D9997','2019-12-14 10:01:00','2019-12-14 10:38:00',1,'南昌西','抚州',24.5,24.5),
('D296','2019-12-12 13:12:00','2019-12-12 14:32:00',1,'南丰','南昌西',53,53),
('D6561','2019-12-11 12:19:00','2019-12-11 12:48:00',2,'抚州','南丰',24.5,24.5),
('D9997','2019-12-11 10:01:00','2019-12-11 10:38:00',1,'南昌西','抚州',24.5,24.5),
('D296','2019-12-10 13:12:00','2019-12-10 14:32:00',1,'南丰','南昌西',53,53),
('D6561','2019-12-09 12:19:00','2019-12-09 12:48:00',2,'抚州','南丰',24.5,24.5),
('D9997','2019-12-09 10:01:00','2019-12-09 10:38:00',1,'南昌西','抚州',24.5,24.5);