export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('S3_KEY_ID'),
        secretAccessKey: env('S3_SECRET'),
        endpoint: env("S3_ENDPOINT"),
        params: {
          Bucket: env('S3_BUCKET'),
        },
      },
      // actionOptions: {
      //   upload: {},
      //   uploadStream: {},
      //   delete: {},
      // },
    },
  },
  ckeditor: {
    enabled: true,
    // resolve: '@ckeditor/strapi-plugin-ckeditor'
  },
});
