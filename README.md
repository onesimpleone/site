## Инструкция
1. Установка awscli: https://docs.aws.amazon.com/cli/latest/userguide/install-linux.html
2. Потом конфигурируем пользователя aws: aws configure.
И указываем нашего пользователя из IAM.
3. В package.json в команде deploy заменяем Cloudfront's ID. 
Его можно получить в AWS Cloudfront.
4. Делаем yarn build.
5. Запускаем выгрузку в корзину: yarn deploy.

## Настройка Gatsby для s3 + cloudfront
1. https://www.gatsbyjs.com/plugins/gatsby-plugin-s3/
2. https://gatsby-plugin-s3.jari.io/recipes/with-cloudfront/
3. https://www.gatsbyjs.com/plugins/gatsby-plugin-canonical-urls/

## Настройка мета данных для seo
Подробнее в файле src/utils/seo/seo.tsx.