# PHP

## データベース
### ①データベース接続
古いソースではmysql_connext()を使っている場合があるかもしれないが、基本的にPDO(php data objects)で接続する。
```
try {

    $dbh = new PDO(
        'mysql:host=サーバー名;dbname=データベース名;charset=utf8',
        'ユーザー名',
        'パスワード',
        array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_EMULATE_PREPARES => false,
        )
    );

} catch (PDOException $e) {

    $error = $e->getMessage();

}
```
↑第四匹数の配列はオプションを指している。例外を投げるようにする設定と、動的プレースホルダーをOFF　＝　静的プレースホルダーの設定(処理時間は若干遅いが、安全のため)

### ②PHPからデータベースを操作する流れの基本
1. プリペアードステートメントを作成
    ```
    $prepare = $dbh->prepare('クエリを書く');
    ```
1. 値をbind
    ```
    bindValue(パラメータID, バインドする値, データ型);
    ```
    bindParamメソッドもあるが、ちょっとややこしいので、基本的にbindVlueメソッドでOK

1. プリペアードステートメントを実行
    ```
    execute()で実行
    ```
    ```
    $price = 100;
    $prepare = $dbh->prepare('SELECT name FROM fruit WHERE price = ?　AND price = ?');
    $prepare->bindValue(1,(int)$price,PDO::PARAM_INT);
    $prepare->execute();
    ```
1. データを取得する
    1. fetchメソッドでデータを取得する

        該当するデータを1件のみ取得する。
        ループ処理をして、該当するすべてのデータを取得jすることもできる。
        ```
        $result = $prepare->fetch(PDO::FETCH_BOTH);
        print_r($result);
        ```
        ```
        Array
        (
            [name] => apple
            [0] => apple
            [price] => 100
            [1] => 100
        )
        ```

    1. fetchAllメソッドでデータを取得する

        すべてのデータを配列として返す。
        ```
        $result = $prepare->fetchAll(PDO::FETCH_ASSOC);
        print_r($result);
        ```
        ```
        Array
        (
            [0] => Array
                (
                    [name] => apple
                    [price] => 100
                )

            [1] => Array
                (
                    [name] => リンゴ
                    [price] => 100
                )

        )
        ```
    1. 引数でオプションを指定できる
        |定数|意味|
        |----|----|
        |PDO::FETCH_BOTH<br>(デフォルト)|フィールド名と0から始まる添字をつけた配列を返す|
        |PDO::FETCH_ASSOC|フィールド名で添字をつけた配列を返す|
        |PDO::FRTCH_NUM|0から始まる添え字をつけた配列を返す|

1. 結果を必要とするSQL文を実行するqueryメソッド

    prepare()　して、　execute()して実行するのを、一発でする。
    　＝プリペアードステートメントを使わないクエリ

    エスケープ処理をしてくれないので、ユーザーからの入力を使わないクエリを実行するときに使う。
    ```
    $result = $dbh->query('SELECT name FROM fruit WHERE price = 100');
    $result = $result->fetch();
    ```

1. 結果を必要都市内SQLを実行するexecメソッド

    query()メソッドと同じく、プリペアードステートメントを使わない。
    ユーザーからの入力を使わず、クエリが固定で、INSERTやUPDATEなど、結果を必要としないときに使う。何も返らないわけではなく、作用した行数が返ってくる。
---
## 参考
【PHP超入門】クラス～例外処理～PDOの基礎
https://qiita.com/7968/items/6f089fec8dde676abb5b