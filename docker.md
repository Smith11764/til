# docker基本

## dockerコマンド
#### container run
    docker container run -it -d 0723729709cd

#### containerにexecで入る
    docker exec -it a8602ae99fa8 bash

#### docker composerを起動
    docker-compose up -d

#### 起動中のdocker composeを確認
    docker-compose ps

---
## docker-composeコマンド
#### docker-composeを停止
    docker-compose stop

#### docker-composeを削除
    docker-compose down

#### docker-composeを再スタートする
    docker-compose start

---
## その他
#### mysqlにターミナルから入る
    mysql -u root -p


