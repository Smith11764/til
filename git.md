#### ローカルリポジトリの3つのエリア_開発の一連の流れ
1. ワークツリー
    現在の作業場。ファイルを編集する。
1. ステージング
    コミットするものを集める場所。ワークツリーの内容をgit add コマンドで反映する。
1. リポジトリ
    変更履歴を保管する場所。git commit コマンドで、ステージングにある内容がここに反映(=スナップショットが記録)される。

#### ローカルリポジトリの新規作成(= あたらしいプロジェクトの作成)
- 作成したい場所まで移動して、git init\
.gitファイルが作成される = ローカルリポジトリ

#### すでにあるプロジェクトを触るとき
- 対象のプロジェクトをコピーする\
git clone [対象のリモートリポジトリ]\
&emsp;対象のリモートリポジトリはgit hubのclone or downloadのところからコピーできる

#### ステージに変更を追加する_addコマンド
- git add ファイル名\
or git add ディレクトリ名\
or git add .

### リモートリポジトリの関連付け
- 指定した名前(ここではorigin)にリモートリポジトリのアドレスを関連付ける
```
$ git remote add origin git@github.com:ユーザー名/リポジトリ名.git
```

### リモートリポジトリに反映(push)
```
git push origin master
```


### ブランチの作成
developという名前のブランチを作成
```
$ git branch develop
```

### 指定のブランチに移動(checkout)
```
$ git checkout develop
Switched to branch 'develop'
```

### 現存する全てのブランチとカレントブランチを確認
```
$ git branch
* develop
  master
```

### 変更が加えられたファイルを表示する
```
$ git status
On branch develop
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   test.html

no changes added to commit (use "git add" and/or "git commit -a")
```
