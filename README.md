# BigQueryとNestJSの連携をローカルで試す用リポジトリ

## [事前準備]GCP CLIでユーザー認証する
https://cloud.google.com/docs/authentication/provide-credentials-adc?hl=ja#local-dev

## [事前準備]環境変数にプロジェクト名・テーブル名を設定
```.env.development.local
BQ_TABLE_NAME=your-table-name
```

## Running the app
```
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

Swagger: http://localhost:3000/api
