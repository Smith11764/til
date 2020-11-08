# anaconda

### バージョンの確認
```
conda -V
```

### 仮想環境の構築
```
conda create -n 環境名(python=3.8)
```
ex)
```
conda create -n pythonenv python=3.8
```

### 仮想環境の有効化
```
conda activate 環境名
```
ex)
```
conda activate pythonenv
```

### 仮想環境の無効化

```
conda deactivate
```

### 作成した環境一覧
```
conda env list
```

### 作成した仮想環境の削除
```
conda remove -n [name]  --all
```
ex)
```
conda remove -n pythonenv --all
```

### インストールしたパッケージ一覧
activateの環境にインストールしたパッケージの一覧が表示される
```
conda list
```

### パッケージのインストール
```
pip パッケージ名
```
ex)
```
pip flask
```
