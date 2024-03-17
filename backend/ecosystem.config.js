require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_GITHUB_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'backend',
    script: './dist/app.js',
  }],

  deploy: {
    production: {
      user: 'ildar',
      host: '158.160.73.120',
      ref: 'origin/master',
      repo: 'https://github.com/misterildar/web-plus-pm2-deploy.git',
      path: '/home/ildar/mesto-backend',
      'pre-deploy': 'scp ../.env ildar@158.160.73.120:/home/ildar/backend',
      'post-deploy': 'cd backend && npm i && npm run build',
    },
  },
};


