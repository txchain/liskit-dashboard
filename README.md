# liskit-dashboard
Simple lisk node dataviz

# Project at
http://txchain.github.io/liskit/

# Branches
    - master --> release branch
    - development --> development branch
    - feature-X --> new feature branch
    - release --> code tested and deployed

# Run
    - clone
    - $ sudo npm install
    - $ bower install
        - $ grunt install (compiles and fills dist folders)
        or
        - $ grunt (compiles, fills dist folders and serves @localhost:9000)


# Deploy

    - pip install fabric
    - fab deploy_branch:'BRANCH-NAME'
