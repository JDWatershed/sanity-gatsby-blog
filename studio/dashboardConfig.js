export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da60c854beb9c2067a2d7fd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-8p5qwt98',
                  apiId: '3b56793f-c2f8-431b-aa1a-0e3ccdfee798'
                },
                {
                  buildHookId: '5da60c854fa568322b1494af',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-b4ugoxpu',
                  apiId: 'b9779b54-1a7b-41ea-9ed4-e884a7a9f22e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JDWatershed/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-b4ugoxpu.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
