
export default  {
    routes: [
      {
        method: 'PUT',
        path: '/articles/:id/count-view',
        handler: 'article.countView',
        config: {
          auth: false,
        },
      },
    ],
  };