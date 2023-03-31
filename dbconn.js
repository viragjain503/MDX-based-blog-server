const Article = require("./schemas/article");

async function run(){
    const article = await Article.create({
        articleNumber: 1,
        title: "How to code",
        description: "How to know coding",
    })
    console.log(article);
}
run()