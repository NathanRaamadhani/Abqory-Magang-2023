/**
 *  article controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::article.article",
  ({ strapi }) => ({
    async countView(ctx) {
      const { id } = ctx.params;
      const findArticle = await strapi.entityService.findOne(
        "api::article.article",
        id
      );

      if (!findArticle) {
        ctx.response.status = 404;
        return {
          status: "not-found",
        };
      }

      const article = await strapi.entityService.update(
        "api::article.article",
        id,
        {
          data: {
            totalViews: findArticle.totalViews + 1,
          },
        }
      );

      return {
        status: "success",
        articleId: article.id,
        count: article.totalViews,
      };
    },
  })
);
