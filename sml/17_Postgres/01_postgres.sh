/** Inheritance: Tính kế thừa */

///////////// Giả sử tạo 1 bảng cha và 2 bảng con

test=t_data CREATE TABLE t_data (id serial, name text)
CREATE TABLE
 
test=t_data_1 CREATE TABLE t_data_1 () INHERITS (t_data)
CREATE TABLE
 
test=t_data_2 CREATE TABLE t_data_2 () INHERITS (t_data)
CREATE TABLE

//////////// Cả 2 table con sẽ kế thừa columns từ table cha
test=# \d t_data_2
   Table "public.t_data_2"
 Column |  Type   |   Modifiers
--------+---------+---------------
 id     | integer |
 name   | text    |
Inherits: t_data

/** Adding Column: Thêm mới column */

test=# ALTER TABLE t_data_2 ADD COLUMN x int;
ALTER TABLE

// Trong postgres ,table con hoàn toàn có thể tạo thêm colums hơn table cha.
// Điều này ko phải là điều đặc biệt. Tuy nhiên, điều gì sẽ xảy ra nếu 
// add the same column to table cha giống table con: PostgreSQL sẽ hợp nhất
// 2 column lại bởi vì chúng giống hệt nhau