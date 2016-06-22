from __future__ import with_statement
from fabric.api import *

# Deploy branch
# Usage Example:
# fab deploy_branch:'BRANCH-NAME'
@hosts(['root@194.116.72.33'])
def deploy_branch(branch_name):
    with cd('/var/www/html/'):
        run('git checkout %s' % branch_name)
        run('git pull')
        run('grunt install')
        run('service apache2 reload')

@hosts(['root@194.116.72.33'])
def deploy_testnet():
    with cd('/var/www/testnet/'):
        run('git checkout testnet')
        run('git pull')
        run('grunt install')
        run('service apache2 reload')
