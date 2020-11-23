export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e863b28804fdea71deb9136',
                  title: 'Sanity Studio',
                  name: 'food-recipes-studio',
                  apiId: '515dd03a-f559-4e14-8582-5d130fd9d991'
                },
                {
                  buildHookId: '5e863b2874656a3ecb5b841b',
                  title: 'Portfolio Website',
                  name: 'food-recipes-web',
                  apiId: '19f7f89c-6e69-48ba-bcfb-784c9f0b238c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/runeb/food-recipes',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://food-recipes-web.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}}
  ]
}
