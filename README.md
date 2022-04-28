# webpack-federation-microfrontends

There not persistent state, you can login and logout, and the dashboard is only accesible once you log in. To see the application: https://d333lavre3n5j8.cloudfront.net/

There a set of workflows that deploys the different mfe directly to a S3 bucket, their deployments are independent based on changes in their respectives folders and are automatically applied by the container.

There are 4 different microfrontend in this project:
- 3 are written in React (Container, auth, marketing)
- 1 in vue (Dashboard)

The container mfe creates the layout and aggregate the rest of the frontends, also enabling the communication using callbacks (what will happen in the case of the neccesity of too many communication? Maybe send events to de DOM?).

The container centralised the auth.

Pros:
  - Webpack federation make the creation of different microfrontends easy.
  - Routing is independent per aplication (browser routing in case of container, in memory in case of the rest).
  - Pretty easy to share libraries if neccesary reducing size.
  - Pretty easy to lazy load the mfe only when you need them.

Cons:
  - Long time to see the page, what happen with low bandwidth conections?
  - Issues with SEO, what happen with the browsers without JS? 
