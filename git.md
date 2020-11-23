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
### HEADとは
https://qiita.com/shibukk/items/8c9362a5bd399b9c56be
https://qiita.com/ymzk-jp/items/00ff664da60c37458aaa
#### HEADとは
今時分が作業している場所を示すポインタ
#### branchとは
開発の本流から分岐し、本流の開発を邪魔することなく作業を続ける機能
#### branched HEADとは
HEADがBranchを指していない状態のこと
