require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_GITHUB_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'frondend',
    script: 'npm run start',
  }],

  deploy: {
    production: {
      user: "ildar",
      host: "130.193.53.209",
      ref: 'origin/master',
      repo: "https://github.com/misterildar/web-plus-pm2-deploy.git",
      path: "/home/ildar/web-plus-pm2-deploy",
      'pre-deploy': 'scp./*.env ildar@130.193.53.209:/home/ildar/web-plus-pm2-deploy/mesto-frontend',
      'post-deploy': 'cd web-plus-pm2-deploy/mesto-frontend && npm i && npm run build',
    },
  },
};


// deploy: {
//   production: {
//     user: DEPLOY_USER,
//       host: DEPLOY_HOST,
//         ref: DEPLOY_REF,
//           repo: DEPLOY_GITHUB_PATH,
//             path: DEPLOY_PATH,
//               'pre-deploy': `scp ./*.env ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}`,
//                 'post-deploy': 'cd web-plus-pm2-deploy/frontend && npm i && npm run build',
//   },
// },

