require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_GITHUB_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'mesto-frondend',
    script: 'npm run start',
  }],

  deploy: {
    production: {
      user: "ildar",
      host: "158.160.73.120",
      ref: 'origin/master',
      repo: "https://github.com/misterildar/web-plus-pm2-deploy.git",
      path: "/home/ildar/mesto-backend",
      'pre-deploy': 'scp./*.env ildar@158.160.73.120:/home/ildar/mesto-backend',
      'post-deploy': 'cd mesto-frondend && npm i && npm run build',
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
//                 'post-deploy': 'cd mesto-frondend && npm i && npm run build',
//   },
// },

