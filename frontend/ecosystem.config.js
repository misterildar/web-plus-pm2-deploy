require('dotenv').config({ path: '.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_GITHUB_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'frondend',
    script: './dist/app.js',
  }],


  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_GITHUB_PATH,
      path: DEPLOY_PATH,
      'post-deploy': 'cd web-plus-pm2-deploy/mesto-frontend && npm i && npm run build',
    },
  },
};




