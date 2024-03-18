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
      host: '130.193.53.209',
      ref: 'origin/master',
      repo: 'https://github.com/misterildar/web-plus-pm2-deploy.git',
      path: '/home/ildar/web-plus-pm2-deploy/backend',
      'pre-deploy': 'scp./*.env ildar@130.193.53.209:/home/ildar/web-plus-pm2-deploy/backend',
      'post-deploy': 'cd web-plus-pm2-deploy/backend && npm i && npm run build',
    },
  },
};


