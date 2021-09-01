// Обязательно добавляем 2 слеша,т.к. первый удалит gatsby при билде.
// const REDIRECT_TO = "https://d2wyxqay8p9ua6.cloudfront.net/app/x/"

/**
 * Gatsby создаёт редиректы в самой корзине в aws s3.
 * 
 * Чтобы просмотреть созданный конфиг:
 * Auth on AWS -> S3 -> Go to our bucket -> Properties ->
 * -> Static website hosting -> Edit -> Profit.
 */
exports.createPages = async ({ actions }) => {
	const { createRedirect } = actions
	
    /**
     * Когда открываем поддиректорию с приложением "/app", то по умолчанию
     * мы получим 404 ошибку. Нам нужно сделать редирект с "/app" на "/app/",
     * т.к. приложение размещено там. Для этого нужен редирект.
     */
    // createRedirect({
	//     fromPath: "app",
	//     toPath: REDIRECT_TO,
    //     isPermanent: true
	// })
}